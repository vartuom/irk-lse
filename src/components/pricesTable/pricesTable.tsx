import React from "react";
import styles from "./pricesTable.module.css";
import { researchServicesData } from "../../constants/prices";
import TableRow from "../tableRow/tableRow";

interface ITableProps {
    isExtended?: boolean;
}

function PricesTable({ isExtended = false }: ITableProps) {
    return (
        <div>
            <section className={styles.wrapper}>
                <main>
                    <ul className={styles.title}>
                        <li className={styles.leadColumn}>
                            Роды (виды) судебных экспертиз
                        </li>
                        <li>1 категория</li>
                        <li>2 категория</li>
                        <li>3 категория</li>
                    </ul>
                </main>
                {researchServicesData.map((item) => {
                    return (
                        <TableRow
                            key={item.title}
                            title={item.title}
                            hours={item.hours}
                            tip={item.tip}
                            isExtended={isExtended}
                        />
                    );
                })}
            </section>
        </div>
    );
}

export default PricesTable;
