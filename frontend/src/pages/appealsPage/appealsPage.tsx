import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import s from "./appealsPage.module.css";
import BasicsSlider from "../../components/cardSliders/basicsSlider";
import PaymentSlider from "../../components/cardSliders/paymentSlider";
import HandwritingSlider from "../../components/cardSliders/handwritingSlider";
import AutoSlider from "../../components/cardSliders/autoSlider";
import StepOne from "../../components/appealForm/stepOne";
import StepTwo from "../../components/appealForm/stepTwo";
import StepThree from "../../components/appealForm/stepThree";

function AppealsPage() {
    return (
        <main className={s.main}>
            <div className={s.lead}>
                <div>
                    <h1 className={s.lead__title}>Обращения граждан</h1>
                    <div className={s.lead__textContainer}>
                        <p className={s.lead__paragraph}>
                            Если у вас имеются какие-либо вопросы по
                            деятельности нашего учреждения, вы можете их задать,
                            заполнив приведенную ниже форму обращений граждан.
                            Обычно мы отвечаем на обращения в течение трех
                            рабочих дней. Мы направим вам отсканированную копию
                            ответа на указанный вами адрес электронной почты, а
                            оригинал вы сможете получить в канцелярии нашего
                            учреждения.
                        </p>
                        <p className={s.lead__paragraph}>
                            Статус вашего обращения вы можете уточнить по
                            телефону нашей канцелярии: 8 (3952) 70-22-97.
                        </p>
                    </div>
                </div>
                <QuizOutlinedIcon
                    sx={{
                        fontSize: 240,
                        alignSelf: "center",
                        justifySelf: "center",
                        color: "#ebf1f9",
                    }}
                />
            </div>
            <div className={s.formContainer}>
                <Routes>
                    <Route index element={<StepOne />} />
                    <Route path="stepTwo" element={<StepTwo />} />
                    <Route path="stepThree" element={<StepThree />} />
                </Routes>
            </div>
        </main>
    );
}

export default AppealsPage;
