import axios, { AxiosError, AxiosResponse } from "axios";
import { baseUrl, cookiesLifeTime } from "./constants";
import { getCookie, setCookie } from "./storage";
import { ITokenResponse, checkResponse, refreshToken } from "./api";

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("accessToken");
        config.headers = {
            Authorization: `Bearer ${accessToken}`,
            Accept: "Application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            aboba: "aboba",
        };
        return config;
    },
    (error) => Promise.reject(error)
);

axiosApiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (
            error instanceof AxiosError &&
            error.response?.status === 403 &&
            !error.config._retry
        ) {
            const { config, message } = error;
            error.config._retry = true;
            const refreshedData = (await refreshToken()) as ITokenResponse;
            if (!refreshedData.success) {
                return Promise.reject(refreshedData);
            }
            localStorage.setItem("refreshToken", refreshedData.refreshToken);
            setCookie(
                "accessToken",
                refreshedData.accessToken.replace("Bearer ", ""),
                { expires: cookiesLifeTime }
            );

            const res = await axios(config);
            const data = await checkResponse(res);
            return data;
        }
        return Promise.reject(error);
    }
);

export default axiosApiInstance;
