import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Filter1Rounded,
    Filter2Rounded,
    Filter3Rounded,
    Filter4Rounded,
} from "@mui/icons-material";
import s from "./cardSlider.module.css";
import AccordionRow from "../accordionRow/accordionRow";

function BasicsSlider() {
    return (
        <div>
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
                        <p className={s.card__type}>Основные моменты</p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter1Rounded
                                    sx={{ fontSize: "60px", color: "#1B89EF" }}
                                />
                                <h3 className={s.card__heading}>
                                    Судебная экспертиза
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Судебная экспертиза – процессуальное действие,
                                состоящее из проведения исследования и дачи
                                заключения экспертом по вопросам, разрешение
                                которых требует специальных знаний и которые
                                поставлены перед экспертом уполномоченными
                                лицами, в целях установления обстоятельств,
                                подлежащих доказыванию по конкретному делу.
                            </div>
                            <div className={s.card__paragraph}>
                                Звучит запутанно. Отметим главное - экспертиза
                                может быть назначена только
                                <span className="spanBold">
                                    {" "}
                                    уполномоченным лицом:{" "}
                                </span>{" "}
                                судом, следователем или дознавателем.
                            </div>
                            <div className={s.card__paragraph}>
                                Если вы не относитесь к уполномоченным лицам, то
                                вы имеете право право ходатайствовать перед
                                уполномоченным лицом о назначении экспертизы.
                                Если экспертиза не может быть назначена, то вы
                                вправе заказать производство исследования на
                                коммерческой основе и получить акт экспертного
                                исследования (подробнее о данном документе см.
                                следующую карточку).
                            </div>
                            <div>
                                <AccordionRow title="Например, в гражданском процессе">
                                    <div className={s.card__accordionContent}>
                                        <p className={s.card__paragraph}>
                                            В соответсвии со статьей 79 ГПК РФ
                                            экспертиза назначается судом по
                                            собственной инициативе, либо по
                                            ходатайству сторон.
                                        </p>
                                        <p className={s.card__paragraph}>
                                            Стороны и другие лица, участвующие в
                                            деле, имеют право просить суд
                                            поручить производство судебной
                                            экспертизы конкретному эксперту или
                                            назначить ее проведение в
                                            определенное учреждение, а также
                                            заявлять отвод эксперту,
                                            предлагаемому какой-либо из сторон.
                                        </p>
                                        <p className={s.card__paragraph}>
                                            Сведения о возможности, сроках и
                                            стоимости производства исследования
                                            вы можете получить направив в наше
                                            учреждение письменный запрос
                                            (например, через форму обращений
                                            граждан).
                                        </p>
                                    </div>
                                </AccordionRow>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>Основные моменты</p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter2Rounded
                                    sx={{ fontSize: "60px", color: "#EF851B" }}
                                />
                                <h3 className={s.card__heading}>
                                    Акт экспертного исследования
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Иркутская лаборатория вправе проводить
                                <span className="spanBold"> несудебные </span>
                                экспертизы по обращениям граждан и юридических
                                лиц.
                            </div>
                            <div className={s.card__paragraph}>
                                Назначение несудебной экспертизы не требует
                                согласования со следствием или судом. По
                                результатам исследования, заказчику выдается
                                документ «Акт экспертного исследования», который
                                может быть использован в качестве доказательства
                                наравне с другими материалами дела.
                            </div>
                            <AccordionRow
                                title="Экспертиза и исследование: в чем отличия"
                                borders="none"
                            >
                                <div className={s.card__paragraph}>
                                    Эксперт при производстве несудебной
                                    экспертизы выступает в качестве{" "}
                                    <span className="spanBold">
                                        {" "}
                                        специалиста{" "}
                                    </span>
                                    и не дает подписку о предупреждении об
                                    ответственности за дачу заведомо ложного
                                    заключения. Кроме того, выступая в роли
                                    «специалиста», эксперт не несет обязанности
                                    явится в суд по вызову, но может быть
                                    допрошен при наличии дополнительного
                                    соглашения.
                                </div>
                            </AccordionRow>
                            <div className={s.card__paragraph}>
                                В случае если лаборатория уже проводила
                                экспертное исследование во внесудебном порядке,
                                то назначение судебной экспертизы по тем же
                                вопросам и обстоятельствам дела в лабораторию не
                                допускается.
                            </div>
                            <div className={s.card__paragraph}>
                                Для производства несудебной экспертизы вам
                                необходимо обратиться в канцелярию нашего
                                учреждения с{" "}
                                <span className="spanAccent">
                                    соответствующим заявлением
                                </span>
                                .
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>Основные моменты</p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter3Rounded
                                    sx={{ fontSize: "60px", color: "#9e4046" }}
                                />
                                <h3 className={s.card__heading}>
                                    Как поставить вопрос эксперту?
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                В идеальной ситуации поставленные вопросы
                                эксперту корректны и не излишни. В таком случае
                                экспертиза проводится максимально быстро и
                                эффективно.
                            </div>
                            <div className={s.card__paragraph}>
                                Мы настоятельно рекомендуем Вам перед
                                назначением экспертизы получить консультацию от
                                экспертов лаборатории через
                                <span className="spanAccent">
                                    {" "}
                                    форму обращений граждан
                                </span>
                                , либо по телефонам соответствующих отделов в
                                разделе{" "}
                                <span className="spanAccent">контактов</span>.
                            </div>
                            <div className={s.card__paragraph}>
                                Кроме того, по всем основным направлениям
                                экспертных исследований есть такие же карточки,
                                которые помогут вам понять специфику
                                исследований и познакомят вас с типовыми
                                вопросами.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>Основные моменты</p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <Filter4Rounded
                                    sx={{ fontSize: "60px", color: "#404f9e" }}
                                />
                                <h3 className={s.card__heading}>
                                    Дополнительные и повторные экспертизы
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    Дополнительная экспертиза{" "}
                                </span>
                                - вид судебной экспертизы, которая назначается
                                только после ранее проведенной судебной
                                экспертизы. Основаниями назначения
                                дополнительной экспертизы являются недостаточная
                                полнота и недостаточная ясность первичной
                                экспертизы, либо возникновение новых вопросов в
                                отношении ранее исследованных обстоятельств.
                                Обычно назначается в то же учреждение и тому же
                                эксперту.
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    Повторная экспертиза{" "}
                                </span>
                                - назначается по тем же самым вопросам в
                                отношении ранее исследованых обстоятельств при
                                возникновении сомнений в обоснованности
                                заключения эксперта или при наличии противоречий
                                в выводах экспертов. Всегда назначается другому
                                эксперту.
                            </div>
                            <div className={s.card__paragraph}>
                                Не процессуальные формы оценки заключений других
                                экспертов («
                                <span className="spanBold">рецензии</span>») в
                                нашем учреждении не проводятся.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BasicsSlider;
