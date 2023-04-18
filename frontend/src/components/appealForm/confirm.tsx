import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import s from "./appealForm.module.css";

function Confirm() {
    const schema = yup.object({
        isAgreed: yup.bool().oneOf([true], "Вы должны подтвердить готовность"),
    });
    const navigate = useNavigate();
    const store = {
        firstName: "Артем",
        lastName: "Васильев",
        patronymic: "Сергеевич",
        email: "v.artuom@ya.ru",
        extras: "г. Иркутск. Ул. Красноказачья д. 131.\nт. +7 924 620-22-43.",
        appealTheme: "Запрос о сроках и стоимости",
        appealText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a nibh vitae urna vehicula varius. Morbi sagittis, justo non suscipit auctor, quam enim pulvinar nunc, sit amet tincidunt nibh nunc eu lectus. Donec in lacus elementum, iaculis nisi eu, elementum est. \nSed et pulvinar nibh. Nulla blandit suscipit maximus. Phasellus aliquam diam in sapien tincidunt, in cursus quam interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer turpis tellus, venenatis non vestibulum sit amet, eleifend varius nulla. In tempus malesuada orci id semper. Proin viverra consequat urna ac hendrerit.\nDonec eget erat a lectus sollicitudin tincidunt. Curabitur sem odio, tempor at euismod vel, mollis nec velit. \nMaecenas sit amet turpis a purus interdum cursus in et diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl dui, sit amet porttitor sem auctor vitae. Nullam et elit gravida felis convallis porttitor ut a risus. Morbi nec arcu augue. Fusce eu scelerisque augue, dapibus cursus arcu. Ut scelerisque dolor purus, quis fermentum enim laoreet in. Nullam sapien est, dapibus et dapibus nec, faucibus interdum odio. Suspendisse varius porta dolor, in pulvinar magna facilisis sit amet. Donec cursus dapibus sagittis. Nulla facilisi. Fusce quis quam sit amet ex luctus ornare. Vestibulum consequat justo nisl.\n\nС уважением, Иванов И. И.",
    };

    const {
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const extrasParagraphs = store.extras.split("\n");
    const appealParagraphs = store.appealText.split("\n");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
            <div className={s.lead}>
                <h2 className={s.lead_title}>
                    Почти готово, осталось только проверить (4 шаг из 4)
                </h2>
                <p className={s.lead_paragraph}>
                    <span className="spanBold">Заявитель: </span>{" "}
                    {`${store.lastName} ${store.firstName} ${store.patronymic}`}
                </p>
                {extrasParagraphs.map((paragraph, index) => (
                    <p className={s.lead_paragraph} key={index}>
                        {paragraph}
                    </p>
                ))}
                <p className={s.lead_paragraph}>
                    <span className="spanBold">Тема обращения: </span>{" "}
                    {`${store.appealTheme}`}
                </p>
                {appealParagraphs.map((paragraph, index) => (
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

export default Confirm;
