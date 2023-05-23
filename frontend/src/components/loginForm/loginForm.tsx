import { TextField, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import React from "react";

import styles from "./loginForm.module.css";

const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderRadius: "12px",
        },
    },
    "& .MuiOutlinedInput-input": {
        borderRadius: "12px",
    },
});

interface IfromState {
    pathname: string;
    state: {
        from: string;
    };
}

function LoginForm() {
    const { pathname, state }: IfromState = useLocation();
    async function login(someparams: any) {}
    return (
        <form className={styles.container}>
            <div>
                <p className={styles.text}>
                    Чтобы продолжить, пожалуйста пройдите авторизацию
                </p>
                <div className={styles.inputs__wrapper}>
                    <CustomTextField
                        style={{ borderRadius: "12px" }}
                        id="username"
                        label="Username"
                        variant="outlined"
                    />
                    <CustomTextField
                        style={{ borderRadius: "12px" }}
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <button className={styles.button} type="submit">
                    Войти
                </button>
            </div>
            <span className={styles.registerLink}>Зарегистрироваться</span>
        </form>
    );
}

export default LoginForm;
