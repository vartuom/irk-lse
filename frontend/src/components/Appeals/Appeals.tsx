import React, { useCallback, useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useParams } from "react-router";

import Appeal from "../Appeal/Appeal";
import { IAppeal } from "../../types/types";
import AppealDocxCreator from "../Appeal/AppealDocxCreator/appealDocxCreator";
import style from "./Appeals.module.css";
import Pagination from "../paginationAppeals/PaginationAppeals";

function Appeals({ isProcessed }: { isProcessed?: boolean }) {
    const [appeals, setAppeals] = useState<Array<IAppeal>>([]);
    const { page } = useParams();
    const docxGenerator = AppealDocxCreator.init();

    useEffect(() => {
        let activeFetch = true;
        async function getAppeals() {
            const res = await fetch(
                `http://localhost:3000/appeals?processedStatus=${Boolean(
                    isProcessed
                )}`
            );
            const data = await res.json();
            if (activeFetch) {
                setAppeals(data);
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
                <Pagination
                    currentPage={page ?? 1}
                    isNextPageAvailable={false}
                />
            )}
        </div>
    );
}

export default Appeals;
