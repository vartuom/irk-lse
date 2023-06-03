import React, { useCallback, useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useParams } from "react-router";
import { Pagination as MuiPagination, PaginationItem } from "@mui/material";
import { NavLink } from "react-router-dom";

import empty from "../../images/empty.png";
import Appeal from "../appeal/appeal";
import { IAppeal } from "../../types/types";
import AppealDocxCreator from "../appeal/appealDocxCreator/appealDocxCreator";
import style from "./appeals.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setAppeals } from "../../store/appeals.slice";
import { sleep } from "../../utils/utils";
import { axiosPrivate } from "../../api/axios";
import AppealsFilter from "../appealsFilter/appealsFilter";
import AppealsLoader from "../appealsLoader/appealsLoader";
import FancyAppealLoader from "../fancyAppealLoader/fancyAppealLoader";
import { createURL } from "../../api/api";

function Appeals({ isProcessed }: { isProcessed?: boolean }) {
    const appeals = useAppSelector((state) => state.appeals.appeals);
    const { sort, name, startDate, endDate, email } = useAppSelector(
        (state) => state.appealsFilter
    );
    const dispatch = useAppDispatch();
    const { page } = useParams();

    const [isFetching, setIsFetching] = useState(true);
    const [appealsCount, setAppealsCount] = useState(0);
    const docxGenerator = AppealDocxCreator.init();

    useEffect(() => {
        let activeFetch = true;
        setIsFetching(true);
        async function getAppeals() {
            const queryString = createURL(
                {
                    isProcessed: Boolean(isProcessed),
                    page: isProcessed ? page ?? 1 : undefined,
                    sort,
                    name,
                    email,
                    startDate,
                    endDate,
                },
                "/appeals"
            );
            const res = await axiosPrivate.get<[Array<IAppeal>, number]>(
                queryString
            );
            const [data, count] = res.data;
            await sleep(5000);
            if (activeFetch) {
                dispatch(setAppeals(data));
                setAppealsCount(count);
                setIsFetching(false);
            }
        }

        getAppeals();

        return () => {
            activeFetch = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isProcessed, page, name, email, startDate, endDate, sort]);

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
            />
            {/* eslint-disable-next-line no-nested-ternary*/}
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
