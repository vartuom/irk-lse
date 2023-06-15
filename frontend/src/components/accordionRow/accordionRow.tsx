import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import styles from "./accordionRow.module.css";

interface IAccordionProps {
    borders?: "none" | "both";
    title: string;
    children?: React.ReactNode;
    isExpanded?: boolean;
}

function AccordionRow({
    borders,
    title,
    children,
    isExpanded = false,
}: IAccordionProps) {
    const [isActive, setIsActive] = useState(isExpanded);

    return (
        <div
            className={`${styles.accordion__row} ${
                borders &&
                (borders === "none"
                    ? styles.accordion__row_border_none
                    : styles.accordion__row_border_bottom)
            }`}
        >
            <button
                type="button"
                className={styles.accordion__title}
                onClick={() => {
                    setIsActive(!isActive);
                }}
            >
                <div>{title}</div>
                <div
                    className={`${styles.accordion__arrow} ${
                        isActive && styles.accordion__arrow_opened
                    }`}
                >
                    <ExpandMoreIcon />
                </div>
            </button>
            <Collapse in={isActive}>
                <div
                    className={styles.accordion__content}
                    aria-expanded={isActive}
                >
                    {children}
                </div>
            </Collapse>
        </div>
    );
}

export default AccordionRow;
