import React, { useEffect, useRef } from "react";
import { SearchOutlined, SortOutlined } from "@mui/icons-material";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import moment from "moment";

import style from "./appealsFilter.module.css";
import { debounce } from "../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
    clearFilterState,
    setEmail,
    setEndDate,
    setName,
    setSortProp,
    setStartDate,
} from "../../store/appealFilter.slice";
import MuiDatePicker from "../datePicker/MuiDatePicker";
import ResponsiveTextField from "../responsiveTextField/responsiveTextField";

const sortOptions = [
    { value: "DATE_UPDATED", label: "Дата изменения" },
    {
        value: "DATE_CREATED",
        label: "Дата создания",
    },
];

interface IappealsFilterProps {
    isProcessed?: boolean;
    generateAllAppeals: () => void;
}

function AppealsFilter({
    isProcessed,
    generateAllAppeals,
}: IappealsFilterProps) {
    const dispatch = useAppDispatch();
    const debouncedDispatch = debounce(dispatch, 300);

    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);

    const startDate = useAppSelector((state) => state.appealsFilter.startDate);
    const endDate = useAppSelector((state) => state.appealsFilter.endDate);

    useEffect(() => {
        dispatch(clearFilterState());
        if (nameInputRef.current) {
            nameInputRef.current.value = "";
        }
        if (emailInputRef.current) {
            emailInputRef.current.value = "";
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isProcessed]);

    useEffect(() => {
        return () => {
            debouncedDispatch.clear();
        };
    });

    return (
        <div className={style.filter}>
            <ResponsiveTextField
                variant="outlined"
                select
                label="Сортировка"
                defaultValue="DATE_UPDATED"
                onChange={(e) => {
                    dispatch(setSortProp({ sortProp: e.target.value }));
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SortOutlined />
                        </InputAdornment>
                    ),
                }}
            >
                {sortOptions.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </MenuItem>
                ))}
            </ResponsiveTextField>
            <div className={style.datepickers}>
                <MuiDatePicker
                    value={moment(startDate)}
                    onChange={(value) =>
                        debouncedDispatch(
                            setStartDate({ date: moment(value).valueOf() })
                        )
                    }
                />
                <hr className={style.datepickers__separator} />
                <MuiDatePicker
                    value={moment(endDate)}
                    onChange={(value) =>
                        debouncedDispatch(
                            setEndDate({ date: moment(value).valueOf() })
                        )
                    }
                />
            </div>
            <ResponsiveTextField
                variant="outlined"
                label="Поиск по ФИО"
                inputRef={nameInputRef}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    ),
                }}
                onChange={(e) => {
                    debouncedDispatch(setName({ name: e.target.value }));
                }}
            />
            <ResponsiveTextField
                className={style.search__email}
                variant="outlined"
                label="Поиск по E-mail"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    ),
                }}
                inputRef={emailInputRef}
                onChange={(e) => {
                    debouncedDispatch(setEmail({ email: e.target.value }));
                }}
            />
            {!isProcessed && (
                <button
                    type="button"
                    className={`${style.button} ${style.button_type_primary} ${style.printAll}`}
                    onClick={() => generateAllAppeals()}
                >
                    Скачать все обращения
                </button>
            )}
        </div>
    );
}

export default AppealsFilter;
