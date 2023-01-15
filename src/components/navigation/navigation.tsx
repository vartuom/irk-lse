import React from 'react';
import styles from './navigation.module.css'

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.navList}>
                <li className={`${styles.link} ${styles.link_active}`}>О лаборатории</li>
                <li className={styles.link}>Деятельность</li>
                <li className={styles.link}>Услуги</li>
                <li className={styles.link}>Контакты</li>
                <li className={styles.link}>Обращения граждан</li>
            </ul>
        </nav>
    );
};

export default Navigation;