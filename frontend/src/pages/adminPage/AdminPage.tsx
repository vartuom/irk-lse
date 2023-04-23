import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Appeals from "../../components/Appeals/Appeals";

import style from "./AdminPage.module.css";

function AdminPage() {
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
                >
                    Обработанные обращения
                </NavLink>

                <span className={style.glider} />
            </div>
            <div className="appeals__container">
                <Routes>
                    <Route index element={<Appeals />} />
                    <Route
                        path="/processed"
                        element={<Appeals isProcessed />}
                    />
                </Routes>
            </div>
        </main>
    );
}

export default AdminPage;
