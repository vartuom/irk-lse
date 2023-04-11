import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import s from "./contactsPage.module.css";
import AppAccordion from "../../components/appAccordion/appAccordion";

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
                    <AppAccordion title="Отделы и подразделения" noBorders>
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
                    </AppAccordion>
                </div>
                <div>
                    <p className={s.contacts__title}>Прочая информация</p>
                    <AppAccordion
                        title="Карточка сведений о контрагенте и банковские реквизиты"
                        noBorders
                    >
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
                    </AppAccordion>
                    <AppAccordion title="Вакансии" noBorders>
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
                    </AppAccordion>
                    <AppAccordion
                        title="Политика для целей бухгалтерского учета"
                        noBorders
                    >
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
                    </AppAccordion>
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
