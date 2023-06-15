import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import s from "./appealForm.module.css";
import AccordionRow from "../accordionRow/accordionRow";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
    setCurrentStepNumber,
    setFirstStep,
} from "../../store/appealForm.slice";
import ResponsiveTextField from "../responsiveTextField/responsiveTextField";

export interface IFirstStep {
    firstName: string;
    lastName: string;
    middleName: string;
}

function FirstStep() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // используем функцию сравнения () => true что бы избежать лишних ререндеров
    const { firstName, lastName, middleName } = useAppSelector(
        (store) => ({
            firstName: store.appealForm.firstStep.firstName,
            lastName: store.appealForm.firstStep.lastName,
            middleName: store.appealForm.firstStep.middleName,
        }),
        () => true
    );

    const schema = yup.object({
        firstName: yup
            .string()
            .required("Это обязательное поле")
            .matches(/^([^0-9]*)$/, "В имени могут быть только буквы"),
        lastName: yup
            .string()
            .required("Это обязательное поле")
            .matches(/^([^0-9]*)$/, "В фамилии могут быть только буквы"),
        patronymic: yup
            .string()
            .matches(/^([^0-9]*)$/, "В отчестве могут быть только буквы"),
    });

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            firstName,
            lastName,
            middleName,
        },
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    useEffect(() => {
        dispatch(setCurrentStepNumber({ step: 0 }));
    }, []);

    useEffect(() => {
        const subscription = watch((value) => {
            console.log(value);
            dispatch(setFirstStep(value as IFirstStep));
        });
        return () => subscription.unsubscribe();
    }, [watch, dispatch]);

    const onSubmit: SubmitHandler<IFirstStep> = (data) => {
        console.log(data);
        navigate("stepTwo", { state: "noScroll" });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
            <div className={s.lead}>
                <h2 className={s.lead_title}>Отлично, сперва познакомимся</h2>
                <AccordionRow borders="none" title="Почему это важно?">
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
                name="lastName"
                control={control}
                render={({ field }) => (
                    <ResponsiveTextField
                        label="Фамилия"
                        error={!!errors?.lastName}
                        helperText={
                            errors?.lastName ? errors?.lastName?.message : null
                        }
                        {...field}
                    />
                )}
            />
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                    <ResponsiveTextField
                        label="Имя"
                        error={!!errors?.firstName}
                        helperText={
                            errors?.firstName
                                ? errors?.firstName?.message
                                : null
                        }
                        {...field}
                    />
                )}
            />
            <Controller
                name="middleName"
                control={control}
                render={({ field }) => (
                    <ResponsiveTextField
                        label="Отчество (при наличии)"
                        error={!!errors?.middleName}
                        helperText={
                            errors?.middleName
                                ? errors?.middleName?.message
                                : null
                        }
                        {...field}
                    />
                )}
            />
            <p className={s.lead_paragraph}>
                Подробнее с политикой обработки персональных данных вы можете
                ознакомиться <span className="spanAccent"> по ссылке.</span>
            </p>
            <button
                type="submit"
                aria-label="Отправить"
                className={`${s.button} ${s.button_type_primary} ${
                    !isValid && s.button_type_inactive
                }`}
            >
                Продолжить
            </button>
        </form>
    );
}

export default FirstStep;
