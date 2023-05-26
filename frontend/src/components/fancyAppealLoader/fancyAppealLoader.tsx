import React, { useEffect, useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import style from "./fancyAppealLoader.module.css";
import { sleep } from "../../utils/utils";

interface ILoaderProps {
    isProcessed: boolean;
    page?: string;
}

const fancyStrings = [
    "Делаем запрос...",
    "Ждем ответа...",
    "Формируем документы...",
    "Получаем обращения...",
    "Зачем я вообще сделал эти строки?",
    "Их же все равно никто не увидит",
];

function FancyAppealLoader({ isProcessed, page }: ILoaderProps) {
    const count = useRef({ currentString: 0, currentChar: 0 });
    // \xa0 - неразрывный пробел, или &nbsp; в html
    const [currentString, setCurrentString] = useState(
        "\xa0".repeat(fancyStrings[0].length)
    );
    useEffect(() => {
        let isHanging = false;
        async function hangWord() {
            await sleep(3000);
            if (count.current.currentString >= fancyStrings.length) {
                count.current.currentString = 0;
                count.current.currentChar = 0;
            }
            setCurrentString(
                "\xa0".repeat(fancyStrings[count.current.currentString].length)
            );
            isHanging = false;
        }
        const interval = setInterval(() => {
            if (isHanging) return;
            if (
                count.current.currentChar >=
                fancyStrings[count.current.currentString].length
            ) {
                count.current.currentString += 1;
                count.current.currentChar = 0;
                isHanging = true;
                hangWord();
                return;
            }

            count.current.currentChar += 1;
            /**
             * Возможен вариант с конкатенацией строки посимвольно
             * то есть конкатенация str с символом, на который указывает current.currentChar
             * однако такой подход делает появление строки более резким и
             * не привычным для глаза
             * Сложность для добавления символа в конец --- O(1)
             * При использовании substring --- O(n)
             * Для метода с использованием substring необходимо заполнение
             * изначальной строки неразрывными пробелами
             *
             * Огромный вопрос зачем я вообще решил такое сделать
             * Но допустим огда-нибудь в будущем пригодится
             */
            setCurrentString((str) => {
                return str
                    .substring(0, count.current.currentChar - 1)
                    .concat(
                        fancyStrings[count.current.currentString].charAt(
                            count.current.currentChar - 1
                        )
                    )
                    .concat(str.substring(count.current.currentChar));
            });
        }, 35);

        return () => {
            count.current = { currentString: 0, currentChar: 0 };
            clearInterval(interval);
        };
    }, [isProcessed, page]);
    return (
        <div className={style.loader}>
            <TailSpin
                height="128"
                width="128"
                color="var(--bg-color-blue-accent)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass={style.loader__wrapper}
            />
            <p className={style.loader__text}>{`${currentString}`}</p>
        </div>
    );
}

export default FancyAppealLoader;
