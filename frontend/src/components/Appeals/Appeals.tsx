import React, { useCallback, useEffect, useState } from "react";
import { saveAs } from "file-saver";

import Appeal from "../Appeal/Appeal";
import { IAppeal } from "../../types/types";
import AppealDocxCreator from "../Appeal/AppealDocxCreator/appealDocxCreator";
import style from "./Appeals.module.css";

function Appeals({ isProcessed }: { isProcessed?: boolean }) {
    const [appeals, setAppeals] = useState<Array<IAppeal>>([]);
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
            activeFetch = false;
        };
    }, [isProcessed]);

    const saveDocx = useCallback(async () => {
        docxGenerator.setAllAppeals(appeals);
        const blob = await docxGenerator.generateAllAppeals();
        saveAs(blob, `Обращения.docx`, { autoBom: true });
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
        </div>
    );
}

export default Appeals;
