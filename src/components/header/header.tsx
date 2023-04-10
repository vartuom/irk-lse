import React from "react";
import { useWindowWidth } from "@react-hook/window-size";

import styles from "./header.module.css";
import logo from "../../images/lse-logo.svg";
import Navigation from "../navigation/navigation";
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu";

function Header() {
    const width = useWindowWidth();
    const isMobile = width <= 768;
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {isMobile ? <HamburgerMenu /> : <Navigation />}
                <div className={styles.wrapper}>
                    <div className={styles.lead}>
                        <h1 className={styles.lead__title}>
                            ФБУ Иркутская ЛСЭ Минюста России
                        </h1>
                        <p className={styles.lead__paragraph}>
                            Государственное судебно-экспертное учреждение,
                            входящее в Систему судебно-экспертных учреждений
                            Министерства юстиции Российской Федерации.
                        </p>
                    </div>
                    <img
                        className={styles.logo}
                        src={logo}
                        alt="Логотип лабораторий Минюста. Двуглавый орел под увеличительным стеклом."
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
