import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFirstStep } from "../components/appealForm/firstStep";
import { ISecondStep } from "../components/appealForm/secondStep";
import { IThirdStep } from "../components/appealForm/thirdStep";

interface IInitialState {
    firstStep: IFirstStep;
    secondStep: ISecondStep;
    thirdStep: IThirdStep;
}

const initialState: IInitialState = {
    firstStep: {
        firstName: "",
        lastName: "",
        patronymic: "",
    },
    secondStep: {
        email: "",
        extraContacts: "",
    },
    thirdStep: {
        appealText: "",
    },
};

export const appealFormSlice = createSlice({
    name: "appealForm",
    initialState,
    reducers: {
        setFirstStep(state, action: PayloadAction<IFirstStep>) {
            state.firstStep.firstName = action.payload.firstName;
            state.firstStep.lastName = action.payload.lastName;
            state.firstStep.patronymic = action.payload.patronymic;
        },
        setSecondStep(state, action: PayloadAction<ISecondStep>) {
            state.secondStep.email = action.payload.email;
            state.secondStep.extraContacts = action.payload.extraContacts;
        },
        setThirdStep(state, action) {
            state.thirdStep.appealText = action.payload.appealText;
        },
    },
});

export const { setFirstStep, setSecondStep, setThirdStep } =
    appealFormSlice.actions;
export default appealFormSlice.reducer;
