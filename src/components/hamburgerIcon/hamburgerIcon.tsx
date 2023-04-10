/* eslint-disable react/button-has-type */
import React, { useState, ReactNode } from "react";

import styles from "./hamburgerIcon.module.css";

interface IHamburgerProps {
    isActiveIcon: boolean;
    setIsActiveIcon: (value: boolean) => void;
}

function HamburgerIcon({ isActiveIcon, setIsActiveIcon }: IHamburgerProps) {
    return (
        <button
            className={`${styles.iconWrapper} ${
                isActiveIcon ? styles.active : ""
            }`}
            onClick={() => {
                setIsActiveIcon(!isActiveIcon);
            }}
        >
            <div className={styles.icon} />
        </button>
    );
}

export default HamburgerIcon;
