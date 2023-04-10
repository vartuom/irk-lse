import React, { useState } from "react";
import HamburgerIcon from "../hamburgerIcon/hamburgerIcon";

import styles from "./hamburgerMenus.module.css";

function HamburgerMenu() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={styles.menu}>
            <div
                className={`${styles.menu__content} ${
                    isActive ? styles.active : ""
                }`}
            >
                <div className={styles.menu__items}>123</div>
                <HamburgerIcon isActive={isActive} setIsActive={setIsActive} />
            </div>
        </div>
    );
}

export default HamburgerMenu;
