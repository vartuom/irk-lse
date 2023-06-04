import React, { useEffect, useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import style from "./appealsLoader.module.css";

interface ILoaderProps {
    isProcessed?: boolean;
    page?: string;
    loaderText?: string;
    isFetching?: boolean;
    className?: string;
    height?: number | string;
    width?: number | string;
    charAppearInterval?: number;
}

function AppealsLoader({
    isProcessed,
    page,
    loaderText,
    isFetching,
    className,
    height,
    width,
    charAppearInterval,
}: ILoaderProps) {
    const text = loaderText ?? "Загрузка";
    const appearInterval = charAppearInterval ?? 400;
    // \xa0 - неразрывный пробел, или &nbsp; в html
    const [dots, setDots] = useState("\xa0\xa0\xa0");
    const count = useRef(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (count.current >= 3) {
                setDots("\xa0\xa0\xa0");
                count.current = 0;
                return;
            }
            count.current += 1;
            // eslint-disable-next-line @typescript-eslint/no-shadow
            setDots((dots) => {
                return dots
                    .substring(0, count.current - 1)
                    .concat(".")
                    .concat(dots.substring(count.current));
            });
        }, appearInterval);

        return () => {
            count.current = 0;
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isProcessed, page, isFetching]);
    return (
        <div className={`${style.loader} ${className}`}>
            <TailSpin
                height={height ?? "128"}
                width={width ?? "128"}
                color="var(--bg-color-blue-accent)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass={style.loader__wrapper}
            />
            <p className={style.loader__text}>{`${text}${dots}`}</p>
        </div>
    );
}

export default AppealsLoader;
