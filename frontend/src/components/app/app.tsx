import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import AdminPage from "../../pages/adminPage/AdminPage";
import PrintAppeal from "../printAppeal/PrintAppeal";

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
            <Layout>
                <Routes location={background || location}>
                    <Route path="/" index element={<MainPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/prices" element={<PricesPage />} />
                    <Route path="/appeals/*" element={<AppealsPage />} />
                    <Route path="/cards/*" element={<CardsPage />} />
                    {/* Protected Route */}
                    <Route path="/admin/*" element={<AdminPage />} />
                    <Route path="printAppeal/:id" element={<PrintAppeal />} />
                </Routes>
                {background && (
                    <Routes>
                        <Route
                            path="/prices"
                            element={
                                <Modal
                                    onClose={() => navigate(-1)}
                                    isModalOpened
                                >
                                    <ScrollBox>
                                        <PricesTable />
                                    </ScrollBox>
                                </Modal>
                            }
                        />
                        <Route
                            path="/appeals/details"
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
            </Layout>
        </div>
    );
}

export default App;
