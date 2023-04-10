/* eslint-disable react/button-has-type */
import React, { useState, ReactNode } from "react";

import styles from "./hamburgerIcon.module.css";

interface IHamburgerProps {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
}

function HamburgerIcon({ isActive, setIsActive }: IHamburgerProps) {
    return (
        <button
            className={`${styles.iconWrapper} ${isActive ? styles.active : ""}`}
            onClick={() => {
                setIsActive(!isActive);
            }}
        >
            <div className={styles.icon} />
        </button>
    );
}

export default HamburgerIcon;
