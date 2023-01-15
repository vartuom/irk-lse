import React, {ReactNode} from 'react';
import styles from './content.module.css'
import {useLocation} from "react-router-dom";

interface IContentProps {
    children: ReactNode
}

const Content = ({children}: IContentProps) => {
    const location = useLocation();
    const isHistoryPage = location.pathname.includes('history');
    return (
        <main className={`${styles.main} ${isHistoryPage && styles.historyPageOverride}`}>
            <div className={styles.container}>
                {children}
            </div>
        </main>
    );
};

export default Content;