import { createSlice } from "@reduxjs/toolkit";
import { IAppeal } from "../types/types";

interface IAppealsArray {
    appeals: Array<IAppeal>;
}

const initialState: IAppealsArray = {
    appeals: [],
};

export const appealsSlice = createSlice({
    name: "appeals",
    initialState,
    reducers: {
        setAppeals(state, action) {
            state.appeals = action.payload;
        },
        filterAppeals(state, action) {
            state.appeals.filter((item) => item.id !== action.payload.id);
        },
    },
});
export const { setAppeals, filterAppeals } = appealsSlice.actions;
export default appealsSlice.reducer;
