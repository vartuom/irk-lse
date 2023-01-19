import React from 'react';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';
import Looks3RoundedIcon from '@mui/icons-material/Looks3Rounded';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from './cardsPage.module.css';
import AppAccordion from '../../components/appAccordion/appAccordion';

function CardsPage() {
    return (
        <main className={s.main}>
            <div className={s.lead}>
                <div>
                    <h1 className={s.lead__title}>Коротко о главном</h1>
                    <div className={s.lead__textContainer}>
                        <p className={s.lead__paragraph}>
                            Заключение эксперта – важнейший источник сведений
                            для правильного рассмотрения и разрешения дела. Но
                            как и любое другое доказательство, оно будет иметь
                            юридическую силу только при условии того, что
                            получено с соблюдением закона и соответсвует
                            формальным требованиям.
                        </p>
                        <p className={s.lead__paragraph}>
                            Что нужно знать перед обращением в лабораторию? Мы
                            подготовили небольшой набор карточек с ответами на
                            самые важные вопросы:{' '}
                            <span className="spanAccent">
                                {' '}
                                понятия, оплата исследований, виды и роды
                                экспертиз
                            </span>
                            .
                        </p>
                    </div>
                </div>
                <QuizOutlinedIcon
                    sx={{
                        fontSize: 240,
                        alignSelf: 'center',
                        justifySelf: 'center',
                    }}
                />
            </div>
            <div className={s.swiper__container}>
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
                            <div className={s.card__title}>
                                <LooksOneRoundedIcon
                                    sx={{ fontSize: '60px', color: '#1B89EF' }}
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
                                Отметим главное: Экспертиза может быть назначена
                                только
                                <span className="spanBold">
                                    {' '}
                                    уполномоченным лицом.
                                </span>
                            </div>
                            <div className={s.card__paragraph}>
                                Перечнь уполномоченных лиц приведен ниже для
                                каждого из вида производств. Если вы не
                                относитесь к уполномоченным лицам, то вы имеет
                                право право ходатайствовать перед уполномоченным
                                лицом о назначении экспертизы. Если экспертиза
                                не может быть назначена, то вы вправе заказать
                                производство исследования на коммерческой основе
                                и получить акт экспертного исследования
                                (подробнее о данном документе см. следующую
                                карточку).
                            </div>
                            <div>
                                <AppAccordion title="В гражданском процессе">
                                    <div className={s.card__accordionContent}>
                                        <p className={s.card__paragraph}>
                                            В соответсвии со статьей 79 ГПК РФ
                                            экспертиза в гражданском процессе
                                            назначается судом по собственной
                                            инициативе, либо по ходатайству
                                            сторон.
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
                                </AppAccordion>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={s.swiper__slide}>
                        <div className={s.swiper__card}>
                            <div className={s.card__title}>
                                <LooksTwoRoundedIcon
                                    sx={{ fontSize: '60px', color: '#EF851B' }}
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
                            <div className={s.card__paragraph}>
                                Эксперт при производстве несудебной экспертизы
                                выступает в качестве{' '}
                                <span className="spanBold"> специалиста </span>и
                                не дает подписку о предупреждении об
                                ответственности за дачу заведомо ложного
                                заключения. Кроме того, выступая в роли
                                «специалиста», эксперт не несет обязанности
                                явится в суд по вызову, но может быть допрошен
                                при наличии дополнительного соглашения.
                            </div>
                            <div className={s.card__paragraph}>
                                Для производства несудебной экспертизы вам
                                необходимо обратиться в канцелярию нашего
                                учреждения с{' '}
                                <span className="spanAccent">
                                    соответствующим заявлением
                                </span>
                                .
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={s.swiper__slide}>
                        <div className={s.swiper__card}>
                            <div className={s.card__title}>
                                <Looks3RoundedIcon
                                    sx={{ fontSize: '60px', color: '#44DF39' }}
                                />
                                <h3 className={s.card__heading}>
                                    Дополнительные и повторные экспертизы
                                </h3>
                            </div>
                            <div className={s.card__paragraph}>
                                <span className="spanBold">
                                    Дополнительная экспертиза{' '}
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
                                    Повторная экспертиза{' '}
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
                    </SwiperSlide>
                    <SwiperSlide className={s.swiper__slide}>
                        <div className={s.swiper__card}>123</div>
                    </SwiperSlide>
                    <SwiperSlide className={s.swiper__slide}>
                        <div className={s.swiper__card}>123</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
    );
}

export default CardsPage;
