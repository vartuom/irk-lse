import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
import Layout from "../layout/layout";
import MainPage from "../../pages/mainPage/mainPage";
import Modal from "../modal/modal";
import ScrollBox from "../scrollBox/scrollBox";
import PricesTable from "../pricesTable/pricesTable";
import HistoryPage from "../../pages/historyPage/historyPage";
import ContactsPage from "../../pages/contactsPage/contactsPage";
import CardsPage from "../../pages/cardsPage/cardsPage";
import PricesPage from "../../pages/pricesPage/pricesPage";
import AppealsPage from "../../pages/appealsPage/appealsPage";
import AppealDetails from "../appealDetails/appealDetails";
import { resetForm } from "../../store/appealForm.slice";
import { useAppDispatch } from "../../store/store";
import ProtectedRoutes from "../protectedRoutes/protectedRoutes";
import AuthPage from "../../pages/authPage/authPage";
import LoginForm from "../loginForm/loginForm";

const AdminPage = lazy(() => import("../../pages/adminPage/adminPage"));
const PrintAppeal = lazy(() => import("../printAppeal/PrintAppeal"));

function App() {
    const location = useLocation();
    const background = location.state?.background;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleAppealFormClose = () => {
        dispatch(resetForm());
        navigate("/home/appeals");
    };
    return (
        <div>
            <Routes location={background || location}>
                <Route path="/auth/*" element={<AuthPage />}>
                    <Route path="login" element={<LoginForm />} />
                    <Route path="register" />
                </Route>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path={"/home/*"} element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="contacts" element={<ContactsPage />} />
                    <Route path="prices" element={<PricesPage />} />
                    <Route path="appeals/*" element={<AppealsPage />} />
                    <Route path="cards/*" element={<CardsPage />} />
                    <Route path="history" element={<HistoryPage />} />
                    {/* Protected Route */}
                    <Route element={<ProtectedRoutes />}>
                        <Route
                            path="admin/*"
                            element={
                                <Suspense fallback={<p>Загрузка...</p>}>
                                    <AdminPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="printAppeal/:id"
                            element={
                                <Suspense fallback={<p>Загрузка...</p>}>
                                    <PrintAppeal />
                                </Suspense>
                            }
                        />
                    </Route>
                    {/* 404 redirect */}
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Route>
            </Routes>
            {background && (
                <Routes>
                    <Route
                        path="/home/prices"
                        element={
                            <Modal onClose={() => navigate(-1)} isModalOpened>
                                <ScrollBox>
                                    <PricesTable />
                                </ScrollBox>
                            </Modal>
                        }
                    />
                    <Route
                        path="/home/appeals/details"
                        element={
                            <Modal
                                onClose={handleAppealFormClose}
                                isModalOpened
                            >
                                <AppealDetails />
                            </Modal>
                        }
                    />
                </Routes>
            )}
        </div>
    );
}

export default App;
