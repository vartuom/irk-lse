import React, { useEffect, useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";
import { saveAs } from "file-saver";
import moment from "moment";
import axios from "axios";

import style from "./appeal.module.css";
import AppealDocxCreator from "./appealDocxCreator/appealDocxCreator";
import { IAppeal } from "../../types/types";
import { useAppDispatch } from "../../store/store";
import { filterAppeals } from "../../store/appeals.slice";
import { sleep } from "../../utils/utils";
import { BASE_URL } from "../../utils/constants";

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
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

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
        setIsFetching(true);
        const response = await axios.post(
            `${BASE_URL}/appeals/${id}`,
            {
                processedStatus: !isProcessed,
            },
            { headers: { "Content-Type": "application/json" } }
        );
        await sleep(3000);
        setIsFetching(false);
        dispatch(filterAppeals({ id }));
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
                    {/* {appealText.split("\n").map((text) => (
                        <p>{text}</p>
                    ))} */}
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
                    {isFetching ? (
                        "Загрузка..."
                    ) : (
                        <>
                            <button
                                className={style.appeal__button}
                                type="button"
                            >
                                Редактировать
                            </button>
                            <button
                                onClick={changeProcessedStatus}
                                className={style.appeal__button}
                                type="button"
                            >
                                {isProcessed ? "Вернуть" : "В обработанные"}
                            </button>
                            <button
                                className={style.appeal__button}
                                type="button"
                            >
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
                        </>
                    )}
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
