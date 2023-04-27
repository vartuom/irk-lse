import React, { useEffect, useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";
import { saveAs } from "file-saver";
import moment from "moment";

import style from "./Appeal.module.css";
import AppealDocxCreator from "./AppealDocxCreator/appealDocxCreator";
import { IAppeal } from "../../types/types";

export default function Appeal({
    firstName,
    lastName,
    email,
    createdAt,
    updatedAt,
    appealText,
    extraContacts,
    middleName,
    isProcessed,
    id,
}: IAppeal) {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const docxGenerator = AppealDocxCreator.init();

    const saveDocx = async () => {
        docxGenerator.setAppeal({
            firstName,
            lastName,
            email,
            createdAt,
            updatedAt,
            appealText,
            extraContacts,
            middleName,
            isProcessed,
            id,
        });
        const blob = await docxGenerator.generate();
        saveAs(blob, `Обращение${id}.docx`, { autoBom: true });
    };

    const changeProcessedStatus = async () => {
        const response = await fetch(`http://localhost:3000/appeals/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ processedStatus: !isProcessed }),
        });
        console.log(response.status);
    };

    return (
        <div className={style.appeal}>
            <div className={style.appeal__info}>
                <div className={style.appeal__titleContainer}>
                    <div className={style.appeal__titleLeft}>
                        <DescriptionIcon sx={{ fontSize: 48 }} />
                        <p
                            className={style.appeal__title}
                        >{`Обращение номер: #${id}`}</p>
                    </div>
                </div>
                <hr className={style.titleSeparator} />
                <div className={style.appeal__text} aria-expanded={isActive}>
                    <p>{appealText}</p>
                    <p className={style.appeal__date}>
                        {moment(createdAt).format("Do MMMM YYYY, HH:mm")}
                    </p>
                </div>
                <button
                    type="button"
                    className={style.overflowButton}
                    onClick={() => setIsActive(!isActive)}
                >
                    {isActive ? "Свернуть" : "Читать Дальше"}
                </button>

                <div className={style.appeal__buttons}>
                    <button className={style.appeal__button} type="button">
                        Редактировать
                    </button>
                    <button
                        onClick={changeProcessedStatus}
                        className={style.appeal__button}
                        type="button"
                    >
                        {isProcessed ? "Вернуть" : "В обработанные"}
                    </button>
                    <button className={style.appeal__button} type="button">
                        Дать ответ
                    </button>
                    <button
                        onClick={() => {
                            saveDocx();
                        }}
                        className={style.appeal__button}
                        type="button"
                    >
                        Скачать
                    </button>
                </div>
            </div>
            <div className={style.appealer}>
                <AccountCircleIcon
                    className={style.appealer__icon}
                    sx={{ fontSize: 64, display: "none" }}
                />
                <div className={style.appeler__info}>
                    <div className={style.appealer__title}>Отправитель</div>
                    <div className={style.appealer__text}>{lastName}</div>
                    <div className={style.appealer__text}>{firstName}</div>
                    {middleName && (
                        <div className={style.appealer__text}>{middleName}</div>
                    )}
                    <div className={style.appealer__email}>{email}</div>
                    {extraContacts && (
                        <div className={style.appealer__extraContacts}>
                            {extraContacts}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
