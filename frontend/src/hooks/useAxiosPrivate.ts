import { useCallback, useEffect } from "react";

import axios, { axiosPrivate } from "../api/axios";
import { useAppDispatch, useAppStore } from "../store/store";
import { setToken } from "../store/user.slice";

const useAxiosPrivate = () => {
    const store = useAppStore();
    const dispatch = useAppDispatch();

    const refreshToken = async () => {
        const response = await axios.get("/auth/refresh", {
            withCredentials: true,
        });
        dispatch(setToken({ accessToken: response.data.accessToken }));
    };

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                if (!config.headers.Authorization) {
                    // потом убрать в оперативную память!
                    // eslint-disable-next-line no-param-reassign
                    config.headers.Authorization = `Bearer ${
                        store.getState().user.user.accessToken
                    }}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
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
    }, [store]);

    return axiosPrivate;
};

export default useAxiosPrivate;
