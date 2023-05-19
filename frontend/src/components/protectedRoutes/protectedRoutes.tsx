import { useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router";
import React from "react";
import { useAppSelector } from "../../store/store";

function ProtectedRoutes() {
    const { isLoggedIn } = useAppSelector((store) => ({
        isLoggedIn: store.user.isLoggedIn,
    }));
    const location = useLocation();

    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default ProtectedRoutes;
