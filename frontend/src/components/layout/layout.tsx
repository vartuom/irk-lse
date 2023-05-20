import React, { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router";
import Header from "../header/header";
import styles from "./layout.module.css";
import Content from "../content/content";
import Footer from "../footer/footer";

function Layout() {
    const { pathname, state } = useLocation();
    // крутим страницу вверх при смене роута
    useEffect(() => {
        // если есть стейт - то открыт попап и крутить страницу вверх не нужно
        if (!state) window.scrollTo(0, 0);
    }, [pathname, state]);
    return (
        <div className={styles.test}>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </div>
    );
}

export default Layout;
