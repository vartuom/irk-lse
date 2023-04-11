import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./accordionRow.module.css";

interface IAccordionProps {
    title: string;
    children?: React.ReactNode;
    isExpanded?: boolean;
}

function AccordionRow({
    title,
    children,
    isExpanded = false,
}: IAccordionProps) {
    const [isActive, setIsActive] = useState(isExpanded);

    return (
        <div className={styles.accordion__row}>
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
            <div className={styles.accordion__content} aria-expanded={isActive}>
                {children}
            </div>
        </div>
    );
}

export default AccordionRow;
