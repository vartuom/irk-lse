import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import moment from "moment";
import "moment/dist/locale/ru";

import style from "./adminPage.module.css";
import AppealDocxCreator from "../../components/appeal/appealDocxCreator/appealDocxCreator";
import Appeals from "../../components/appeals/appeals";

function AdminPage() {
    const notScrollToTop = true;
    const docxGenerator = AppealDocxCreator.init();
    moment.locale("ru");

    return (
        <main className="main appeals">
            <div className={style.appeals__tabs}>
                <NavLink
                    end
                    to="/admin"
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? `${style.active} ${style.active_unprocessed}`
                                : ""
                        } ${style.tab}`
                    }
                    state={{ notScrollToTop }}
                >
                    Необработанные обращения
                </NavLink>

                <NavLink
                    to="/admin/processed"
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? `${style.active} ${style.active_processed}`
                                : ""
                        } ${style.tab}`
                    }
                    state={{ notScrollToTop }}
                >
                    Обработанные обращения
                </NavLink>
                <span className={style.glider} />
            </div>
            <div className="appeals__container">
                <Routes>
                    <Route index element={<Appeals />} />
                    <Route path="/processed" element={<Appeals isProcessed />}>
                        <Route path=":page" element={<div>test</div>} />
                    </Route>
                </Routes>
            </div>
        </main>
    );
}

export default AdminPage;
