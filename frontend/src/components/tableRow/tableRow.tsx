import React, { useState } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import styles from "./tableRow.module.css";
import { pricePerHour } from "../../constants/prices";
import { getNoun } from "../../utils/utils";

interface ITableRowProps {
    title: string;
    hours: [number, number, number];
    tip: string;
    isExtended: boolean;
    code: string;
}

function TableRow({ code, title, hours, tip, isExtended }: ITableRowProps) {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            type="button"
            className={`${styles.row}`}
            onClick={() => setIsActive(!isActive)}
        >
            <ul className={styles.rowList}>
                <li className={`${styles.rowList__item} ${styles.leadColumn}`}>
                    <div
                        className={`${styles.row__chevron} ${
                            isActive && styles.row__chevron_active
                        }`}
                    >
                        <ChevronRightRoundedIcon />
                    </div>
                    {`${code} ${title}`}
                </li>
                <li className={styles.rowList__item}>
                    {hours[0] * pricePerHour} &#8381;
                    {isExtended && ` (${hours[0]} ${getNoun(hours[0])})`}
                </li>
                <li className={styles.rowList__item}>
                    {hours[1] * pricePerHour} &#8381;
                    {isExtended && ` (${hours[1]} ${getNoun(hours[1])})`}
                </li>
                <li className={styles.rowList__item}>
                    {hours[2] * pricePerHour} &#8381;
                    {isExtended && ` (${hours[2]} ${getNoun(hours[2])})`}
                </li>
            </ul>
            <p
                className={`${styles.row__tip} ${
                    isActive && styles.row__tip_active
                }`}
            >
                {tip}
            </p>
        </button>
    );
}

export default TableRow;
