import React, { useEffect } from "react";
import { SearchOutlined, SortOutlined } from "@mui/icons-material";
import { InputAdornment, MenuItem, TextField } from "@mui/material";

import style from "./appealsFilter.module.css";
import { debounce } from "../../utils/utils";
import { useAppDispatch } from "../../store/store";
import { setEmail, setName } from "../../store/appealFilter.slice";

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

    useEffect(() => {
        return () => {
            debouncedDispatch.clear();
        };
    });

    return (
        <div className={style.filter}>
            <TextField
                variant="outlined"
                label="Поиск по ФИО"
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
            <TextField
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
                onChange={(e) => {
                    debouncedDispatch(setEmail({ email: e.target.value }));
                }}
            />
            <div className={style.datepickers}>
                <button
                    type="button"
                    className={`${style.button} ${style.button_type_secondary}`}
                >
                    23.12.2022
                </button>
                <hr className={style.datepickers__separator} />
                <button
                    type="button"
                    className={`${style.button} ${style.button_type_secondary}`}
                >
                    28.12.2022
                </button>
            </div>
            <TextField
                variant="outlined"
                select
                label="Сортировка"
                defaultValue="DATE_UPDATED"
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
            </TextField>
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
