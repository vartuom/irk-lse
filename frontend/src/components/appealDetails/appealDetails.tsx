import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useNavigate } from "react-router-dom";
import s from "./appealDetails.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { resetForm } from "../../store/appealForm.slice";

function AppealDetails() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { email, appealDetails } = useAppSelector((store) => ({
        email: store.appealForm.secondStep.email,
        appealDetails: store.appealForm.appealDetails,
    }));

    const handleFormSubmit = () => {
        dispatch(resetForm());
        navigate("/appeals");
    };

    return (
        <div className={s.container}>
            <div className={s.container__lead}>
                <MarkEmailReadIcon
                    sx={{
                        fontSize: 150,
                        alignSelf: "center",
                        justifySelf: "center",
                        color: "#ebf1f9",
                    }}
                />
                <h2 className={s.container__title}>Ваше обращение принято!</h2>
                <p className={s.container__paragraph}>
                    Реквизиты обращения:{" "}
                    <span className="spanBold">{appealDetails}</span>*
                </p>
                <p
                    className={`${s.container__paragraph} ${s.container__paragraph_type_tip}`}
                >
                    *(рекомендуем их записать)
                </p>
            </div>
            <div>
                <p className={s.container__paragraph}>
                    Ответ на обращение будет направлен на указанный вами адрес
                    электронной почты: <span className="spanBold">{email}</span>
                    .
                </p>
                <p className={s.container__paragraph}>
                    Обычно мы отвечаем на обращения в течение трех рабочих дней,
                    но в случае высокой загруженности экспертов срок ответа
                    может быть увеличен.
                </p>
                <p className={s.container__paragraph}>
                    Статус вашего обращения вы можете уточнить по телефону
                    канцелярии: 8 (3952) 70-22-98.
                </p>
            </div>
            <button
                type="button"
                aria-label="Закрыть"
                className={`${s.button} ${s.button_type_primary}`}
                onClick={handleFormSubmit}
            >
                Закрыть
            </button>
        </div>
    );
}

export default AppealDetails;
