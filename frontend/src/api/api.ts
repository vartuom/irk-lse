import { axiosGeneric } from "./axios";
import { setToken } from "../store/user.slice";

export interface ITokenResponse {
    success: boolean;
    accessToken: string;
    refreshToken: string;
}

type TOptions = {
    [key: string]: string | TOptions;
};

export function createURL(
    queryParams: Record<string, number | string | boolean | undefined>,
    baseURL: string
): string {
    const params = new URLSearchParams();
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(queryParams)) {
        if (typeof value === "boolean") {
            params.append(key, String(value));
        } else if (value) params.append(key, String(value));
    }
    return `${baseURL}?${params.toString()}`;
}

export const getLocalAccessToken = () => localStorage.getItem("accessToken");

export const refreshAccessToken = async () => {
    const response = await axiosGeneric({
        method: "post",
        url: "auth/refresh",
        withCredentials: true,
        // headers: { "Content-Type": "application/json" },
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    // dispatch(setToken({ accessToken: response.data.accessToken }));
};
