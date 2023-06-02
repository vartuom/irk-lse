import React from "react";
import { TailSpin } from "react-loader-spinner";
import AppealsLoader from "../appealsLoader/appealsLoader";

import style from "./layoutLoader.module.css";

function LayoutLoader() {
    return (
        <div className={style.layout}>
            {/* <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible
            />
            <p className={style.layout__text}>123</p> */}
            <AppealsLoader
                className={style.layout__loader}
                height="128"
                width="128"
                loaderText="Отправка"
                charAppearInterval={500}
            />
        </div>
    );
}

export default LayoutLoader;
