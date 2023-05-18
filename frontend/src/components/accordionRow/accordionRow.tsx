import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./accordionRow.module.css";

interface IAccordionProps {
    type?: string;
    title: string;
    children?: React.ReactNode;
    isExpanded?: boolean;
}

function AccordionRow({
    type,
    title,
    children,
    isExpanded = false,
}: IAccordionProps) {
    const [isActive, setIsActive] = useState(isExpanded);

    return (
        <div className={styles.accordion__row}>
            <button
                type="button"
                className={`${styles.accordion__title} ${
                    type && type === "accent"
                        ? styles.accordion__title_accent
                        : styles.accordion__title_light
                }`}
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
            <div className={styles.accordion__content} aria-expanded={isActive}>
                {children}
            </div>
        </div>
    );
}

export default AccordionRow;
