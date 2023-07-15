import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";
import { Oval, TailSpin } from "react-loader-spinner";
import s from "./appealForm.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { postAppeal, setCurrentStepNumber } from "../../store/appealForm.slice";

function ConfirmStep() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const {
        firstName,
        lastName,
        middleName,
        email,
        extraContacts,
        appealText,
        isMailed,
        isPending,
    } = useAppSelector((store) => ({
        firstName: store.appealForm.firstStep.firstName,
        lastName: store.appealForm.firstStep.lastName,
        middleName: store.appealForm.firstStep.middleName,
        email: store.appealForm.secondStep.email,
        extraContacts: store.appealForm.secondStep.extraContacts,
        appealText: store.appealForm.thirdStep.appealText,
        isMailed: store.appealForm.isMailed,
        isPending: store.appealForm.isPending,
    }));

    const schema = yup.object({
        isAgreed: yup.bool().oneOf([true], "Вы должны подтвердить готовность"),
    });

    const {
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = () => {
        dispatch(
            postAppeal({
                firstName,
                lastName,
                middleName,
                email,
                extraContacts,
                appealText: appealText.trim(),
            })
        );
    };
    const extraContactsParagraphs = extraContacts.split("\n");
    const appealParagraphs = appealText.split("\n");

    useEffect(() => {
        dispatch(setCurrentStepNumber({ step: 3 }));
    }, []);

    useEffect(() => {
        if (isMailed)
            navigate("/home/appeals/details", {
                state: { background: location },
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMailed]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.container}>
            <div className={s.lead}>
                <h2 className={s.lead_title}>
                    Почти готово, осталось только проверить
                </h2>
                <p className={s.lead_paragraph}>
                    <span className="spanBold">Заявитель: </span>{" "}
                    {`${lastName} ${firstName} ${middleName}`}
                </p>
                <p className={s.lead_paragraph}>
                    <span className="spanBold">Эл. почта: </span>
                    {email}
                </p>
                {extraContactsParagraphs.map((paragraph, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <p className={s.lead_paragraph} key={index}>
                        {paragraph}
                    </p>
                ))}
                <p className={s.lead_paragraph}>
                    <span className="spanBold">Текст обращения:</span>
                </p>
                {appealParagraphs.map((paragraph, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <p className={s.lead_paragraph} key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>
            <Controller
                name="isAgreed"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <FormControlLabel
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        control={<Checkbox {...field} />}
                        disabled={isPending}
                        label={
                            <p className={s.formLabel}>
                                Нажимая кнопку «Отправить» я даю согласие на
                                обработку своих персональных данных в
                                соответствии с{" "}
                                <a
                                    className="link"
                                    href="https://disk.yandex.ru/i/OVeR49sRUN2pmw"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Условиями &#8594;
                                </a>
                            </p>
                        }
                    />
                )}
            />
            <button
                type="submit"
                aria-label="Отправить"
                disabled={isPending}
                className={`${s.button} ${s.button_type_primary} ${
                    !isValid && s.button_type_inactive
                } ${isPending && "frozen"}`}
            >
                <div className={s.button__loader}>
                    {isPending ? (
                        <>
                            Отправляем...{" "}
                            <TailSpin
                                height="18"
                                width="18"
                                color="#ffffff"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </>
                    ) : (
                        <>Отправить</>
                    )}
                </div>
            </button>
            <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Назад"
                disabled={isPending}
                className={`${s.button} ${s.button_type_secondary} ${
                    isPending && "frozen"
                }`}
            >
                Назад
            </button>
        </form>
    );
}

export default ConfirmStep;
