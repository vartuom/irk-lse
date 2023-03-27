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
                        <p className={s.card__type}>
                            Почерковедческие исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <LooksOneRoundedIcon
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    Почерковедческие исследования
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Почерковедческая экспертиза назначается если
                                возникает необходимость установить факты,
                                связанные с исследованием{" "}
                                <span className="spanBold">
                                    рукописных документов, различных подписей и
                                    записей
                                </span>
                                .
                            </div>
                            <div className={s.card__paragraph}>
                                Подлежащие исследованию рукописи могут
                                составлять содержание различных документов:
                                договоров, актов, заявлений, квитанций,
                                накладных, завещаний, платежных и пенсионных
                                поручений, ведомостей, свидетельств о браке,
                                таможенных документов и т. д.
                            </div>
                            <div className={s.card__paragraph}>
                                Для производства в экспертное учреждение
                                направляются:{" "}
                                <span className="spanBold">
                                    1. определение (постановление)
                                </span>{" "}
                                суда о назначении экспертизы;{" "}
                                <span className="spanBold">
                                    2. исследуемые документы
                                </span>{" "}
                                в оригиналах, либо их электрофотографические
                                копии высокого качества (с указанием причины
                                отсутствия подлинника);{" "}
                                <span className="spanBold">3. образцы</span>{" "}
                                почерка и подписи предполагаемого исполнителя
                                (см. следующую карточку).
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Почерковедческие исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <LooksOneRoundedIcon
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    Образцы в порядке значимости:
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">1. Свободные</span> -
                                тексты и подписи, выполненные предполагаемым
                                исполнителем вне связи с делом, по которому
                                проводится экспертиза, и до возбуждения этого
                                дела (анкеты, заявления, конспекты, платежные
                                ведомости, копия паспорта).
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    2. Условно-свободные
                                </span>{" "}
                                - тексты и подписи в документах, которые
                                выполнены после возникновения дела, но не
                                специально для проведения экспертизы (исковые
                                заявления, объяснения, ходатайства, жалобы,
                                протоколы допросов и другие рукописи,
                                выполненные во время ведения дела).
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    3. Экспериментальные
                                </span>{" "}
                                - тексты и подписи, которые по предложению судьи
                                или следователя выполняются предполагаемым
                                исполнителем специально для экспертизы на 5-10
                                листах с полной расшифровкой ФИО и транскрипцией
                                подписи, либо в виде близкого по содержанию
                                текста под диктовку, не показывая исследуемые
                                объекты.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Почерковедческие исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <LooksOneRoundedIcon
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    Типовые вопросы
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Кем - Ивановым Иваном Ивановичем или другим
                                лицом выполнен рукописный текст письма,
                                начинающегося и соответственно заканчивающегося
                                словами: «...»?
                            </div>
                            <div className={s.card__paragraph}>
                                Кем - самим Ивановым Иваном Ивановичем или
                                другим лицом - выполнена подпись от его имени,
                                расположенная в завещании от (дата)?
                            </div>
                            <div className={s.card__paragraph}>
                                Одним или разными лицами выполнены рукописные
                                тексты в документах, представленных на
                                исследование?
                            </div>
                            <div className={s.card__paragraph}>
                                Не выполнена ли подпись от имени Иванова И.И.
                                Петровым П.П, Смирновым С.С. или другим лицом?
                            </div>
                            <div className={s.card__paragraph}>
                                Одним или разными лицами выполненны основной
                                текст расписки от «...» на сумму «...» и запись
                                «Указанную сумму обязуюсь вернуть ... »?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiper__slide}>
                    <div className={s.swiper__card}>
                        <p className={s.card__type}>
                            Почерковедческие исследования
                        </p>
                        <div className={s.card__content}>
                            <div className={s.card__title}>
                                <LooksOneRoundedIcon
                                    sx={{ fontSize: "60px", color: "#409E60" }}
                                />
                                <h3 className={s.card__heading}>
                                    Типовые вопросы (продолжение)
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                Не выполнена ли подпись от имени Иванова И.И. в
                                завещании от «...» с подражанием подлинной
                                подписи Иванова?
                            </div>
                            <div className={s.card__paragraph}>
                                Не выполнен ли текст письма, начинающегося и
                                соответственно заканчивающегося словами: «...»,
                                намеренно измененным почерком? Не выполнен ли
                                данный текст Ивановым Иваном Ивановичем?
                            </div>
                            <div className={s.card__paragraph}>
                                Не выполнена ли подпись от имени Иванова И.И. в
                                расписке, датированной «...», в необычном
                                состоянии (состоянии волнения, стресса,
                                алкогольного опьянения)?
                            </div>
                            <div className={s.card__paragraph}>
                                Не дописаны ли слова (фраза): «...» к тексту
                                письма другим лицом?
                            </div>
                            <div className={s.card__paragraph}>
                                Не являются ли почерки двух лиц сходными?
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default PaymentSlider;
