import React from 'react';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from './cardsPage.module.css'

const CardsPage = () => {

    return (
        <main className={s.main}>
            <div className={s.lead}>
                <div>
                    <h1 className={s.lead__title}>Коротко о главном</h1>
                    <div className={s.lead__textContainer}>
                        <p className={s.lead__paragraph}>
                            Заключение эксперта – важнейший источник сведений для правильного рассмотрения и разрешения
                            дела. Но как и любое другое доказательство, оно будет иметь юридическую силу только при
                            условии
                            того, что получено с соблюдением закона и соответсвует формальным требованиям.
                        </p>
                        <p className={s.lead__paragraph}>
                            Что нужно знать перед обращением в лабораторию? Мы подготовили небольшой набор карточек с
                            ответами на самые важные вопросы: <span className={'spanAccent'}>  понятия, оплата исследований, виды и роды экспертиз</span>.
                        </p>
                    </div>
                </div>
                <QuizOutlinedIcon sx={{fontSize: 240, alignSelf: 'center', justifySelf: 'center'}}/>
            </div>
            <div className={s.swiper__container}>
                <Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={30} pagination navigation modules={[Pagination, Navigation]} className="mySwiper">
                    <SwiperSlide className={s.swiper__slide}>
                        <div className={s.swiper__card}>123</div>
                    </SwiperSlide>
                    <SwiperSlide className={s.swiper__slide}>
                        <div className={s.swiper__card}>123</div>
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
};

export default CardsPage;