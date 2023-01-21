import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../../pages/mainPage/mainPage';
import Modal from '../modal/modal';
import ScrollBox from '../scrollBox/scrollBox';
import Table from '../table/table';
import HistoryPage from '../../pages/historyPage/historyPage';
import ContactsPage from '../../pages/contactsPage/contactsPage';
import CardsPage from '../../pages/cardsPage/cardsPage';

function App() {
    const location = useLocation();
    const background = location.state?.background;
    const navigate = useNavigate();
    return (
        <div>
            <Layout>
                <Routes location={background || location}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/cards/*" element={<CardsPage />} />
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
                                        <Table />
                                    </ScrollBox>
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
