import { IGetAppealsQueryOpts } from "../types/types";
import axios from "./axios";

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
