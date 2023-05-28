import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFAppealsilterState {
    sort: SortOpts;
    name?: string;
    id?: number;
    startDate?: Date;
    endDate?: Date;
}
enum SortOpts {
    DATE_CREATED,
    DATE_UPDATED,
}

const initialState = { sort: SortOpts.DATE_CREATED } as IFAppealsilterState;

const appealsFilterSlice = createSlice({
    name: "appealFilter",
    initialState,
    reducers: {
        setName(state, action: PayloadAction<{ name: string }>) {
            state.name = action.payload.name;
        },
        setId(state, action: PayloadAction<{ id: number }>) {
            state.id = action.payload.id;
        },
        setStartDate(state, action: PayloadAction<{ date: Date }>) {
            state.startDate = action.payload.date;
        },
        setEndDate(state, action: PayloadAction<{ date: Date }>) {
            state.endDate = action.payload.date;
        },
    },
});
export const { setName, setId, setStartDate, setEndDate } =
    appealsFilterSlice.actions;
export default appealsFilterSlice.reducer;
