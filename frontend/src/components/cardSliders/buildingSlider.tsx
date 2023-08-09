import React from "react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Filter1Rounded,
    Filter2Rounded,
    Filter3Rounded,
    Filter4Rounded,
    Filter5Rounded,
    Filter6Rounded,
    Filter7Rounded,
} from "@mui/icons-material";
import s from "./cardSlider.module.css";

function BuildingSlider() {
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
                            Строительно-технические исследования`
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter1Rounded
                                    sx={{ fontSize: "60px", color: "#80ad17" }}
                                />
                                <h3 className={s.card__heading}>
                                    Строительно-технические исследования
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Судебная строительно-техническая экспертиза
                                назначается в случаях, когда возникает
                                потребность в специальных знаниях в области
                                проектирования, возведения, эксплуатации,
                                реконструкции, демонтаже и утилизации зданий,
                                строений и сооружений.
                            </div>
                            <div className={s.card__paragraph}>
                                Данные исследования проводятся в рамках двух
                                экспертных специальностей:
                            </div>
                            <div className={s.card__paragraph}>
                                16.1 «Технические и сметно-расчетные
                                исследования строительных объектов и территории,
                                функционально связанной с ними»;
                            </div>
                            <div className={s.card__paragraph}>
                                16.2 «Исследование строительных объектов и
                                территории, функционально связанной с ними,{" "}
                                <span className="spanBold">
                                    с целью определения рыночной и иной
                                    стоимости
                                </span>
                                ».
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Строительно-технические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter2Rounded
                                    sx={{ fontSize: "60px", color: "#2aa4db" }}
                                />
                                <h3 className={s.card__heading}>
                                    Объекты исследования
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Объектами исследования строительно-технической
                                экспертизы обычно являются:
                            </div>
                            <div className={s.card__paragraph}>
                                1. Строительные площадки, строящиеся сооружения,
                                их комплексы и составляющие.
                            </div>
                            <div className={s.card__paragraph}>
                                2. Массивы грунта и земельные участки, связанные
                                с процессом строительства или эксплуатацией
                                сооружений.
                            </div>
                            <div className={s.card__paragraph}>
                                3. Квартиры, строения, сооружения и их
                                конструктиваные элементы, земельные участки
                                домовладений.
                            </div>
                            <div className={s.card__paragraph}>
                                4. Технические паспорта на домовладения,
                                проектно-сметная документация на объект, акты
                                приемки выполненных работ и т.п.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Строительно-технические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter3Rounded
                                    sx={{ fontSize: "60px", color: "#b62980" }}
                                />
                                <h3 className={s.card__heading}>
                                    Решаемые задачи
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Разработка технически возможных вариантов
                                раздела жилых домов на изолированные части
                                (квартиры) и определение порядка пользования
                                жилыми домами (квартирами).
                            </div>
                            <div className={s.card__paragraph}>
                                2. Определение соответствия фактических границ
                                земельных участков правоустанавливающим
                                документам и порядка пользования земельными
                                участками.
                            </div>
                            <div className={s.card__paragraph}>
                                3. Определение причин протечек через ограждающие
                                конструкции помещений, расчет стоимости ремонта,
                                связанного с залитием.
                            </div>
                            <div className={s.card__paragraph}>
                                4. Определение качества, стоимости
                                строительства, объема фактически выполненных
                                работ, соответсвия требованиям СНиП, проектной
                                документации, ГОСТ.
                            </div>
                            <div className={s.card__paragraph}>
                                5. Определение полной восстановительной,
                                действительной и рыночной стоимости недвижимого
                                имущества.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Строительно-технические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter4Rounded
                                    sx={{ fontSize: "60px", color: "#8138f6" }}
                                />
                                <h3 className={s.card__heading}>
                                    Примеры вопросов (раздел объекта)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Имеется ли возможность реального раздела
                                (выдела доли) между совладельцами дома в
                                соответствии с их идеальными долями в праве
                                собственности на недвижимость; если такая
                                возможность имеется, разработать варианты
                                раздела спорного дома?
                            </div>
                            <div className={s.card__paragraph}>
                                2. При отсутствии возможности раздела
                                домовладения (выдела его части) в точном
                                соответствии с идеальными долями, рассмотреть
                                возможность раздела (выдела) с максимальным
                                приближением к величине идеальных долей в
                                натуральном выражении?
                            </div>
                            <div className={s.card__paragraph}>
                                3. Определить виды, объемы и стоимость работ и
                                материалов, необходимых для переоборудования
                                строения в соответствии с разработанными
                                вариантами раздела (выдела)?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Строительно-технические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter5Rounded
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    Примеры вопросов (залив и пожар)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Имеется ли техническая возможность ремонта
                                (восстановления) поврежденного здания (строения,
                                сооружения) либо его отдельных помещений
                                (конструктивных элементов)?
                            </div>
                            <div className={s.card__paragraph}>
                                2. Если указанная возможность имеется, то какова
                                величина затрат необходимых для ремонта
                                (восстановления) пострадавшего строительного
                                объекта (его части)?
                            </div>
                            <div className={s.card__paragraph}>
                                3. Если такой возможности нет, какова стоимость
                                строительного объекта (его части) до
                                происшедшего события (залива, пожара и пр.)?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Строительно-технические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter6Rounded
                                    sx={{ fontSize: "60px", color: "#8138f6" }}
                                />
                                <h3 className={s.card__heading}>
                                    Примеры вопросов (качество строительства)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Соответствует ли строение и качество
                                выполненных работ условиям договора, положениям
                                проекта, нормативным требованиям? Выполняются ли
                                требования к инсоляции, тепловой защите объекта?
                            </div>
                            <div className={s.card__paragraph}>
                                2. В случае, если работы выполнены не
                                качественно, являются ли выявленные дефекты
                                устранимыми? Какова стоимость устранения
                                выявленных дефектов? Возможно ли использование
                                продукции строительного производства в
                                соответствии с ее функциональным назначением без
                                устранения выявленных дефектов?
                            </div>
                            <div className={s.card__paragraph}>
                                3. Какова стоимость фактически выполненных и не
                                выполненных работ на строительном объекте?
                            </div>
                            <div className={s.card__paragraph}>
                                4. Определить техническое состояние
                                конструктивных элементов строительного объекта с
                                указанием величины его физического износа?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Строительно-технические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter7Rounded
                                    sx={{ fontSize: "60px", color: "#1bd3c7" }}
                                />
                                <h3 className={s.card__heading}>
                                    Примеры вопросов (оценка объектов)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                1. Какова рыночная (или иная) стоимость объекта
                                недвижимости (гостиницы, квартиры, домовладения,
                                гаража и т.д.)
                            </div>
                            <div className={s.card__paragraph}>
                                2. Какова стоимость возведения объекта
                                недвижимости или его части (размер финансовых
                                затрат на строительство)?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BuildingSlider;
