import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import s from "./appealForm.module.css";
import { useAppSelector } from "../../store/store";

function ConfirmStep() {
    const {
        firstName,
        lastName,
        patronymic,
        email,
        extraContacts,
        appealText,
    } = useAppSelector(
        (store) => ({
            firstName: store.appealForm.firstStep.firstName,
            lastName: store.appealForm.firstStep.lastName,
            patronymic: store.appealForm.firstStep.patronymic,
            email: store.appealForm.secondStep.email,
            extraContacts: store.appealForm.secondStep.extraContacts,
            appealText: store.appealForm.thirdStep.appealText,
        }),
        () => true
    );

    const schema = yup.object({
        isAgreed: yup.bool().oneOf([true], "Вы должны подтвердить готовность"),
    });
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const extraContactsParagraphs = extraContacts.split("\n");
    const appealParagraphs = appealText.split("\n");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
            <div className={s.lead}>
                <h2 className={s.lead_title}>
                    Почти готово, осталось только проверить (4 шаг из 4)
                </h2>
                <p className={s.lead_paragraph}>
                    <span className="spanBold">Заявитель: </span>{" "}
                    {`${lastName} ${firstName} ${patronymic}`}
                </p>
                <p className={s.lead_paragraph}>
                    <span className="spanBold">Эл. почта: </span>
                    {email}
                </p>
                {extraContactsParagraphs.map((paragraph, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <p className={s.lead_paragraph} key={index}>
                        {paragraph}
                    </p>
                ))}
                <p className={s.lead_paragraph}>
                    <span className="spanBold">Текст обращения:</span>
                </p>
                {appealParagraphs.map((paragraph, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <p className={s.lead_paragraph} key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>
            <Controller
                name="isAgreed"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <FormControlLabel
                        control={<Checkbox {...field} />}
                        label={
                            <p className={s.formLabel}>
                                Нажимая кнопку «Отправить» я даю согласие на
                                обработку своих персональных данных в
                                соответствии с{" "}
                                <span className="spanAccent"> Условиями.</span>
                            </p>
                        }
                    />
                )}
            />
            <button
                type="submit"
                aria-label="Отправить"
                className={`${s.button} ${s.button_type_primary} ${
                    !isValid && s.button_type_inactive
                }`}
            >
                Отправить
            </button>
            <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Назад"
                className={`${s.button} ${s.button_type_secondary}`}
            >
                Назад
            </button>
        </form>
    );
}

export default ConfirmStep;
