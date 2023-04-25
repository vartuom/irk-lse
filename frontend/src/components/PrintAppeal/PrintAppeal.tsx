import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";
import "moment/dist/locale/ru";

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

function PrintAppeal() {
    const { id } = useParams();
    moment.locale("ru");
    const [appeal, setAppeal] = useState<IAppeal>();

    useEffect(() => {
        let active = true;
        const getAppealById = async (_id?: string) => {
            if (_id) {
                const res = await fetch(`http://localhost:3000/appeals/${id}`);
                const appealData = await res.json();
                console.log(appealData);
                if (active) {
                    setAppeal(appealData);
                }
            } else {
                throw new Error("id of appeal is undefined");
            }
        };

        if (!appeal) {
            getAppealById(id);
        } else {
            window.print();
        }

        return () => {
            active = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appeal]);

    return (
        <div className="appeal">
            <div className="appeal__appealer appealer">
                <div className="appealer__name">{`${appeal?.lastName} ${
                    appeal?.firstName
                } ${appeal?.middleName ?? ""}`}</div>
                <div className="appealer__email">{appeal?.email}</div>
                <div className="appealer__extraContacts">
                    {appeal?.extraContacts}
                </div>
            </div>
            <div className="appeal__info">
                <div className="appeal__title title">
                    <div className="title__text">{`Обращение номер: ${appeal?.id}`}</div>
                    <div className="title__createdDate">
                        {`Создано ${moment(appeal?.createdAt).format(
                            "Do MMMM YYYY, HH:mm:ss"
                        )}`}
                    </div>
                    <div className="title__updatedDate">
                        {`Редактировано ${moment(appeal?.updatedAt).format(
                            "Do MMMM YYYY, HH:mm:ss"
                        )}`}
                    </div>
                    <div className="title__status">
                        {appeal?.isProcessed ? "Обработано" : "Необработано"}
                    </div>
                </div>
                <div className="appeal__text">{appeal?.appealText}</div>
            </div>
        </div>
    );
}

export default PrintAppeal;
