import React, {useState} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import styles from './tableRow.module.css';
import {pricePerHour} from "../../constants/prices";


interface ITableRowProps {
    title: string,
    hours: [number, number, number]
    tip: string
}
const TableRow = ({title, hours, tip}: ITableRowProps) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <article className={`${styles.row}`} onClick={() => setIsActive(!isActive)}>
            <ul className={styles.rowList}>
                <li className={`${styles.rowList__item} ${styles.leadColumn}`}>
                    <div className={`${styles.row__chevron} ${isActive && styles.row__chevron_active}`}>
                        <ChevronRightRoundedIcon/>
                    </div>
                    {title}
                </li>
                <li className={styles.rowList__item}><>{hours[0] * pricePerHour} &#8381;</></li>
                <li className={styles.rowList__item}><>{hours[1] * pricePerHour} &#8381;</></li>
                <li className={styles.rowList__item}><>{hours[2] * pricePerHour} &#8381;</></li>
            </ul>
            <p className={`${styles.row__tip} ${isActive && styles.row__tip_active}`}>{tip}</p>
        </article>
    );
};

export default TableRow;