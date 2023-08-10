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

function AutoSlider() {
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
                            Автотехнические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter1Rounded
                                    sx={{ fontSize: "60px", color: "#80ad17" }}
                                />
                                <h3 className={s.card__heading}>
                                    Автотехнические исследования (ч.1)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Данные исследования проводятся в рамках четырех
                                экспертных специальностей - 13.1, 13.2, 13.3,
                                13.4. В рамках первых трёх исследуются
                                обстоятельства ДТП, а последняя связана с
                                вопросами восстановительного ремонта. В двух
                                карточках далее приведена краткая справка по
                                каждой из специальностей:
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    13.1. Исследование обстоятельств
                                    дорожно-транспортного происшествия
                                </span>
                            </div>
                            <div className={s.card__paragraph}>
                                Исследование дорожно-транспортных ситуаций,
                                расчёты параметров движения транспортных средств
                                и пешеходов в процессе ДТП, а также анализ
                                действий участников дорожного движения с
                                технической точки зрения.
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    13.2. Исследование технического состояния
                                    транспортных средств
                                </span>
                            </div>
                            <div className={s.card__paragraph}>
                                Исследование технического состояния транспортных
                                средств, их систем, агрегатов, механизмов, узлов
                                и деталей в целях установления их
                                работоспособности, причин и времени
                                возникновения неисправностей, возможности их
                                обнаружения.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Автотехнические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter2Rounded
                                    sx={{ fontSize: "60px", color: "#2aa4db" }}
                                />
                                <h3 className={s.card__heading}>
                                    Автотехнические исследования (ч. 2)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    13.3. Исследование следов на транспортных
                                    средствах и месте ДТП
                                </span>
                            </div>
                            <div className={s.card__paragraph}>
                                Назначается при необходимости исследования
                                следов на транспортных средствах и месте ДТП в
                                целях определения механизма происшествия
                                (столкновения транспортных средств, наездов на
                                пешеходов, взаимодействия с объектами окружающей
                                обстановки, опрокидывания транспортных средств).
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    13.4. Исследование транспортных средств в
                                    целях определения стоимости
                                    восстановительного ремонта и оценки
                                </span>
                            </div>
                            <div className={s.card__paragraph}>
                                Назначается при необходимости установления
                                стоимости транспортного средства, его отдельных
                                деталей, восстановительного ремонта. Включает
                                вопросы определения утраты товарной стоимости ТС
                                в результате дорожно-транспортного происшествия
                                или при иных обстоятельствах.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Автотехнические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter3Rounded
                                    sx={{ fontSize: "60px", color: "#b62980" }}
                                />
                                <h3 className={s.card__heading}>
                                    Как проходит осмотр ТС?
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Осмотр ТС и их составных частей проводится
                                экспертами на прилегающей территории к зданию
                                лаборатории на открытой площадке при
                                естественном освещении.
                            </div>
                            <div className={s.card__paragraph}>
                                Транспортное средство должно предоставляться на
                                осмотр{" "}
                                <span className="spanBold">чистым и сухим</span>{" "}
                                (за исключением случаев, когда техническое
                                состояние КТС и его составных частей можно
                                определить по фактическому его внешнему виду), в
                                светлое время суток, безветренную погоду и без
                                осадков.
                            </div>
                            <div className={s.card__paragraph}>
                                Для идентификации КТС{" "}
                                <span className="spanBold">обязательным</span>{" "}
                                является предоставление эксперту регистрационных
                                документов, таких как: паспорт ТС, свидетельство
                                о регистрации ТС и иных документов при
                                необходимости. Наличие у лица предоставляющего
                                КТС на осмотр{" "}
                                <span className="spanBold">
                                    бутылки чистой воды, чистой тряпки и
                                    автомобильной щетки
                                </span>{" "}
                                обязательны.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Автотехнические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter4Rounded
                                    sx={{ fontSize: "60px", color: "#8138f6" }}
                                />
                                <h3 className={s.card__heading}>
                                    Как согласовать осмотр?
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Осмотр объектов исследований всегда возможно
                                согласовать{" "}
                                <span className="spanBold">
                                    непосредственно с экспертом
                                </span>
                                , с последующим и заблаговременным уведомлением
                                органа назначившего судебную экспертизу о месте
                                и времени осмотра, для удобства и
                                непосредственного присутствия всех необходимых
                                участников процесса, а так же для обеспечения
                                разумных сроков производства судебных экспертиз.
                            </div>
                            <div className={s.card__paragraph}>
                                Все организационные вопросы вы можете решить,
                                обратившись в отдел производства автотехнических
                                исследований{" "}
                                <span className="spanBold">
                                    по телефону: 8 (3952) 70-23-22.
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Автотехнические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter5Rounded
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    А если ТС не на ходу?
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                В случае, если транспортировка объекта
                                исследований в государственное
                                судебно-экспертное учреждение невозможна, орган
                                или лицо, назначившие судебную экспертизу,
                                <span className="spanBold">
                                    {" "}
                                    обеспечивают
                                </span>{" "}
                                эксперту беспрепятственный доступ к объекту и
                                возможность его исследования.
                            </div>
                            <div className={s.card__paragraph}>
                                Организация осмотра КТС предусматривает решение
                                заказчиком экспертизы (экспертного исследования)
                                следующих вопросов: обеспечения
                                беспрепятственного доступа к объекту и
                                безопасных условий для натурного исследования
                                (достаточное освещение, возможность осмотра КТС
                                с разных сторон, при необходимости обеспечение
                                доступности осмотра КТС на СТОА (станция
                                технического осмотра и ремонта автомобилей), с
                                возможностью разборочных и диагностических
                                операций.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Автотехнические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter6Rounded
                                    sx={{ fontSize: "60px", color: "#8138f6" }}
                                />
                                <h3 className={s.card__heading}>
                                    А если осматривать нечего?
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                В случае утраты объекта исследования (продажа
                                автомобиля, уничтожение ТС в результате
                                неправомерных действий) необходимыми для
                                проведения исследования являются следующие
                                материалы:
                            </div>
                            <div className={s.card__paragraph}>
                                - все имеющиеся фотографии в электронном
                                неискаженном виде объектов исследования, в том
                                техническом состоянии, в котором они находились
                                на момент рассматриваемого происшествия.
                            </div>
                            <div className={s.card__paragraph}>
                                - читаемые копии актов осмотров объектов
                                исследования, составленные специалистами.
                            </div>
                            <div className={s.card__paragraph}>
                                Вышеуказанные материалы, и при необходимости,
                                иные направляются в ФБУ Иркутская ЛСЭ Минюста
                                России на дисках или USB флеш – накопителях с
                                сопроводительным письмом, органом, назначившим
                                судебную экспертизу.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Автотехнические исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter7Rounded
                                    sx={{ fontSize: "60px", color: "#1bd3c7" }}
                                />
                                <h3 className={s.card__heading}>
                                    А если ремонт уже произведен?
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                В случаях когда восстановительный ремонт КТС от
                                полученных повреждений проведен, то в
                                большинстве случаев объект исследования для
                                эксперта является утраченным и необходимость его
                                осмотра зачастую отсутствует. В подобных случаях
                                (по возможности и при необходимости), эксперту
                                органом назначившим судебную экспертизу,
                                необходимо будет предоставить:
                            </div>
                            <div className={s.card__paragraph}>
                                - поврежденные составные части в результате
                                рассматриваемого происшествия и демонтированные
                                в процессе проведения восстановительного
                                ремонта.
                            </div>
                            <div className={s.card__paragraph}>
                                - фотоматериалы этапов проведения
                                восстановительного ремонта от повреждений
                                полученных в результате рассматриваемого
                                происшествия.
                            </div>
                            <div className={s.card__paragraph}>
                                все имеющиеся документы (читаемые копии)
                                подтверждающие факт восстановительного ремонта:
                                чеки об оплате, оплаченный заказ-наряд
                                авторемонтной организации и все имеющиеся иные
                                документы.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default AutoSlider;
