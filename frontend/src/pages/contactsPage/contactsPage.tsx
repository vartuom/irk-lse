import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import s from "./contactsPage.module.css";
import AccordionRow from "../../components/accordionRow/accordionRow";

function ContactsPage() {
    return (
        <main className={s.main}>
            <section className={s.heading}>
                <BusinessIcon sx={{ fontSize: 80 }} />
                <h1 className={s.heading__title}>Контакты</h1>
            </section>
            <section className={s.section_grid}>
                <div>
                    <div className={s.contacts}>
                        <p className={s.contacts__title}>
                            ФБУ Иркутская ЛСЭ Миюста России
                        </p>
                        <div>
                            <p className={s.contacts__paragraph}>
                                664081, г. Иркутск, ул. Красноказачья, 131
                            </p>
                            <p className={s.contacts__paragraph}>
                                Электронная почта:{" "}
                                <span className="spanAccent">
                                    sudexpert@irk.ru
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className={s.contacts__paragraph}>
                                пн.-чт. с 08:00 до 17:00 (перерыв с 12:30 до
                                13:20)
                            </p>
                            <p className={s.contacts__paragraph}>
                                пт. с 08:00 до 16:10 (перерыв с 12:30 до 13:20)
                            </p>
                            <p className={s.contacts__paragraph}>
                                сб.-вс. выходной
                            </p>
                        </div>
                        <div>
                            <div className={s.contacts__number}>
                                <p className={s.contacts__paragraph}>
                                    Начальник
                                </p>
                                <p className={s.contacts__paragraph}>
                                    т. 8 (3952) 70-22-98
                                </p>
                            </div>
                            <div className={s.contacts__number}>
                                <p className={s.contacts__paragraph}>
                                    Канцелярия
                                </p>
                                <p className={s.contacts__paragraph}>
                                    т. 8 (3952) 70-22-97
                                </p>
                            </div>
                        </div>
                        <p className={s.contacts__paragraph}>
                            Прием обращений возможен в электронной форме с
                            использованием
                            <span className="spanAccent">
                                {" "}
                                страницы обращений граждан
                            </span>
                            , либо на адрес электронной почты.
                        </p>
                    </div>
                    <AccordionRow title="Отделы и подразделения" borders="none">
                        <div className={s.contacts}>
                            <div>
                                <p
                                    className={`${s.contacts__paragraph} ${s.contacts__paragraph_type_accent}`}
                                >
                                    Отдел исследования почерка и документов:
                                </p>
                                <p className={s.contacts__paragraph}>
                                    т. 8 (3952) 70-23-52
                                </p>
                            </div>
                            <div>
                                <p
                                    className={`${s.contacts__paragraph} ${s.contacts__paragraph_type_accent}`}
                                >
                                    Отдел экономических и
                                    строительно-технических исследований:
                                </p>
                                <p className={s.contacts__paragraph}>
                                    т. 8 (3952) 70-23-20
                                </p>
                            </div>
                            <div>
                                <p
                                    className={`${s.contacts__paragraph} ${s.contacts__paragraph_type_accent}`}
                                >
                                    Отдел автотехнических исследований:
                                </p>
                                <p className={s.contacts__paragraph}>
                                    т. 8 (3952) 70-23-22
                                </p>
                            </div>
                        </div>
                    </AccordionRow>
                </div>
                <div>
                    <p className={s.contacts__title}>Прочая информация</p>
                    <AccordionRow
                        title="Карточка сведений о контрагенте и банковские реквизиты"
                        borders="none"
                    >
                        <div className={s.bankReq}>
                            <div>
                                <p className={`${s.contacts__paragraph}`}>
                                    Федеральное бюджетное учреждение Иркутская
                                    лаборатория судебной экспертизы Министерства
                                    юстиции Российской Федерации
                                </p>
                                <p className={`${s.contacts__paragraph}`}>
                                    Сокращенное наименование: ФБУ Иркутская ЛСЭ
                                    Минюста России
                                </p>
                            </div>
                            <div>
                                <p className={`${s.contacts__paragraph}`}>
                                    ИНН 3808041927 КПП 381101001
                                </p>
                                <p className={s.contacts__paragraph}>
                                    ОГРН 1033801538165
                                </p>
                                <p className={s.contacts__paragraph}>
                                    ОКпО 02844729 ОКОГУ 13170
                                </p>
                                <p className={s.contacts__paragraph}>
                                    ОКТМО 25701000 ОКВЭД 71.20.2
                                </p>
                                <p className={s.contacts__paragraph}>
                                    ОКФС 12 ОКОПФ 75103
                                </p>
                            </div>
                            <div>
                                <p className={`${s.contacts__paragraph}`}>
                                    Банковские реквизиты:
                                </p>
                                <p className={`${s.contacts__paragraph}`}>
                                    УФК по Иркутской области (ФБУ Иркутская ЛСЭ
                                    Минюста России л/с 20346Ц16480)
                                </p>
                                <p className={s.contacts__paragraph}>
                                    Банк получателя: ОТДЕЛЕНИЕ ИРКУТСК БАНКА
                                    РОССИИ//УФК по Иркутской области г. Иркутск
                                </p>
                                <p className={s.contacts__paragraph}>
                                    БИК 012520101
                                </p>
                                <p className={s.contacts__paragraph}>
                                    Единый казначейский счет Управления
                                    40102810145370000026
                                </p>
                                <p className={s.contacts__paragraph}>
                                    Казначейский счет Управления
                                    03214643000000013400
                                </p>
                            </div>
                            <div>
                                <p className={`${s.contacts__paragraph}`}>
                                    Должность и ФИО руководителя:
                                </p>
                                <p className={s.contacts__paragraph}>
                                    Директор Дзюба Геннадий Григорьевич,
                                    действует на основании Устава
                                </p>
                            </div>
                        </div>
                    </AccordionRow>
                    <AccordionRow title="Вакансии" borders="none">
                        <div className={s.vacancies}>
                            <a
                                href="https://irkutsk.hh.ru/vacancy/81590567"
                                target="_blank"
                                rel="noreferrer"
                                className="link"
                            >
                                1. Стажер эксперт-автотехник &#8594;
                            </a>
                            <a
                                href="https://irkutsk.hh.ru/vacancy/81590519"
                                target="_blank"
                                rel="noreferrer"
                                className="link"
                            >
                                2. Стажер эксперт-строитель &#8594;
                            </a>
                            <a
                                href="https://irkutsk.hh.ru/vacancy/81590600"
                                target="_blank"
                                rel="noreferrer"
                                className="link"
                            >
                                3. Стажер компьютерный криминалист &#8594;
                            </a>
                        </div>
                    </AccordionRow>
                    <AccordionRow
                        title="Политика для целей бухгалтерского учета"
                        borders="none"
                    >
                        <div className={s.contacts}>
                            <div>
                                <p
                                    className={`${s.contacts__paragraph} ${s.contacts__paragraph_type_accent}`}
                                >
                                    Учетная политика – документ, описывающий
                                    особенности ведения бухучета в учреждении.
                                    Доступен по ссылке ниже:
                                </p>
                            </div>
                            <a
                                href="http://irksudexpert.ru/?page_id=194"
                                target="_blank"
                                rel="noreferrer"
                                className="link"
                            >
                                Учетная политика &#8594;
                            </a>
                        </div>
                    </AccordionRow>
                </div>
            </section>
            <div className={s.map}>
                <iframe
                    title="map"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A0b1d8c3739e7378af8b47231fe2edcd9e11e611c1b216f94e96893cefc6bbd91&amp;source=constructor"
                    width="100%"
                    height="540"
                    frameBorder="0"
                />
            </div>
        </main>
    );
}

export default ContactsPage;
