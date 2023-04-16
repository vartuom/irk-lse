import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import AccordionRow from "../accordionRow/accordionRow";
import s from "./appealForm.module.css";

interface IFormInput {
    appealText: string;
}
function Confirm() {
    const testName = "Геннадий Григорьевич";
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            appealText: "",
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

    const text = "123\nцйупамасфса\n5кнеинекгт\nкусце\nп р ама \n";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
            <div className={s.lead}>
                <h2 className={s.lead_title}>
                    Замечательно, перейдем к вашим вопросам (3 шаг из 3)
                </h2>
                <p className={s.lead_paragraph}>
                    {`${testName}, Пожалуйста изложите в краткой форме свой 
                    вопрос и обстоятельства, имеющие значение для его 
                    рассмотрения. Например, вы можете указать в рамках какого 
                    производства (уголовного, гражданского или иного) и в каком 
                    суде рассматривается дело. Постарайтесь избегать 
                    расплывчатых формулировок и излишних подробностей. 
                    Так наш ответ будет максимально быстрым и полным.`}
                </p>
            </div>
            <Controller
                name="appealText"
                control={control}
                render={({ field }) => (
                    <TextField
                        label="Ваши вопросы..."
                        multiline
                        rows={15}
                        inputProps={{ maxLength: 5000 }}
                        {...field}
                    />
                )}
            />
            <input type="submit" />
        </form>
    );
}

export default Confirm;
