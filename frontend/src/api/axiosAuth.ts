import axios, {
    AxiosError,
    AxiosHeaders,
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
} from "axios";
import { cookiesLifeTime } from "../utils/constants";
import { getCookie, setCookie } from "../utils/storage";
import { ITokenResponse, checkResponse, refreshToken } from "./api";

type AxiosConfigWithRetry = InternalAxiosRequestConfig & { retry: boolean };
interface AxiosErrorWithRetry extends AxiosError {
    config: AxiosConfigWithRetry;
}

const axiosAuthInstance = axios.create();

axiosAuthInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
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

axiosAuthInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosErrorWithRetry) => {
        if (
            error instanceof AxiosError &&
            error.response?.status === 403 &&
            !error.config.retry
        ) {
            const { config, message } = error;
            config.retry = true;
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

            const res = await axios(config as AxiosRequestConfig);
            const data = await checkResponse(res);
            return data;
        }
        return Promise.reject(error);
    }
);

export default axiosAuthInstance;
