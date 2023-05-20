import { useEffect } from "react";
import axios, { axiosPrivate } from "../api/axios";

const useAxiosPrivate = () => {
    const refreshToken = async () => {
        const response = await axios.get("/auth/refresh", {
            withCredentials: true,
        });
        return response.data.accessToken;
    };

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                if (!config.headers.Authorization) {
                    // потом убрать в оперативную память!
                    // eslint-disable-next-line no-param-reassign
                    config.headers.Authorization = `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`;
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
                    const newAccessToken = await refreshToken();
                    prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
    }, []);

    return axiosPrivate;
};

export default useAxiosPrivate;
