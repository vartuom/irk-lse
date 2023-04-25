import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import s from "./appealForm.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSecondStep } from "../../store/appealForm.slice";

export interface ISecondStep {
    email: string;
    extraContacts: string;
}
function SecondStep() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { firstName, middleName, email, extraContacts } = useAppSelector(
        (store) => ({
            firstName: store.appealForm.firstStep.firstName,
            middleName: store.appealForm.firstStep.middleName,
            email: store.appealForm.secondStep.email,
            extraContacts: store.appealForm.secondStep.extraContacts,
        }),
        () => true
    );

    const schema = yup.object({
        email: yup
            .string()
            .required("Это обязательное поле")
            .email("Это должен быть корректный адрес электронной почты"),
    });
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email,
            extraContacts,
        },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const subscription = watch((value) => {
            console.log(value);
            dispatch(setSecondStep(value as ISecondStep));
        });
        return () => subscription.unsubscribe();
    }, [watch, dispatch]);

    const onSubmit: SubmitHandler<ISecondStep> = (data) => {
        console.log(data);
        navigate("/appeals/stepThree", { state: "noScroll" });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
            <div className={s.lead}>
                <h2 className={s.lead_title}>
                    Хорошо, а куда нам направить ответ? (2 шаг из 4)
                </h2>
                <p className={s.lead_paragraph}>
                    {`${firstName} ${middleName}, прежде чем мы перейдем к вашему вопросу, 
                    укажите пожалуйста ваш адрес электронной почты. Как только 
                    ответ на обращение будет готов, 
                    мы отправим его отсканированную копию. 
                    Оригинал вы сможете получить в канцелярии нашего учреждения.`}
                </p>
            </div>
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <TextField
                        label="Электронная почта"
                        error={!!errors?.email}
                        helperText={
                            errors?.email ? errors?.email?.message : null
                        }
                        {...field}
                    />
                )}
            />
            <p className={s.lead_paragraph}>
                Следующее поле заполнять не обязательно, но в него вы можете
                дописать любые дополнительные контактные данные, которые сочтёте
                нужными (телефон, адрес и прочее).
            </p>
            <Controller
                name="extraContacts"
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

export default SecondStep;
