import React from "react";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import { Link, Route, Routes } from "react-router-dom";
import s from "./pricesPage.module.css";
import BasicsSlider from "../../components/cardSliders/basicsSlider";
import PaymentSlider from "../../components/cardSliders/paymentSlider";
import PricesTable from "../../components/pricesTable/pricesTable";

function PricesPage() {
    return (
        <main className={s.main}>
            <section className={s.lead}>
                <div>
                    <h1 className={s.lead__title}>Прейскурант</h1>
                    <div className={s.lead__textContainer}>
                        <p className={s.lead__paragraph}>
                            В соответствии со статьёй 37 Федерального закона "О
                            государственной судебно-экспертной деятельности в
                            Российской Федерации" производство всех несудебных
                            исследований и судебных экспертиз по гражданским,
                            арбитражным делам и делам об административных
                            правонарушениях осуществляется на платной основе.
                        </p>
                        <p className={s.lead__paragraph}>
                            В нашем разделе справки мы подготовили небольшой
                            набор карточек, в котором мы разобрали наиболее
                            частые вопросы, связанные со стоимостью и оплатой
                            исследований.
                        </p>
                        <p className={s.lead__paragraph}>
                            Для примера, ниже приведен перечень исследований с
                            ориентировочными ценами исходя из стоимости
                            экспертного часа (1150 рублей) и нормативными
                            затратами времени по каждой из специальностей.
                        </p>
                    </div>
                </div>
                <CurrencyRubleIcon
                    sx={{
                        fontSize: 240,
                        alignSelf: "center",
                        justifySelf: "center",
                        color: "#ebf1f9",
                    }}
                />
            </section>
            <section>
                <PricesTable isExtended />
            </section>
        </main>
    );
}

export default PricesPage;
