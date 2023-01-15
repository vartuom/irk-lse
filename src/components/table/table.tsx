import React from 'react';
import styles from './table.module.css'
import {pricePerHour, researchServicesData} from "../../constants/prices";
import TableRow from "../tableRow/tableRow";

const Table = () => {
    return (
        <div>
            <section className={styles.wrapper}>
                <main>
                    <ul className={styles.title}>
                        <li className={styles.leadColumn}>Роды (виды) судебных экспертиз</li>
                        <li>1 категория</li>
                        <li>2 категория</li>
                        <li>3 категория</li>
                    </ul>
                </main>
                {researchServicesData.map(item => {
                    return <TableRow title={item.title} hours={item.hours} tip={item.tip} />
                })}
            </section>
        </div>
    );
};

export default Table;