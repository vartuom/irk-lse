import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import s from "./appealForm.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSecondStep, setThirdStep } from "../../store/appealForm.slice";

export interface IThirdStep {
    appealText: string;
}
function ThirdStep() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const schema = yup.object({
        appealText: yup.string().required("Это обязательное поле"),
    });

    const { appealText } = useAppSelector(
        (store) => ({
            appealText: store.appealForm.thirdStep.appealText,
        }),
        () => true
    );

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            appealText,
        },
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    useEffect(() => {
        const subscription = watch((value) => {
            console.log(value);
            dispatch(setThirdStep(value as IThirdStep));
        });
        return () => subscription.unsubscribe();
    }, [watch, dispatch]);

    const onSubmit: SubmitHandler<IThirdStep> = (data) => {
        navigate("/appeals/confirm", { state: "noScroll" });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
            <div className={s.lead}>
                <h2 className={s.lead_title}>
                    Замечательно, перейдем к вашим вопросам (3 шаг из 4)
                </h2>
                <p className={s.lead_paragraph}>
                    Пожалуйста изложите в краткой форме свой вопрос и
                    обстоятельства, имеющие значение для его рассмотрения.
                    Например, вы можете указать в рамках какого производства
                    (уголовного, гражданского или иного) и в каком суде
                    рассматривается дело. Постарайтесь избегать расплывчатых
                    формулировок и излишних подробностей. Так наш ответ будет
                    максимально быстрым и полным.
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
                        error={!!errors?.appealText}
                        helperText={
                            errors?.appealText
                                ? errors?.appealText?.message
                                : null
                        }
                        inputProps={{ maxLength: 5000 }}
                        {...field}
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
                Продолжить
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

export default ThirdStep;
