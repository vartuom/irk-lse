import { baseUrl, cookiesLifeTime } from "./constants";
import { setCookie } from "./storage";

export const checkResponse = (res: Response) => {
    return res.ok ? res.json() : Promise.reject(res);
};

export const refreshToken = () => {
    return fetch(`${baseUrl}/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    }).then(checkResponse);
};

type TOptions = {
    [key: string]: string | TOptions;
};
export const fetchWithRefresh = async (
    url: string,
    options: Record<string, TOptions | string>
) => {
    try {
        const res = await fetch(url, options);
        const data = await checkResponse(res);
        return data;
    } catch (err) {
        if (
            err instanceof Error &&
            (err.message === "jwt expired" || "jwt malformed")
        ) {
            const refreshedData = await refreshToken();
            if (!refreshedData.success) {
                return Promise.reject(refreshedData);
            }
            localStorage.setItem("refreshToken", refreshedData.refreshToken);
            setCookie(
                "accessToken",
                refreshedData.accessToken.split("Bearer ")[1],
                { expires: cookiesLifeTime }
            );
            const res = await fetch(url, {
                ...options,
                headers: {
                    ...(options.headers as TOptions),
                    Authorization: refreshedData.accessToken,
                },
            });
            const data = await checkResponse(res);
            return data;
        }
        return Promise.reject(err);
    }
};
