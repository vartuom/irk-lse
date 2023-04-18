import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
    Checkbox,
    FormControlLabel,
    Input,
    Select,
    TextField,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import s from "./appealForm.module.css";
import AccordionRow from "../accordionRow/accordionRow";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setFirstStepState } from "../../store/appealFormSlice";

interface IFormInput {
    firstName: string;
    lastName: string;
    patronymic: string;
    isAgreed: boolean;
}

function StepOne() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // используем функцию сравнения () => true что бы избежать лишних ререндеров
    const { firstName, lastName, patronymic } = useAppSelector(
        (store) => ({
            firstName: store.appealForm.firstName,
            lastName: store.appealForm.lastName,
            patronymic: store.appealForm.patronymic,
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
        isAgreed: yup
            .bool()
            .oneOf(
                [true],
                "Вы должны принять условия обработки персональных данных"
            ),
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
            patronymic,
            isAgreed: false,
        },
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            console.log(value);
            dispatch(setFirstStepState(value));
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        navigate("stepTwo", { state: "noScroll" });
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
                render={({ field }) => (
                    <TextField
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
                name="lastName"
                control={control}
                render={({ field }) => (
                    <TextField
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
                name="patronymic"
                control={control}
                render={({ field }) => (
                    <TextField
                        label="Отчество"
                        error={!!errors?.patronymic}
                        helperText={
                            errors?.patronymic
                                ? errors?.patronymic?.message
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
            <Controller
                name="isAgreed"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <FormControlLabel
                        control={<Checkbox {...field} />}
                        label={
                            <p className={s.formLabel}>
                                Нажимая кнопку «Продолжить» я даю согласие на
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
                Продолжить
            </button>
        </form>
    );
}

export default StepOne;
