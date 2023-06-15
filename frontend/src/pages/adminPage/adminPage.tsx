import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import moment from "moment";
import "moment/dist/locale/ru";

import style from "./adminPage.module.css";
import AppealDocxCreator from "../../components/appeal/appealDocxCreator/appealDocxCreator";
import Appeals from "../../components/appeals/appeals";

function AdminPage() {
    const notScrollToTop = true;
    const docxGenerator = AppealDocxCreator.init();
    moment.locale("ru");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("tablets"));

    return (
        <main className={style.appeals}>
            <div className={style.appeals__tabs}>
                <NavLink
                    end
                    to="/home/admin"
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? `${style.active} ${style.active_unprocessed}`
                                : ""
                        } ${style.tab}`
                    }
                    state={{ notScrollToTop }}
                >
                    {!isMobile ? "Необработанные обращения" : "Необработанные"}
                </NavLink>

                <NavLink
                    to="/home/admin/processed"
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? `${style.active} ${style.active_processed}`
                                : ""
                        } ${style.tab}`
                    }
                    state={{ notScrollToTop }}
                >
                    {!isMobile ? "Обработанные обращения" : "Обработанные"}
                </NavLink>
                <span className={style.glider} />
            </div>
            <div className={style.appeals__container}>
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
