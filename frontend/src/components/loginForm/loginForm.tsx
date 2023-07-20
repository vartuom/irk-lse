import { TextField, styled, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TailSpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";
import styles from "./loginForm.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchLogIn, setLoggedIn } from "../../store/user.slice";
import s from "../appealForm/appealForm.module.css";
import ResponsiveTextField from "../responsiveTextField/responsiveTextField";

function LoginForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const from = location.state?.from?.pathname || "/home";

    const [showPassword, setShowPassword] = useState(false);

    const { isLoggedIn, isAuthPending } = useAppSelector((store) => ({
        isLoggedIn: store.user.isLoggedIn,
        isAuthPending: store.user.isAuthPending,
    }));

    const schema = yup.object({
        username: yup.string().required("Это обязательное поле"),
        password: yup.string().required("Это обязательное поле"),
    });
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    useEffect(() => {
        if (isLoggedIn) {
            navigate(from, { replace: true });
        }
    }, [isLoggedIn]);

    const onSubmit = (data: any) => {
        // console.log(data);
        dispatch(
            fetchLogIn({ username: data.username, password: data.password })
        );
    };

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <form
                className={styles.container}
                onSubmit={handleSubmit(onSubmit)}
            >
                <p className={styles.text}>Вход для сотрудников учреждения</p>
                <div className={styles.inputs__wrapper}>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <ResponsiveTextField
                                label="Имя пользователя"
                                error={!!errors?.username}
                                helperText={
                                    errors?.username
                                        ? errors?.username?.message
                                        : null
                                }
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <ResponsiveTextField
                                label="Пароль"
                                type={showPassword ? "text" : "password"}
                                error={!!errors?.password}
                                helperText={
                                    errors?.password
                                        ? errors?.password?.message
                                        : null
                                }
                                InputProps={{
                                    // отключаем автоподстановку пароля
                                    // https://mui.com/material-ui/react-autocomplete/#autocomplete-autofill
                                    autoComplete: "new-password",
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password"
                                                edge="end"
                                                onClick={() =>
                                                    setShowPassword(
                                                        (show) => !show
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                {...field}
                            />
                        )}
                    />
                </div>
                <button
                    type="submit"
                    aria-label="Отправить"
                    disabled={isAuthPending}
                    className={`${s.button} ${s.button_type_primary} ${
                        !isValid && s.button_type_inactive
                    } ${isAuthPending && "frozen"}`}
                >
                    <div className={s.button__loader}>
                        {isAuthPending ? (
                            <>
                                Вход...{" "}
                                <TailSpin
                                    height="18"
                                    width="18"
                                    color="#ffffff"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            </>
                        ) : (
                            <>Отправить</>
                        )}
                    </div>
                </button>
            </form>
        </>
    );
}

export default LoginForm;
