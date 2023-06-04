import React, { useEffect, useRef } from "react";
import { SearchOutlined, SortOutlined } from "@mui/icons-material";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ruRU } from "@mui/x-date-pickers/locales";
import { LocalizationProvider } from "@mui/x-date-pickers";
import style from "./appealsFilter.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import ResponsiveTextField from "../responsiveTextField/responsiveTextField";
import { IFilterOptions } from "../../types/types";

const sortOptions = [
    { value: "DATE_UPDATED", label: "Дата изменения" },
    {
        value: "DATE_CREATED",
        label: "Дата создания",
    },
];
interface IAppealsFilterProps {
    isProcessed?: boolean;
    generateAllAppeals: () => void;
    filterOptions: IFilterOptions;
    setFilterOptions: (options: IFilterOptions) => void;
}

function AppealsFilter({
    isProcessed,
    generateAllAppeals,
    filterOptions,
    setFilterOptions,
}: IAppealsFilterProps) {
    const schema = yup.object({
        name: yup
            .string()
            .matches(/^([^0-9]*)$/, "В имени могут быть только буквы"),
        email: yup.string(),
    });

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            name: filterOptions.name,
            email: filterOptions.email,
            sortOrder: filterOptions.sortOrder,
            fromDate: filterOptions.fromDate,
            toDate: filterOptions.toDate,
        },
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const dispatch = useAppDispatch();
    // const debouncedDispatch = debounce(dispatch, 300);

    const onSubmit = (data: any) => {
        setFilterOptions({
            ...data,
            toDate: data.toDate,
            fromDate: data.fromDate,
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.filter}>
            <Controller
                name="sortOrder"
                control={control}
                render={({ field }) => (
                    <ResponsiveTextField
                        variant="outlined"
                        select
                        label="Сортировка"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SortOutlined />
                                </InputAdornment>
                            ),
                        }}
                        {...field}
                    >
                        {sortOptions.map((opt) => (
                            <MenuItem key={opt.value} value={opt.value}>
                                {opt.label}
                            </MenuItem>
                        ))}
                    </ResponsiveTextField>
                )}
            />
            <div className={style.datepickers}>
                <Controller
                    name="fromDate"
                    control={control}
                    render={({ field }) => (
                        <LocalizationProvider
                            dateAdapter={AdapterMoment}
                            localeText={
                                ruRU.components.MuiLocalizationProvider
                                    .defaultProps.localeText
                            }
                        >
                            <DatePicker
                                label="С даты"
                                slotProps={{
                                    textField: { variant: "outlined" },
                                }}
                                {...field}
                            />
                        </LocalizationProvider>
                    )}
                />
                <hr className={style.datepickers__separator} />
                <Controller
                    name="toDate"
                    control={control}
                    render={({ field }) => (
                        <LocalizationProvider
                            dateAdapter={AdapterMoment}
                            localeText={
                                ruRU.components.MuiLocalizationProvider
                                    .defaultProps.localeText
                            }
                        >
                            <DatePicker
                                label="По дату"
                                slotProps={{
                                    textField: { variant: "outlined" },
                                }}
                                {...field}
                            />
                        </LocalizationProvider>
                    )}
                />
            </div>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <ResponsiveTextField
                        variant="outlined"
                        label="Поиск по ФИО"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlined />
                                </InputAdornment>
                            ),
                        }}
                        {...field}
                    />
                )}
            />
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
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
                        {...field}
                    />
                )}
            />
            <button
                type="submit"
                className={`${style.button} ${style.button_type_primary} ${style.printAll}`}
            >
                Применить
            </button>
            {!isProcessed && (
                <button
                    type="button"
                    className={`${style.button} ${style.button_type_primary} ${style.printAll}`}
                    onClick={() => generateAllAppeals()}
                >
                    Скачать все обращения
                </button>
            )}
        </form>
    );
}

export default AppealsFilter;
