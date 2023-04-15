import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import AccordionRow from "../accordionRow/accordionRow";
import s from "./appealForm.module.css";

interface IFormInput {
    email: string;
    lastName: string;
    patronymic: string;
}
function StepTwo() {
    const testName = "Геннадий Григорьевич";
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            email: "",
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
                    Замечательно, перейдем к вашим вопросам (3 шаг из 3)
                </h2>
                <p className={s.lead_paragraph}>
                    {`${testName}, прежде чем мы перейдем к вашему вопросу, 
                    укажите пожалуйста ваш адрес электронной почты. Как только 
                    ответ на обращение будет готов, 
                    мы отправим на этот адрес отсканированную копию документа. 
                    Оригинал вы сможете получить в канцелярии нашего учреждения.`}
                </p>
            </div>
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <TextField label="Электронная почта" {...field} />
                )}
            />
            <p className={s.lead_paragraph}>
                Следующее поле заполнять не обязательно, но в него вы можете
                дописать любые дополнительные контактные данные, которые сочтёте
                нужными (телефон, адрес и прочее).
            </p>
            <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                    <TextField
                        label="Дополнительные контактные данные (не обязательно)"
                        multiline
                        inputProps={{
                            style: {
                                minHeight: "100px",
                            },
                        }}
                        {...field}
                    />
                )}
            />
            <input type="submit" />
        </form>
    );
}

export default StepTwo;
