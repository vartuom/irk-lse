/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import styles from "./accordion-row.module.css";

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
        <div className={`${styles.accordion__row}`}>
            <div className={`${styles.accordion__title}`}>
                <div
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    {title}
                </div>
                <div
                    className={`${styles.accordion__arrow} ${
                        isActive && styles.accordion__arrow_opened
                    }`}
                />
            </div>
            <div
                className={`${styles.accordion__content}`}
                aria-expanded={isActive}
            >
                {children}
            </div>
        </div>
    );
}

export default AccordionRow;
