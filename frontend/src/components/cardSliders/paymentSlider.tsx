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
                                <span className="spanBold">Судебные</span>{" "}
                                экспертизы по гражданским, арбитражным и
                                административным делам проводятся на возмездной
                                основе. Мы отправим счет на оплату вместе с
                                заключением эксперта в суд, который назначил
                                экспертизу. Кто и в какой доле будет оплачивать
                                исследование определит судья.
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">Внесудебные</span>{" "}
                                экспертизы (экспертные исследования)
                                оплачиваются заказчиком в зависимости от затрат
                                времени эксперта. Вы получите счет на оплату
                                после завершения исследования.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>Оплата исследований</p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <LooksOneRoundedIcon
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    Стоимость исследований
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Стоимость экспертиз и исследований
                                устанавливается в соответствии с временем,
                                необходимым для производства исследования и
                                стоимостью экспертного часа. На данный момент,
                                стоимость экспертного часа установлена в размере
                                <span className="spanBold"> 1150 рублей</span>.
                            </div>
                            <div className={s.card__paragraph}>
                                Производство оценочных экспертиз для
                                <span className="spanBold">
                                    {" "}
                                    нотариальных
                                </span>{" "}
                                целей (оценка стоимости транспортных средств,
                                оружия и т. п.) производится в сокращенные сроки
                                и оплачивается исходя из затрат времени
                                экспертов в размере от двух до четырех часов.
                            </div>
                            <div className={s.card__paragraph}>
                                Стоимость остальных экспертиз и исследований
                                определяется исходя из закрепленных в
                                <span className="spanAccent">
                                    {" "}
                                    прейскуранте
                                </span>{" "}
                                часов с коррекцией на фактические затраты
                                времени, если по итогам проведенной работы они
                                отличались от установленных нормативами.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>Оплата исследований</p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <LooksOneRoundedIcon
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    Реквизиты и контакты
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Банковские реквизиты организации размещены в
                                разделе{" "}
                                <span className="spanAccent">контактов</span>.
                            </div>
                            <div className={s.card__paragraph}>
                                Если у вас имеются дополнительные вопросы, вы
                                можете получить устную консультацию по телефонам
                                соответствующих отделов:
                            </div>
                            <div className={s.card__paragraph}>
                                - по вопросам исследования почерка и документов:
                                т. 8 (3952) 70-23-52;
                            </div>
                            <div className={s.card__paragraph}>
                                - ДТП, оценка стоимости восстановительного
                                ремонта ТС: т. 8 (3952) 70-23-22;
                            </div>
                            <div className={s.card__paragraph}>
                                - исследование строений, помещений, земельных
                                участков: т. 8 (3952) 70-23-20;
                            </div>
                            <div className={s.card__paragraph}>
                                - определение стоимости не продовольственных
                                товаров: т. 8 (3952) 70-23-20;
                            </div>
                            <div className={s.card__paragraph}>
                                - по иным вопросам: т. 8 (3952) 70-22-98.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default PaymentSlider;
