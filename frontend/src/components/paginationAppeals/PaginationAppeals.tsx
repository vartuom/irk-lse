import React, { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Pagination.module.css";

interface IPaginationProps {
    children?: ReactNode;
    currentPage: number | string;
    isNextPageAvailable: boolean;
}

function Pagination({
    children,
    currentPage,
    isNextPageAvailable,
}: IPaginationProps) {
    return (
        <div className={styles.pagination}>
            <NavLink
                to={+currentPage === 2 ? "" : `${+currentPage - 1}`}
                className={`${+currentPage <= 1 && "disabled"}`}
            >
                Back
            </NavLink>
            <div className="text">{`Страница ${currentPage}`}</div>
            <NavLink
                to={`${+currentPage + 1}`}
                className={`${!isNextPageAvailable && "disabled"}`}
            >
                Next
            </NavLink>
        </div>
    );
}

export default Pagination;
