import React from "react";
import { SearchOutlined, SortOutlined } from "@mui/icons-material";
import { InputAdornment, MenuItem, TextField } from "@mui/material";

import style from "./appealsFilter.module.css";

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
    return (
        <div className={style.filter}>
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
            />
            <TextField variant="outlined" label="ID обращения" />
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
