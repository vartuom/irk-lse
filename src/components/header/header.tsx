import React from "react";
import styles from "./header.module.css";
import logo from "../../images/lse-logo.svg";
import Navigation from "../navigation/navigation";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Navigation />
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
