import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Stepper, useMediaQuery, Step, StepLabel } from "@mui/material";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

import { Helmet } from "react-helmet";
import { Navigate } from "react-router";
import s from "./appealsPage.module.css";
import FirstStep from "../../components/appealForm/firstStep";
import SecondStep from "../../components/appealForm/secondStep";
import ThirdStep from "../../components/appealForm/thirdStep";
import ConfirmStep from "../../components/appealForm/confirmStep";
import { useAppSelector } from "../../store/store";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "#1976d2",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "#1976d2",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        marginLeft: "-8px",
        borderColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

function AppealsPage() {
    const steps = ["", "", "", ""];
    const currentStep = useAppSelector((state) => state.appealForm.currentStep);
    const mobileLayout = useMediaQuery("(max-width: 768px)");

    return (
        <main className={s.main}>
            <Helmet>
                <title>Обращения | Иркутская ЛСЭ</title>
                <meta
                    name="description"
                    content="Форма обращений граждан по вопросам производства экспертиз, исследований и деятельности ФБУ Иркутской ЛСЭ."
                />
            </Helmet>
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
                {mobileLayout ? (
                    <div className={s.stepper}>
                        {`Шаг \xa0${currentStep + 1}/4`}
                    </div>
                ) : (
                    <Stepper
                        activeStep={currentStep}
                        sx={{
                            padding: "36px 36px 0px 36px",
                        }}
                        connector={<QontoConnector />}
                    >
                        {steps.map((label, ind) => (
                            <Step key={ind}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                )}
                <Routes>
                    <Route index element={<FirstStep />} />
                    <Route path="stepTwo" element={<SecondStep />} />
                    <Route path="stepThree" element={<ThirdStep />} />
                    <Route path="confirm" element={<ConfirmStep />} />
                    <Route
                        path="*"
                        element={<Navigate to="/home/appeals" replace />}
                    />
                </Routes>
            </div>
        </main>
    );
}

export default AppealsPage;
