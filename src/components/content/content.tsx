import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styles from "./content.module.css";

interface IContentProps {
    children: ReactNode;
}

function Content({ children }: IContentProps) {
    const location = useLocation();
    const isHistoryPage = location.pathname.includes("history");
    return (
        <main
            className={`${styles.main} ${
                isHistoryPage && styles.historyPageOverride
            }`}
        >
            <div className={styles.container}>{children}</div>
        </main>
    );
}

export default Content;
