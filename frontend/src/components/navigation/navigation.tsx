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
                        end
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
                <li>
                    <NavLink
                        to="prices"
                        className={({ isActive }) =>
                            isActive ? `${s.link} ${s.link_active}` : s.link
                        }
                    >
                        Услуги
                    </NavLink>
                </li>
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
                <li>
                    <NavLink
                        to="appeals"
                        className={({ isActive }) =>
                            isActive ? `${s.link} ${s.link_active}` : s.link
                        }
                    >
                        Обращения граждан
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
