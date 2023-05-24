import { TextField, styled, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";

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
    const [showPassword, setShowPassword] = useState(false);
    const { pathname, state }: IfromState = useLocation();
    async function login(someparams: any) {}
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

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
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
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
