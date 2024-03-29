import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/lse-logo.svg";
import HamburgerIcon from "../hamburgerIcon/hamburgerIcon";

import styles from "./hamburgerMenus.module.css";

function HamburgerMenu() {
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    return (
        <div className={styles.menu}>
            <HamburgerIcon
                isActiveIcon={isActiveBurger}
                setIsActiveIcon={setIsActiveBurger}
            />
            <div
                className={`${styles.menu__content} ${
                    isActiveBurger ? styles.active : ""
                }`}
            >
                <div className={styles.menu__items}>
                    <hr className={styles.horizontalLine} />
                    <ul className={styles.navList}>
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.link} ${styles.link_active}`
                                        : styles.link
                                }
                                onClick={() => {
                                    setIsActiveBurger(!isActiveBurger);
                                }}
                                end
                            >
                                О лаборатории
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/cards"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.link} ${styles.link_active}`
                                        : styles.link
                                }
                                onClick={() => {
                                    setIsActiveBurger(!isActiveBurger);
                                }}
                            >
                                Деятельность
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/prices"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.link} ${styles.link_active}`
                                        : styles.link
                                }
                                onClick={() => {
                                    setIsActiveBurger(!isActiveBurger);
                                }}
                            >
                                Услуги
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/contacts"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.link} ${styles.link_active}`
                                        : styles.link
                                }
                                onClick={() => {
                                    setIsActiveBurger(!isActiveBurger);
                                }}
                            >
                                Контакты
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.link} ${styles.link_active}`
                                        : styles.link
                                }
                                to="/home/appeals"
                                onClick={() => {
                                    setIsActiveBurger(!isActiveBurger);
                                }}
                            >
                                Обращения граждан
                            </NavLink>
                        </li>
                    </ul>
                    <img
                        className={styles.logo}
                        src={logo}
                        alt="Логотип лабораторий Минюста. Двуглавый орел под увеличительным стеклом."
                    />
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
