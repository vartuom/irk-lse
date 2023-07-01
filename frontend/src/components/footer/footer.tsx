import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/lse-logo.svg";
import s from "./footer.module.css";
import styles from "../header/header.module.css";

function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.containerWrapper}>
                <div className={s.container}>
                    <div className={s.logoWrapper}>
                        <img
                            className={s.logo}
                            src={logo}
                            alt="Логотип лабораторий Минюста. Двуглавый орел под увеличительным стеклом."
                        />
                        <div>
                            <p className={s.domain}>irksudexpert.ru</p>
                            <p className={s.subtitle}>
                                ФБУ Иркутская ЛСЭ Минюста России
                            </p>
                        </div>
                    </div>
                    <div className={s.links}>
                        <div className={s.navList}>
                            <p className={s.listTitle}>Система учреждений</p>
                            <ul className={s.navLinks}>
                                <li>
                                    <a
                                        href="http://sudexpert.ru/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={s.footerLink}
                                    >
                                        Российский федеральный центр судебной
                                        экспертизы
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://sibrcse.ru/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={s.footerLink}
                                    >
                                        Сибирский Региональный центр Судебной
                                        Экспертизы
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.navList}>
                            <p className={s.listTitle}>Ссылки</p>
                            <ul className={s.navLinks}>
                                <li>
                                    <a
                                        href="http://sudexpert.ru/norms/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={s.footerLink}
                                    >
                                        Нормативная база
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.tipse.ru/jour"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={s.footerLink}
                                    >
                                        Журнал "ТиПСЭ"
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://стопвичспид.рф/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={s.footerLink}
                                    >
                                        #СТОПВИЧСПИД
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to="/home/admin"
                                        className={s.footerLink}
                                    >
                                        Вход для сотрудников
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.copyright}>
                    <p className={s.copyright__paragraph}>
                        &#169; ФБУ Иркутская ЛСЭ Минюста России, 2023 г.
                    </p>
                    <p className={s.copyright__paragraph}>
                        664081, г. Иркутск, ул. Красноказачья, 131.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
