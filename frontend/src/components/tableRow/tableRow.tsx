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
                <li className={styles.leadColumn}>
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
                    <div>{hours[0] * pricePerHour}&nbsp;&#8381;</div>
                    <div>{isExtended && ` (${hours[0]}\u00A0${getNoun(hours[0])})`}</div>
                </li>
                <li className={styles.rowList__item}>
                    <div>{hours[1] * pricePerHour}&nbsp;&#8381;</div>
                    <div>{isExtended && ` (${hours[1]}\u00A0${getNoun(hours[1])})`}</div>
                </li>
                <li className={styles.rowList__item}>
                    <div>{hours[2] * pricePerHour}&nbsp;&#8381;</div>
                    <div>{isExtended && ` (${hours[2]}\u00A0${getNoun(hours[2])})`}</div>
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
