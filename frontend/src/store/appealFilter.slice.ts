import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import moment from "moment";

interface IAppealFilterState {
    sort: string;
    name?: string;
    email?: string;
    startDate?: number;
    endDate?: number;
}

const initialState = {
    sort: "DATE_CREATED",
    fromDate: moment().startOf("day").valueOf(),
    toDate: moment().endOf("day").valueOf(),
} as IAppealFilterState;

const appealsFilterSlice = createSlice({
    name: "appealFilter",
    initialState,
    reducers: {
        setName(state, action: PayloadAction<{ name: string }>) {
            state.name = action.payload.name;
        },
        setEmail(state, action: PayloadAction<{ email: string }>) {
            state.email = action.payload.email;
        },
        setStartDate(state, action: PayloadAction<{ date: number }>) {
            state.startDate = action.payload.date;
        },
        setEndDate(state, action: PayloadAction<{ date: number }>) {
            state.endDate = action.payload.date;
        },
        setSortProp(state, action: PayloadAction<{ sortProp: string }>) {
            state.sort = action.payload.sortProp;
        },
        clearFilterState(state) {
            state.email = "";
            state.name = "";
            state.startDate = moment().startOf("day").valueOf();
            state.endDate = moment().endOf("day").valueOf();
        },
    },
});
export const {
    setName,
    setEmail,
    setStartDate,
    setEndDate,
    clearFilterState,
    setSortProp,
} = appealsFilterSlice.actions;
export default appealsFilterSlice.reducer;
