import React from 'react';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Route, Routes } from 'react-router-dom';
import s from './cardsPage.module.css';
import BasicsSlider from '../../components/cardSliders/basicsSlider';

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
                <Routes>
                    <Route index element={<BasicsSlider />} />
                    <Route path="*" element={<BasicsSlider />} />
                </Routes>
            </div>
        </main>
    );
}

export default CardsPage;
