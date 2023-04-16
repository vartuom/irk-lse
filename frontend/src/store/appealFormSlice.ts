import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    firstName: string;
    lastName: string;
    patronymic: string;
}

const initialState: IInitialState = {
    firstName: "",
    lastName: "",
    patronymic: "",
};

export const appealFormSlice = createSlice({
    name: "appealForm",
    initialState,
    reducers: {
        setFirstStepState(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.patronymic = action.payload.patronymic;
        },
    },
});

export const { setFirstStepState } = appealFormSlice.actions;
export default appealFormSlice.reducer;
