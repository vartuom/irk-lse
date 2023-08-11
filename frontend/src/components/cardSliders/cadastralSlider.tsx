import React from "react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Filter1Rounded,
    Filter2Rounded,
    Filter3Rounded,
} from "@mui/icons-material";
import s from "./cardSlider.module.css";

function CadastralSlider() {
    return (
        <div>
            <Swiper
                slidesPerView="auto"
                spaceBetween={8}
                pagination
                navigation
                mousewheel
                modules={[Pagination, Navigation, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Землеустроительные исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter1Rounded
                                    sx={{ fontSize: "60px", color: "#80ad17" }}
                                />
                                <h3 className={s.card__heading}>
                                    Землеустроительные исследования
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                В рамках землеустроительной экспертизы
                                проводятся исследования, задачами которых
                                является определение рыночной стоимости
                                земельных участков.
                            </div>
                            <div className={s.card__paragraph}>
                                Данные исследования проводятся в рамках одной
                                экспертной специальности – 27.2 «Исследование
                                объектов землеустройства с целью определения их
                                рыночной и иной стоимости».
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Землеустроительные исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter2Rounded
                                    sx={{ fontSize: "60px", color: "#2aa4db" }}
                                />
                                <h3 className={s.card__heading}>
                                    Решаемые задачи
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Определение рыночной стоимости земельных
                                участков (с различными категорией земель и видом
                                разрешенного использования).
                            </div>
                            <div className={s.card__paragraph}>
                                2. Определение рыночной стоимости права аренды
                                (краткосрочной или долгосрочной) земельного
                                участка.
                            </div>
                            <div className={s.card__paragraph}>
                                3. Определение рыночной стоимости права
                                ограниченного пользования (сервитута) земельным
                                участком.
                            </div>
                            <div className={s.card__paragraph}>
                                4. Определение рыночной стоимости земельных
                                участков в рамках оспаривания их кадастровой
                                стоимости.
                            </div>
                            <div className={s.card__paragraph}>
                                5. Исследование отчета об оценке с целью
                                определения правильности применения методических
                                подходов, методов и методик, использованных
                                оценщиком; определение правильности выполненных
                                расчетов.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Землеустроительные исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter3Rounded
                                    sx={{ fontSize: "60px", color: "#8138f6" }}
                                />
                                <h3 className={s.card__heading}>
                                    Что потребуется эксперту?
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    Для проведения экспертизы необходимо
                                    предоставить:
                                </span>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Правоустанавливающие документы на земельный
                                участок.
                            </div>
                            <div className={s.card__paragraph}>
                                2. Документы, описывающие границы участка и
                                удостоверяющие его площадь, координаты
                                поворотных точек земельного участка.
                            </div>
                            <div className={s.card__paragraph}>
                                3. Характеристики сервитутов, если таковые
                                установлены в отношении земельного участка.
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    Типовым вопросом, подлежащим разрешению,
                                    является следующий:
                                </span>
                            </div>
                            <div className={s.card__paragraph}>
                                Какова рыночная стоимость земельного участка с
                                КН (указать кадастровый номер)?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default CadastralSlider;
