import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import tokenStorage from "../tokenStorage";

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
});

/* axiosPrivate.interceptors.request.use(
    (config) => {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${getLocalAccessToken()}`;
        return config;
    },
    (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
            prevRequest.sent = true;
            await refreshAccessToken();
            return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
    }
); */

tokenStorage.initStorage(axiosPrivate);

export default axiosPrivate;
