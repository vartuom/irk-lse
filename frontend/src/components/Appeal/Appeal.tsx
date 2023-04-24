import React, { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import style from "./Appeal.module.css";

interface IAppeal {
    id: number;
    appealerName: string;
    appealerEmail: string;
    appealText: string;
    extras?: string;
}

export default function Appeal({
    appealerName,
    appealerEmail,
    appealText,
    extras,
    id,
}: IAppeal) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={style.appeal}>
            <div className={style.appeal__info}>
                <div className={style.appeal__titleContainer}>
                    <DescriptionIcon sx={{ fontSize: 48 }} />
                    <p
                        className={style.appeal__title}
                    >{`Обращение номер: #${id}`}</p>
                </div>
                <hr className={style.titleSeparator} />
                <div className={style.appeal__text} aria-expanded={isActive}>
                    <p>{appealText}</p>
                </div>
                <button
                    type="button"
                    className={style.overflowButton}
                    onClick={() => setIsActive(!isActive)}
                >
                    {isActive ? "Свернуть" : "Читать Дальше"}
                </button>

                <div className={style.appeal__buttons}>
                    <div className={style.buttons__redact}>
                        <button className={style.appeal__button} type="button">
                            Редактировать
                        </button>
                        <button className={style.appeal__button} type="button">
                            В обработанные
                        </button>
                        <button className={style.appeal__button} type="button">
                            Дать ответ
                        </button>
                    </div>

                    <button className={style.appeal__button} type="button">
                        Печать
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
                    <div className={style.appealer__name}>{appealerName}</div>
                    <div className={style.appealer__email}>{appealerEmail}</div>
                </div>
            </div>
        </div>
    );
}
