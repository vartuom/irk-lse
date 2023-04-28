import React, { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";

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
        <div className="pagination">
            <NavLink
                to={`${+currentPage + 1}`}
                className={`${!isNextPageAvailable && "disabled"}`}
            >
                Next
            </NavLink>
            <div className="text">{`Страница ${currentPage}`}</div>
            <NavLink
                to={`${+currentPage - 1}`}
                className={`${+currentPage <= 1 && "disabled"}`}
            >
                Back
            </NavLink>
        </div>
    );
}

export default Pagination;
