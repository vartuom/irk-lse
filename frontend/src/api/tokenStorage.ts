/* eslint-disable no-underscore-dangle */
import { AxiosInstance } from "axios";
import { refreshAccessToken } from "./api";

const tokenStorage = (function createTokenStorage() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let _accessToken = "";

    return {
        initStorage(axiosInstance: AxiosInstance) {
            console.log("was initialized");
            axiosInstance.interceptors.request.use(
                (config) => {
                    // eslint-disable-next-line no-param-reassign
                    config.headers.Authorization = `Bearer ${
                        _accessToken === "" ? undefined : _accessToken
                    }`;
                    return config;
                },
                (error) => Promise.reject(error)
            );

            axiosInstance.interceptors.response.use(
                (response) => response,
                async (error) => {
                    const prevRequest = error?.config;
                    if (prevRequest?.sent) {
                        // TODO: сделать навигейт на auth страницу
                    }
                    if (error?.response?.status === 401 && !prevRequest?.sent) {
                        prevRequest.sent = true;
                        const token = await refreshAccessToken();
                        _accessToken = token;
                        return axiosInstance(prevRequest);
                    }
                    return Promise.reject(error);
                }
            );
        },
        setAccessToken(token: string) {
            _accessToken = token;
        },
    };
})();

export default tokenStorage;

export const { setAccessToken } = tokenStorage;
