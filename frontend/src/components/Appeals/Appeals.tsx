import React, { useCallback, useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useParams } from "react-router";
import { Pagination as MuiPagination, PaginationItem } from "@mui/material";
import { NavLink } from "react-router-dom";

import Appeal from "../Appeal/Appeal";
import { IAppeal } from "../../types/types";
import AppealDocxCreator from "../Appeal/AppealDocxCreator/appealDocxCreator";
import style from "./Appeals.module.css";
import Pagination from "../paginationAppeals/PaginationAppeals";

function Appeals({ isProcessed }: { isProcessed?: boolean }) {
    const [appeals, setAppeals] = useState<Array<IAppeal>>([]);
    const [appealsCount, setAppealsCount] = useState(0);
    const { page } = useParams();
    const docxGenerator = AppealDocxCreator.init();

    useEffect(() => {
        let activeFetch = true;
        async function getAppeals() {
            let queryString =
                "http://localhost:3000/appeals?processedStatus=false";
            if (isProcessed) {
                queryString = `http://localhost:3000/appeals?processedStatus=true&page=${
                    page ?? 1
                }`;
            }
            const res = await fetch(queryString);
            const [data, count] = await res.json();
            if (activeFetch) {
                setAppeals(data);
                setAppealsCount(count);
            }
        }

        getAppeals();

        return () => {
            console.log("exit");
            activeFetch = false;
        };
    }, [isProcessed, page]);

    useEffect(() => {
        console.log(page);
    }, [page]);

    const saveDocx = useCallback(async () => {
        docxGenerator.setAllAppeals(appeals);
        const blob = await docxGenerator.generateAllAppeals();
        saveAs(blob, `Обращения.docx`, { autoBom: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appeals]);

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
