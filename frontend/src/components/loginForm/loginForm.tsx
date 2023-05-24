import { TextField, styled, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import styles from "./loginForm.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setLoggedIn } from "../../store/user.slice";

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
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const from = location.state?.from?.pathname || "/home";
    const [showPassword, setShowPassword] = useState(false);
    const { pathname, state }: IfromState = useLocation();
    const { isLoggedIn } = useAppSelector((store) => ({
        isLoggedIn: store.user.isLoggedIn,
    }));
    useEffect(() => {
        if (isLoggedIn) {
            navigate(from, { replace: true });
        }
    }, [isLoggedIn]);
    async function login(someparams: any) {}
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatch(setLoggedIn());
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div>
                <p className={styles.text}>
                    Чтобы продолжить, пожалуйста пройдите авторизацию
                </p>
                <div className={styles.inputs__wrapper}>
                    <CustomTextField
                        style={{ borderRadius: "12px" }}
                        id="username"
                        label="Имя пользователя"
                        variant="outlined"
                    />
                    <CustomTextField
                        style={{ borderRadius: "12px" }}
                        id="password"
                        label="Пароль"
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
