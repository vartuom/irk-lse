import React, { useEffect, useState } from "react";
import Appeal from "../Appeal/Appeal";

interface IAppeal {
    id: number;
    appealerName: string;
    appealerEmail: string;
    appealText: string;
    extras?: string;
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
                    appealerName={appeal.appealerName}
                    appealerEmail={appeal.appealerEmail}
                    appealText={appeal.appealText}
                    id={appeal.id}
                    key={appeal.id}
                />
            ))}
        </div>
    );
}

export default Appeals;
