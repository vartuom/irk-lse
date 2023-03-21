import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import Looks3RoundedIcon from "@mui/icons-material/Looks3Rounded";
import s from "./cardSlider.module.css";

function PaymentSlider() {
    return (
        <div>
            {/* <h2 className={s.swiper__title}>В первую очередь</h2>
            <div className={s.swiper__nav}>
                <div>
                    <ArrowBackRoundedIcon sx={{ fontSize: 48, opacity: 0.5 }} />
                </div>
                <div className={s.swiperLink}>
                    <p className={s.arrowText}>Автотехника и ДТП</p>
                    <ArrowForwardRoundedIcon sx={{ fontSize: 48 }} />
                </div>
            </div> */}
            <Swiper
                slidesPerView="auto"
                spaceBetween={8}
                pagination
                navigation
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>Оплата исследований</p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <LooksOneRoundedIcon
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    Вопросы оплаты исследований
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Судебные экспертизы по уголовным делам и в
                                рамках проверки сообщений о преступлениях
                                проводятся бесплатно.
                            </div>
                            <div className={s.card__paragraph}>
                                Судебные экспертизы по гражданским, арбитражным
                                и административным делам проводятся на
                                возмездной основе в соответсвии с{" "}
                                <span className="spanAccent">
                                    прейскурантом
                                </span>
                                . Мы отправим счет на оплату вместе с
                                заключением эксперта в суд, который назначил
                                экспертизу. Кто и в какой доле будет оплачивать
                                исследование определит судья.
                            </div>
                            <div className={s.card__paragraph}>
                                Внесудебные экспертизы (экспертные исследования)
                                оплачиваются заказчиком в зависимости от затрат
                                времени эксперта. Вы получите счет на оплату
                                после завершения исследования.
                            </div>
                            <div className={s.card__paragraph}>
                                Уточнить вопросы оплаты исследований вы всегда
                                можете по телефонам из раздела{" "}
                                <span className="spanAccent">контактов</span>.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default PaymentSlider;
