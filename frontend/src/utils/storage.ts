type TSetCookie = {
    expires: number | string | Date;
    path?: string;
} & { [index: string]: string | number | boolean };

export const setCookie = (name: string, value: string, props?: TSetCookie) => {
    // eslint-disable-next-line no-param-reassign
    props = {
        path: "/",
        ...props,
    } as TSetCookie;
    let exp = props.expires;
    if (typeof exp === "number" && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        // eslint-disable-next-line no-multi-assign,no-param-reassign
        exp = props.expires = Number(d);
    }
    if (exp instanceof Date && exp && exp.toUTCString) {
        // eslint-disable-next-line no-param-reassign
        props.expires = exp.toUTCString();
    }
    // eslint-disable-next-line no-param-reassign
    value = encodeURIComponent(value);
    let updatedCookie = `${name}=${value}`;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const propName in props) {
        updatedCookie += `; ${propName}`;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += `=${propValue}`;
        }
    }
    document.cookie = updatedCookie;
};

export const getCookie = (name: string) => {
    const matches = document.cookie.match(
        /*eslint-disable */
        new RegExp(
            "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
        )
        /* eslint-enable */
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
