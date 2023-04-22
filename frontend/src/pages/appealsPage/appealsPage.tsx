import React from "react";
import { Route, Routes } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import s from "./appealsPage.module.css";
import FirstStep from "../../components/appealForm/firstStep";
import SecondStep from "../../components/appealForm/secondStep";
import ThirdStep from "../../components/appealForm/thirdStep";
import ConfirmStep from "../../components/appealForm/confirmStep";

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
                <MailOutlineIcon
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
                    <Route index element={<FirstStep />} />
                    <Route path="stepTwo" element={<SecondStep />} />
                    <Route path="stepThree" element={<ThirdStep />} />
                    <Route path="confirm" element={<ConfirmStep />} />
                </Routes>
            </div>
        </main>
    );
}

export default AppealsPage;
