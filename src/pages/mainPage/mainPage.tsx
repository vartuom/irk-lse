import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./mainPage.module.css";
import AppAccordion from "../../components/appAccordion/appAccordion";

function MainPage() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <main className={styles.main}>
            <section className={styles.section_grid}>
                <div>
                    <h2 className={styles.section__title}>
                        К первому профессиональному празднику «День судебного
                        эксперта» в России
                    </h2>
                    <p className={styles.section__paragraph}>
                        В прошлом году системе судебно-экспертных учреждений
                        Минюста России исполнилось 110 лет, а нашей лаборатории
                        – 66 лет.
                    </p>
                    <p className={styles.section__paragraph}>
                        К этому событию мы подготовили материал о развитии
                        судебной экспертизы в России и об экспертах-основателях
                        Иркутской лаборатории.{" "}
                        <Link className="link" to="history">
                            Узнать (ок. 5 минут на чтение) &#8594;
                        </Link>
                    </p>
                </div>
                <div
                    className={`${styles.section__image} ${styles.sidorovImg}`}
                />
            </section>
            <section className={`${styles.section_facts_grid}`}>
                <div className={styles.section__heading_centered}>
                    <h2 className={styles.section__title_big}>Цифры и факты</h2>
                    <p className={styles.section__subtitle}>
                        Иркутская лаборатория в 2023 году
                    </p>
                </div>
                <div>
                    <h3 className={styles.sectionCell__title}>
                        Более 65 лет на защите прав и законных интересов граждан
                    </h3>
                    <p className={styles.section__paragraph}>
                        Иркутская лаборатория была основана 29 июня 1956 года
                        Указом Народного коммисариата юстиции СССР.
                    </p>
                </div>
                <div>
                    <h3 className={styles.sectionCell__title}>
                        27 аттестованых экспертов и 18 экспертных специальностей
                    </h3>
                    <p className={styles.section__paragraph}>
                        Все эксперты лаборатории проходят регулярную
                        переаттестацию в федеральном и региональных центрах
                        судебной экспертизы.
                    </p>
                </div>
                <div>
                    <h3 className={styles.sectionCell__title}>
                        Более 1500 экспертиз и актов экспертного исследования
                        ежегодно
                    </h3>
                    <p className={styles.section__paragraph}>
                        Экспертами лаборатории проводятся как классические, так
                        и самые современные компьютерные и видеотехнические
                        исследования.
                    </p>
                </div>
                <div>
                    <h3 className={styles.sectionCell__title}>
                        Современное оборудование и подходы к исследованию
                    </h3>
                    <p className={styles.section__paragraph}>
                        Профессиональное оснащение лаборатории позволяет
                        применять самые современные техники и методы
                        исследования.
                    </p>
                </div>
            </section>
            <section className={styles.section_grid}>
                <div>
                    <h2 className={styles.section__title}>
                        Территориальной сферой экспертного обслуживания
                        Иркутской лаборатории является г. Иркутск и Иркутская
                        область
                    </h2>
                    <p className={styles.section__paragraph}>
                        Основными заказчиками экспертиз и экспертных
                        исследования для лаборатории являются суды,
                        правоохранительные органы и юридические лица
                        территориально расположенные в г. Иркутске и Иркутской
                        области. Однако, не редки случаи поступления на
                        исследование в лабораторию материалов и из соседних
                        регионов.
                    </p>
                    <p className={styles.section__paragraph}>
                        Если вы находитесь в другом регионе и не уверены в
                        возможности назначения исследования в нашу лабораторию,
                        воспользуйтесь информацией из раздлеа{" "}
                        <span className="spanAccent">Контакты &#8594;</span> или
                        заполните{" "}
                        <span className="spanAccent">
                            {" "}
                            форму для обращений граждан &#8594;{" "}
                        </span>
                    </p>
                </div>
                <div className={`${styles.section__image} ${styles.mapImg}`} />
            </section>
            <section className={styles.section_accent}>
                <h2 className={styles.section__title_big}>
                    Стоимость производства исследований
                </h2>
                <div className={styles.section__container}>
                    <p className={styles.section__paragraph}>
                        Производство судебных экспертиз по гражданским и
                        арбитражным делам, делам об административных
                        правонарушениях, а так же любых исследований по
                        заявлениям граждан и юридических лиц осуществляется на
                        платной основе.
                    </p>
                    <p className={styles.section__paragraph}>
                        Стоимость производства исследований определяется исходя
                        из нормативных документов и фактических затрат времени
                        экспертов. Ориентировочная стоимость исследований
                        приведена в прейскуранте.
                    </p>
                </div>
                <div className={styles.buttonWrapper}>
                    <button
                        type="button"
                        className={`${styles.button} ${styles.button_accent}`}
                        onClick={() =>
                            navigate("prices", {
                                state: { background: location },
                            })
                        }
                    >
                        Открыть прейскурант
                    </button>
                    <button type="button" className={styles.button}>
                        Узнать подробнее
                    </button>
                </div>
                <div className={styles.rubbleLogo} />
            </section>
            <section className={styles.section_flat}>
                <h2 className={styles.section__title_big}>Частые вопросы</h2>
                <div className={styles.section__container}>
                    <AppAccordion title="Как назначить экспертизу?!">
                        <p className={styles.section__paragraph}>
                            Для начала определимся с понятиями. Вы являетесь
                            судом, следователем или дознавателем? Если нет, то к
                            сожалению «судебную экспертизу» назначить вы не в
                            праве.
                        </p>
                        <p className={styles.section__paragraph}>
                            Что делать в таком случае? У вас несколько
                            вариантов:
                        </p>
                        <p className={styles.section__paragraph}>
                            1. Ходатайствовать перед указанными лицами о
                            назначении экспертизы в наше учреждение. Но перед
                            этим, мы рекомендуем получить от нас письменный
                            ответ о возможности и сроках производства
                            интересующего Вас исследования. Сделать это можно
                            заполнив{" "}
                            <span className="spanAccent">
                                форму обращений граждан &#8594;
                            </span>{" "}
                            на нашем сайте или отправив нам письмо с запросом по{" "}
                            <span className="spanAccent">
                                электронной почте &#8594;
                            </span>
                            .
                        </p>
                        <p className={styles.section__paragraph}>
                            2. Вы можете самостоятельно заказать внесудебное
                            исследование, по результатам которого, вам будет
                            выдан «Акт экспертного исследования». Указанный
                            документ не носит юридического статуса экспертизы и
                            перед обращением к нам, мы рекомендуем Вам более
                            подробно изучить его особенности. В разделе справки
                            как раз есть{" "}
                            <span className="spanAccent">
                                карточка, посвященная этому вопросу &#8594;
                            </span>
                            . Если вы уверены, что экспертное исследование Вам
                            подходит, то{" "}
                            <span className="spanAccent">
                                {" "}
                                вот образец заявления для физических лиц
                            </span>
                            . Ждем вас в канцелярии в рабочее время (не забудьте
                            захватить паспорт!).
                        </p>
                    </AppAccordion>
                    <AppAccordion title="Как назначить экспертизу?">
                        Никак
                    </AppAccordion>
                    <AppAccordion lastRow title="Как назначить экспертизу?">
                        Никак
                    </AppAccordion>
                </div>
            </section>
        </main>
    );
}

export default MainPage;
