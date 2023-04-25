import React, { useEffect, useState } from "react";
import Appeal from "../Appeal/Appeal";

interface IAppeal {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    firstName: string;
    lastName: string;
    middleName?: string;
    email: string;
    appealText: string;
    isProcessed?: boolean;
    extraContacts?: string;
}

function Appeals({ isProcessed }: { isProcessed?: boolean }) {
    const [appeals, setAppeals] = useState<Array<IAppeal>>([]);

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

    return (
        <div>
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
