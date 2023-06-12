import { useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { axiosGeneric } from "../../api/axios";
import { setLoggedIn } from "../../store/user.slice";
import { setAccessToken } from "../../api/tokenStorage";

function ProtectedRoutes() {
    const { isLoggedIn } = useAppSelector((store) => ({
        isLoggedIn: store.user.isLoggedIn,
    }));
    const location = useLocation();
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);

    /**
     * При первом монтировании компонента делается запрос с куком
     * с refresh токеном на получение access токена, который устанавливается
     * в tokenStorage
     */
    useEffect(() => {
        async function getUserToken() {
            try {
                const response = await axiosGeneric({
                    method: "post",
                    url: "auth/refresh",
                    withCredentials: true,
                });
                setAccessToken(response.data.accessToken);
                dispatch(setLoggedIn());
            } catch (error) {
                // TODO: сделать обработчик ошибок
                console.log(error);
            }
            setIsLoading(false);
        }
        getUserToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) return <div />;

    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/auth/login" state={{ from: location }} replace />
    );
}

export default ProtectedRoutes;
