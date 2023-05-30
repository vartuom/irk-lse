import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortOpts } from "../types/types";

interface IFAppealsilterState {
    sort: SortOpts;
    name?: string;
    email?: string;
    startDate?: Date;
    endDate?: Date;
}

const initialState = { sort: SortOpts.DATE_CREATED } as IFAppealsilterState;

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
        setStartDate(state, action: PayloadAction<{ date: Date }>) {
            state.startDate = action.payload.date;
        },
        setEndDate(state, action: PayloadAction<{ date: Date }>) {
            state.endDate = action.payload.date;
        },
    },
});
export const { setName, setEmail, setStartDate, setEndDate } =
    appealsFilterSlice.actions;
export default appealsFilterSlice.reducer;
