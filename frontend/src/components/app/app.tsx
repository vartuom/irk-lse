import React from "react";
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
import AdminPage from "../../pages/adminPage/adminPage";
import PrintAppeal from "../printAppeal/PrintAppeal";
import ProtectedRoutes from "../protectedRoutes/protectedRoutes";

function App() {
    const location = useLocation();
    const background = location.state?.background;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleAppealFormClose = () => {
        dispatch(resetForm());
        navigate("/appeals");
    };
    return (
        <div>
            <Routes location={background || location}>
                <Route path="/login" element={<ContactsPage />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path={"/home/*"} element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="contacts" element={<ContactsPage />} />
                    <Route path="prices" element={<PricesPage />} />
                    <Route path="appeals/*" element={<AppealsPage />} />
                    <Route path="cards/*" element={<CardsPage />} />
                    {/* Protected Route */}
                    <Route element={<ProtectedRoutes />}>
                        <Route path="history" element={<HistoryPage />} />
                        <Route path="admin/*" element={<AdminPage />} />
                        <Route
                            path="printAppeal/:id"
                            element={<PrintAppeal />}
                        />
                    </Route>
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
