import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navigation.module.css";

function Navigation() {
    return (
        <nav>
            <ul className={s.navList}>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) =>
                            isActive ? `${s.link} ${s.link_active}` : s.link
                        }
                    >
                        О лаборатории
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="cards"
                        className={({ isActive }) =>
                            isActive ? `${s.link} ${s.link_active}` : s.link
                        }
                    >
                        Деятельность
                    </NavLink>
                </li>
                <li className={s.link}>Услуги</li>
                <li>
                    <NavLink
                        to="contacts"
                        className={({ isActive }) =>
                            isActive ? `${s.link} ${s.link_active}` : s.link
                        }
                    >
                        Контакты
                    </NavLink>
                </li>
                <li className={s.link}>Обращения граждан</li>
            </ul>
        </nav>
    );
}

export default Navigation;
