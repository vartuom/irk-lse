import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    name: string;
    surname: string;
    patronymic: string;
}

const initialState: IInitialState = {
    name: "",
    surname: "",
    patronymic: "",
};

export const appealFormSlice = createSlice({
    name: "appealForm",
    initialState,
    reducers: {},
});

export const {} = appealFormSlice.actions;
export default appealFormSlice.reducer;
