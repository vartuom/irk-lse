import React from "react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Filter1Rounded,
    Filter2Rounded,
    Filter3Rounded,
    Filter4Rounded,
    Filter5Rounded,
} from "@mui/icons-material";
import s from "./cardSlider.module.css";

function CommoditiesSlider() {
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
                            Товароведческие исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter1Rounded
                                    sx={{ fontSize: "60px", color: "#80ad17" }}
                                />
                                <h3 className={s.card__heading}>
                                    Товароведческие исследования
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Судебно-товароведческая экспертиза назначается
                                по уголовным, гражданским, арбитражным делам, а
                                также делам об административных правонарушениях.
                            </div>
                            <div className={s.card__paragraph}>
                                Объектами товароведческой экспертизы являются:
                                одежно-обувные изделия и аксессуары, мебель,
                                электробытовые товары, ювелирные изделия и часы,
                                парфюмерно-косметические товары и иные товарные
                                группы.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Товароведческие исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter2Rounded
                                    sx={{ fontSize: "60px", color: "#2aa4db" }}
                                />
                                <h3 className={s.card__heading}>
                                    Вопросы эксперту (оценка и качество)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Какова стоимость представленных на
                                исследование изделий?
                            </div>
                            <div className={s.card__paragraph}>
                                2. Пригодно ли изделие для дальнейшего
                                использования?
                            </div>
                            <div className={s.card__paragraph}>
                                3. Имеются ли дефекты на изделии? Если имеются,
                                то определить характер (являются ли они
                                производственными дефектами, непроизводственными
                                или эксплуатационными) и причину возникновения
                                дефектов?
                            </div>
                            <div className={s.card__paragraph}>
                                4. Соответствуют ли товарные характеристики
                                изделий (материал, конструкция, модель, размер,
                                и др.), характеристикам указанным в
                                нормативно-технической документации, договоре и
                                иных сопроводительных документах, фактическим?
                                Если нет, то в чем различия?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Товароведческие исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter3Rounded
                                    sx={{ fontSize: "60px", color: "#b62980" }}
                                />
                                <h3 className={s.card__heading}>
                                    Вопросы эксперту (маркировка, упаковка,
                                    транспортировка)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Что означают маркировочные обозначения
                                представленного на исследование изделия?
                            </div>
                            <div className={s.card__paragraph}>
                                2. Соответствуют ли обозначенные на ярлыке,
                                этикетке, штампе символы характеристик изделий
                                (материал, размер, цвет и др.) требованиям НТД,
                                установленным для исследуемого вида изделий;
                                если нет, то в чем различия?
                            </div>
                            <div className={s.card__paragraph}>
                                3. Соответствует ли упаковка изделий требованиям
                                стандартов, ТУ; если нет, то могла ли она
                                повлиять на снижение качества?
                            </div>
                            <div className={s.card__paragraph}>
                                4. Соответствовали ли условия и сроки
                                транспортировки установленным нормативной
                                документацией? Если нет, то, могло ли произойти
                                снижение качества из-за нарушения условий
                                транспортировки?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Товароведческие исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter4Rounded
                                    sx={{ fontSize: "60px", color: "#8138f6" }}
                                />
                                <h3 className={s.card__heading}>
                                    Вопросы эксперту (пожар, затопление,
                                    уничтожение)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Какова стоимость изделий с учетом износа
                                (эксплуатации) до пожара, аварии (протечки и
                                т.п.)?
                            </div>
                            <div className={s.card__paragraph}>
                                2. Какова стоимость («остаточная стоимость»)
                                изделий, поврежденных в результате пожара,
                                аварии (протечки) и т.д., если они пригодны для
                                дальнейшего использования по назначению?
                            </div>
                            <div className={s.card__paragraph}>
                                3. Какова степень снижения качества и стоимости
                                («ущерб») изделий, поврежденных в результате
                                пожара, аварии (протечки и т.п.)?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Товароведческие исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter5Rounded
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    На какие вопросы эксперт не ответит?
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Не все вопросы, которые ставятся перед экспертом
                                судами и следственными органами, могут быть
                                решены в рамках товароведческой экспертизы. К
                                таким вопросам относятся:
                            </div>
                            <div className={s.card__paragraph}>
                                1. Установление предприятия – изготовителя
                                изделий и времени их изготовления.
                            </div>
                            <div className={s.card__paragraph}>
                                2. Определение возможности устранения дефекта;.
                            </div>
                            <div className={s.card__paragraph}>
                                3. Определение стоимости восстановительного
                                ремонта.
                            </div>
                            <div className={s.card__paragraph}>
                                4. Определение давности (и времени) повреждения.
                            </div>
                            <div className={s.card__paragraph}>
                                5. Вопросы правового и справочного характера.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default CommoditiesSlider;
