import React, { useCallback, useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useParams } from "react-router";
import { Pagination as MuiPagination, PaginationItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import axiosAuthInstance from "../../api/axiosAuth";

import Appeal from "../appeal/appeal";
import { IAppeal } from "../../types/types";
import AppealDocxCreator from "../appeal/appealDocxCreator/appealDocxCreator";
import style from "./appeals.module.css";
import Pagination from "../paginationAppeals/PaginationAppeals";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setAppeals } from "../../store/appeals.slice";
import { sleep } from "../../utils/utils";
import { baseUrl } from "../../utils/constants";

function Appeals({ isProcessed }: { isProcessed?: boolean }) {
    const appeals = useAppSelector((state) => state.appeals.appeals);
    const [isFetching, setIsFetching] = useState(true);
    const dispatch = useAppDispatch();
    const [appealsCount, setAppealsCount] = useState(0);
    const { page } = useParams();
    const docxGenerator = AppealDocxCreator.init();

    useEffect(() => {
        let activeFetch = true;
        setIsFetching(true);
        async function getAppeals() {
            let queryString = `${baseUrl}/appeals?processedStatus=false`;
            if (isProcessed) {
                queryString = `${baseUrl}/appeals?processedStatus=true&page=${
                    page ?? 1
                }`;
            }
            const res = await axiosAuthInstance.get<[Array<IAppeal>, number]>(
                queryString
            );
            const [data, count] = res.data;
            await sleep(1000);
            if (activeFetch) {
                dispatch(setAppeals(data));
                setAppealsCount(count);
                setIsFetching(false);
            }
        }

        getAppeals();

        return () => {
            console.log("exit");
            activeFetch = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isProcessed, page]);

    const saveDocx = useCallback(async () => {
        docxGenerator.setAllAppeals(appeals);
        const blob = await docxGenerator.generateAllAppeals();
        saveAs(blob, `Обращения.docx`, { autoBom: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appeals]);

    if (isFetching) return <div>Загрузка...</div>;

    return (
        <div>
            {!isProcessed && (
                <button
                    type="button"
                    className={style.printAll}
                    onClick={() => saveDocx()}
                >
                    Скачать все обращения
                </button>
            )}
            {appeals.map((appeal) => (
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
            ))}
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