import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input, Select, TextField } from "@mui/material";
import s from "./appealForm.module.css";
import AccordionRow from "../accordionRow/accordionRow";

interface IFormInput {
    firstName: string;
    lastName: string;
    patronymic: string;
}
function StepOne() {
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            patronymic: "",
        },
    });

    useEffect(() => {
        const subscription = watch((value, { name, type }) =>
            console.log(value, name, type)
        );
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
            <div className={s.lead}>
                <h2 className={s.lead_title}>
                    Отлично, сперва познакомимся (1 шаг из 3)
                </h2>
                <AccordionRow title="Почему это важно?">
                    <p className={s.lead_paragraph}>
                        Мы не ответим на анонимное обращение. Это закон.
                    </p>
                </AccordionRow>
                <p className={s.lead_paragraph}>
                    Мы используем эти данные только для того, чтобы адресовать
                    вам ответ и не храним их дольше необходимого. Как только
                    ответ на ваше обращение будет подготовлен, мы их удалим.
                </p>
            </div>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <TextField label="Имя" {...field} />}
            />
            <Controller
                name="lastName"
                control={control}
                render={({ field }) => <TextField label="Фамилия" {...field} />}
            />
            <Controller
                name="patronymic"
                control={control}
                render={({ field }) => (
                    <TextField label="Отчество (при наличии)" {...field} />
                )}
            />
            <p className={s.lead_paragraph}>
                Подробнее с политикой обработки персональных данных вы можете
                ознакомиться <span className="spanAccent"> по ссылке.</span>
            </p>
            <input type="submit" />
        </form>
    );
}

export default StepOne;
