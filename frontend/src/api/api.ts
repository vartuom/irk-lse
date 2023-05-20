import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL, cookiesLifeTime } from "../utils/constants";
import { getCookie, setCookie } from "../utils/storage";

export interface ITokenResponse {
    success: boolean;
    accessToken: string;
    refreshToken: string;
}

type TOptions = {
    [key: string]: string | TOptions;
};

export const checkResponse = async (res: AxiosResponse) => {
    return res.status === 200 ? (res.data as unknown) : Promise.reject(res);
};

export const refreshToken = () => {
    return axios
        .post(
            `${BASE_URL}/auth/token`,
            {
                token: localStorage.getItem("refreshToken"),
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        .then(checkResponse);
};

export async function fetchWithRefresh<ResponseDataType>(
    url: string,
    options: TOptions
) {
    try {
        const res = await axios({ url, ...options });
        const data = (await checkResponse(res)) as ResponseDataType;
        return data;
    } catch (err) {
        if (
            err instanceof Error &&
            (err.message === "jwt expired" || "jwt malformed")
        ) {
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
            const res = await axios({
                url,
                ...options,
                headers: {
                    ...(options.headers as TOptions),
                    Authorization: refreshedData.accessToken,
                },
            });
            const data = (await checkResponse(res)) as ResponseDataType;
            return data;
        }
        return Promise.reject(err);
    }
}
