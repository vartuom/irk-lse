import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ruRU } from "@mui/x-date-pickers/locales";
import { MomentInput } from "moment";

interface IDatePickerProps {
    value: MomentInput;
    onChange: (value: string | null) => void;
}

const MuiDatePicker = function CustomDatePicker({
    value,
    onChange,
}: IDatePickerProps) {
    return (
        <LocalizationProvider
            dateAdapter={AdapterMoment}
            localeText={
                ruRU.components.MuiLocalizationProvider.defaultProps.localeText
            }
        >
            {/* value может принимать MomentInput, что работает как задумано,
             однако в интерфейсах такого типа по понятным причинам нет
             TODO: переопределить глобальные типы для компонента DatePicker */}
            <DatePicker value={value} onChange={onChange} />
        </LocalizationProvider>
    );
};
export default MuiDatePicker;
