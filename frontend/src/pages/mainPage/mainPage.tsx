import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./mainPage.module.css";
import AccordionRow from "../../components/accordionRow/accordionRow";

function MainPage() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <main className={styles.main}>
            <Helmet>
                <title>Главная | Иркутская ЛСЭ</title>
                <meta
                    name="description"
                    content="Государственное судебно-экспертное учреждение. Производство судебных экспертиз по гражданским и арбитражным делам, делам об административных правонарушениях, а так же любых исследований по заявлениям граждан и юридических лиц."
                />
            </Helmet>
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
            <section
                className={`${styles.section_grid} ${styles.section_type_map}`}
            >
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
                        <Link to="/home/contacts" className="link">
                            Контакты &#8594;{" "}
                        </Link>{" "}
                        или заполните{" "}
                        <Link to="/home/appeals" className="link">
                            форму для обращений граждан &#8594;{" "}
                        </Link>
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
                            navigate("/home/prices", {
                                state: { background: location },
                            })
                        }
                    >
                        Открыть прейскурант
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() => navigate("/home/prices")}
                    >
                        Узнать подробнее
                    </button>
                </div>
                <div className={styles.rubbleLogo} />
            </section>
            <section className={styles.section_flat}>
                <h2 className={styles.section__title_big}>Частые вопросы</h2>
                <div className={styles.section__container}>
                    <AccordionRow title="Как назначить экспертизу?">
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
                            <Link to="/home/appeals" className="link">
                                форму обращений граждан &#8594;
                            </Link>{" "}
                            на нашем сайте или отправив нам письмо с запросом по{" "}
                            <Link to="/home/contacts" className="link">
                                электронной почте &#8594;
                            </Link>
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
                            <Link to="/home/cards" className="link">
                                карточка, посвященная этому вопросу &#8594;
                            </Link>
                            . Если вы уверены, что экспертное исследование Вам
                            подходит, то{" "}
                            <span className="spanAccent">
                                {" "}
                                <a
                                    href="https://disk.yandex.ru/i/mKERf54IJLE0LQ"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link"
                                >
                                    вот образец заявления для физических лиц
                                    &#8594;
                                </a>
                            </span>
                            . Ждем вас в канцелярии в рабочее время (не забудьте
                            захватить паспорт!).
                        </p>
                    </AccordionRow>
                    <AccordionRow title="У меня есть вопрос! Как получить консультацию?">
                        <p className={styles.section__paragraph}>
                            Мы подготовили справочные карточки по наиболее часто
                            задаваемым вопросам, ознакомится с ними вы можете в
                            разделе{" "}
                            <Link to="/home/cards" className="link">
                                деятельность &#8594;{" "}
                            </Link>
                        </p>
                        <p className={styles.section__paragraph}>
                            Если у вас остались вопросы, вы можете заполнить
                            <Link to="/home/appeals" className="link">
                                {" "}
                                форму обращений граждан &#8594;{" "}
                            </Link>{" "}
                            и получить письменный ответ. Кроме того, эксперты
                            лаборатории проводят устные консультации по
                            телефонам, указным в разделе{" "}
                            <Link to="/home/contacts" className="link">
                                контактов &#8594;{" "}
                            </Link>
                        </p>
                        <p className={styles.section__paragraph}>
                            Если ваш вопрос предполагает ознакомление эксперта с
                            какими либо материалами, запишитесь на личный прием
                            по телефону 8 (3952) 70-22-98. Все консультации с
                            экспертами осуществляются в присутствии начальника
                            лаборатории. Обратите внимание на то, что
                            исследование материалов (в том числе на их
                            пригодность) в рамках консультаций экспертами не
                            осуществляется.
                        </p>
                        <p className={styles.section__paragraph}>
                            Если вам необходимо направить нам обращение или
                            документы в электронной форме — воспользуйтесь нашим
                            адресом электронной почты:{" "}
                            <span className="spanBold">
                                irksudexpert@ya.ru{" "}
                            </span>
                            . Не забудьте в теле письма указать краткие сведения
                            о себе и предмете дела. На анонимные письма мы не
                            ответим, это закон.
                        </p>
                    </AccordionRow>
                    <AccordionRow title="А сколько будет стоить и как долго будете делать?">
                        <p className={styles.section__paragraph}>
                            Вопросы определения стоимости и оплаты исследований
                            разобраны в{" "}
                            <Link to="/home/cards" className="link">
                                соответствующих карточках &#8594;
                            </Link>{" "}
                            раздела справки. Сроки производства исследований
                            определяются текущей загруженностью экспертов.
                        </p>
                        <p className={styles.section__paragraph}>
                            К сожалению, мы не можем дать универсальные ответы
                            на данные вопросы. Всю необходимую информацию мы вам
                            обязательно сообщим в рамках персональной
                            консультации или ответа на ваше обращение (см.
                            предыдущий пункт).
                        </p>
                    </AccordionRow>
                    <AccordionRow
                        title="По каким направления проводятся исследования?"
                        borders="both"
                    >
                        <p className={styles.section__paragraph}>
                            Полный перечень имеющихся в лаборатории экспертных
                            специальностей и проводимых исследований приведен в
                            <Link to="/home/prices" className="link">
                                {" "}
                                прейскуранте &#8594;
                            </Link>
                            .
                        </p>
                        <p className={styles.section__paragraph}>
                            А по самым популярным направлениям, мы подготовили
                            справочные карточки и памятки в разделе справки:{" "}
                            <Link to="/home/cards/handwriting" className="link">
                                почерковедение
                            </Link>
                            ,{" "}
                            <Link to="/home/cards/auto" className="link">
                                обстоятельства ДТП и восстановительный ремонт
                            </Link>
                            .
                        </p>
                    </AccordionRow>
                </div>
            </section>
        </main>
    );
}

export default MainPage;
