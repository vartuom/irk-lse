import React from "react";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router";
import s from "./cardsPage.module.css";
import BasicsSlider from "../../components/cardSliders/basicsSlider";
import PaymentSlider from "../../components/cardSliders/paymentSlider";
import HandwritingSlider from "../../components/cardSliders/handwritingSlider";
import AutoSlider from "../../components/cardSliders/autoSlider";
import BuildingSlider from "../../components/cardSliders/buildingSlider";
import CadastralSlider from "../../components/cardSliders/cadastralSlider";
import CommoditiesSlider from "../../components/cardSliders/commoditiesSlider";

function CardsPage() {
    return (
        <main className={s.main}>
            <Helmet>
                <title>Деятельность | Иркутская ЛСЭ</title>
                <meta
                    name="description"
                    content="Справочные материалы о судебной экспертизе и ответы на самые частые вопросы."
                />
            </Helmet>
            <div className={s.lead}>
                <div>
                    <h1 className={s.lead__title}>Коротко о главном</h1>
                    <div className={s.lead__textContainer}>
                        <p className={s.lead__paragraph}>
                            Заключение эксперта – важнейший источник сведений
                            для правильного рассмотрения и разрешения дела. Но
                            как и любое другое доказательство, оно будет иметь
                            юридическую силу только при условии того, что
                            получено с соблюдением закона и соответсвует
                            формальным требованиям.
                        </p>
                        <p className={s.lead__paragraph}>
                            Что нужно знать перед обращением в лабораторию? Мы
                            подготовили небольшой набор карточек с ответами на
                            самые важные вопросы:
                        </p>
                        <ul className={s.lead__navigationList}>
                            <li className={s.lead__navigationListItem}>
                                !
                                <Link
                                    className="link"
                                    to="/home/cards"
                                    state="noScroll"
                                >
                                    - основные понятия
                                </Link>
                                <Link
                                    className="link"
                                    to="payment"
                                    state="noScroll"
                                >
                                    - оплата исследований
                                </Link>
                            </li>
                            <li className={s.lead__navigationListItem}>
                                А:
                                <Link
                                    className="link"
                                    to="auto"
                                    state="noScroll"
                                >
                                    - автотехнические исследования
                                </Link>
                            </li>
                            <li className={s.lead__navigationListItem}>
                                З:
                                <Link
                                    className="link"
                                    to="cadastral"
                                    state="noScroll"
                                >
                                    -&nbsp;землеустроительные исследования
                                </Link>
                            </li>
                            <li className={s.lead__navigationListItem}>
                                П:
                                <Link
                                    className="link"
                                    to="handwriting"
                                    state="noScroll"
                                >
                                    - почерковедческие исследования
                                </Link>
                            </li>
                            <li className={s.lead__navigationListItem}>
                                С:
                                <Link
                                    className="link"
                                    to="building"
                                    state="noScroll"
                                >
                                    - строительно-технические исследования
                                </Link>
                            </li>
                            <li className={s.lead__navigationListItem}>
                                Т:
                                <Link
                                    className="link"
                                    to="commodities"
                                    state="noScroll"
                                >
                                    - товароведческие исследования
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <QuizOutlinedIcon
                    sx={{
                        fontSize: 240,
                        alignSelf: "center",
                        justifySelf: "center",
                        color: "#ebf1f9",
                    }}
                />
            </div>
            <div className={s.swiper__container}>
                <Routes>
                    <Route index element={<BasicsSlider />} />
                    <Route path="payment" element={<PaymentSlider />} />
                    <Route path="handwriting" element={<HandwritingSlider />} />
                    <Route path="auto" element={<AutoSlider />} />
                    <Route path="building" element={<BuildingSlider />} />
                    <Route path="cadastral" element={<CadastralSlider />} />
                    <Route path="commodities" element={<CommoditiesSlider />} />
                    <Route
                        path="*"
                        element={<Navigate to="/home/cards" replace />}
                    />
                </Routes>
            </div>
        </main>
    );
}

export default CardsPage;
