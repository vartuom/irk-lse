import React, { useCallback, useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useParams } from "react-router";
import { Pagination as MuiPagination, PaginationItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import moment from "moment";
import empty from "../../images/empty.png";
import Appeal from "../appeal/appeal";
import { IAppeal, IFilterOptions } from "../../types/types";
import AppealDocxCreator from "../appeal/appealDocxCreator/appealDocxCreator";
import style from "./appeals.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { sleep } from "../../utils/utils";
import AppealsFilter from "../appealsFilter/appealsFilter";
import FancyAppealLoader from "../fancyAppealLoader/fancyAppealLoader";
import { createURL } from "../../api/api";
import { axiosPrivate } from "../../api/axios";

function Appeals({ isProcessed }: { isProcessed?: boolean }) {
    const dispatch = useAppDispatch();
    const { page } = useParams();

    const [isFetching, setIsFetching] = useState(true);
    const [appealsCount, setAppealsCount] = useState(0);
    const [appeals, setAppeals] = useState([]);
    const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
        name: "",
        email: "",
        // fromDate: moment(Date.now()),
        // toDate: moment(Date.now()),
        fromDate: null,
        toDate: null,
        sortOrder: "DATE_CREATED",
    });
    const docxGenerator = AppealDocxCreator.init();

    useEffect(() => {
        let activeFetch = true;
        setIsFetching(true);
        async function getAppeals() {
            const queryString = createURL(
                {
                    isProcessed: Boolean(isProcessed),
                    page: isProcessed ? page ?? 1 : undefined,
                    sort: filterOptions.sortOrder,
                    name: filterOptions.name,
                    email: filterOptions.email,
                    startDate: filterOptions.fromDate
                        ? filterOptions.fromDate.valueOf()
                        : "",
                    endDate: filterOptions.fromDate
                        ? filterOptions.fromDate.valueOf()
                        : "",
                },
                "/appeals"
            );
            const res = await axiosPrivate.get<[Array<IAppeal>, number]>(
                queryString
            );
            const [data, count] = res.data;
            await sleep(5000);
            if (activeFetch) {
                setAppeals(data);
                setAppealsCount(count);
                setIsFetching(false);
            }
        }

        getAppeals();

        return () => {
            activeFetch = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isProcessed, page, filterOptions]);

    const saveDocx = useCallback(async () => {
        docxGenerator.setAllAppeals(appeals);
        const blob = await docxGenerator.generateAllAppeals();
        saveAs(blob, `Обращения.docx`, { autoBom: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appeals]);

    return (
        <div>
            <AppealsFilter
                isProcessed={isProcessed}
                generateAllAppeals={saveDocx}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
            />
            {/* eslint-disable-next-line no-nested-ternary */}
            {isFetching ? (
                // AppealsLoader isProcessed page={page} />
                <FancyAppealLoader isProcessed page={page} />
            ) : appeals.length ? (
                appeals.map((appeal) => (
                    <Appeal
                        firstName={appeal.firstName}
                        lastName={appeal.lastName}
                        middleName={appeal.middleName}
                        email={appeal.email}
                        appealText={appeal.appealText}
                        id={appeal.id}
                        key={appeal.id}
                        isProcessed={isProcessed}
                        extraContacts={appeal.extraContacts}
                        createdAt={appeal.createdAt}
                        updatedAt={appeal.updatedAt}
                    />
                ))
            ) : (
                <div className={style.empty}>
                    <img
                        width={256}
                        height={256}
                        src={empty}
                        alt="empty result"
                        className={style.empty__img}
                    />
                    <p className={style.empty__text}>Ничего не найдено</p>
                </div>
            )}
            {isProcessed && (
                <MuiPagination
                    showFirstButton
                    showLastButton
                    color="primary"
                    size="medium"
                    className={style.pagination}
                    count={Math.ceil(appealsCount / 8)}
                    page={page ? +page : 1}
                    renderItem={(item) => (
                        <PaginationItem
                            component={NavLink}
                            sx={{ fontSize: "18px" }}
                            to={`${item.page === 1 ? "" : `${item.page}`}`}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...item}
                        />
                    )}
                />
            )}
        </div>
    );
}

export default Appeals;
