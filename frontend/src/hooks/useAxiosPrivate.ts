import { useEffect } from "react";
import { useNavigate } from "react-router";

import axios, { axiosPrivate } from "../api/axios";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setToken } from "../store/user.slice";
import { sleep } from "../utils/utils";

const useAxiosPrivate = () => {
    const token = useAppSelector((state) => state.user.user.accessToken);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const refreshToken: () => Promise<string> = async () => {
        const response = await axios({
            method: "post",
            url: "auth/refresh",
            withCredentials: true,
        });
        dispatch(setToken({ accessToken: response.data.accessToken }));
        return response.data.accessToken;
    };

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                // потом убрать в оперативную память!
                // eslint-disable-next-line no-param-reassign
                config.headers.Authorization = `Bearer ${token}`;

                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    await refreshToken();
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return axiosPrivate;
};

export default useAxiosPrivate;
