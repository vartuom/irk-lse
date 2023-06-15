import React from "react";
import { Outlet } from "react-router";

import lselogo from "../../images/lse-logo.svg";

import styles from "./authPage.module.css";

function AuthPage() {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <Outlet />
                <img src={lselogo} className={styles.logo} alt="lse-logo" />
            </div>
        </div>
    );
}

export default AuthPage;
