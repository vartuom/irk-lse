import React, { useEffect, useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import style from "./appealsLoader.module.css";

interface ILoaderProps {
    isProcessed?: boolean;
    page?: string;
}

function AppealsLoader({ isProcessed, page }: ILoaderProps) {
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
        }, 400);

        return () => {
            count.current = 0;
            clearInterval(interval);
        };
    }, [isProcessed, page]);
    return (
        <div className={style.loader}>
            <TailSpin
                height="128"
                width="128"
                color="var(--bg-color-blue-accent)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass={style.loader__wrapper}
            />
            <p className={style.loader__text}>{`Загрузка${dots}`}</p>
        </div>
    );
}

export default AppealsLoader;
