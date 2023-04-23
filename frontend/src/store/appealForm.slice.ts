import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IFirstStep } from "../components/appealForm/firstStep";
import { ISecondStep } from "../components/appealForm/secondStep";
import { IThirdStep } from "../components/appealForm/thirdStep";
import { baseUrl } from "../utils/utils";

export const postAppeal = createAsyncThunk(
    "appealForm/postAppeal",
    async (value: any, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${baseUrl}/appeals`, value);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

interface IInitialState {
    firstStep: IFirstStep;
    secondStep: ISecondStep;
    thirdStep: IThirdStep;
    isPending: boolean;
    isError: boolean;
    isMailed: boolean;
}

const initialState: IInitialState = {
    firstStep: {
        firstName: "Иванов",
        lastName: "Иван",
        middleName: "Иванович",
    },
    secondStep: {
        email: "mail@mail.ru",
        extraContacts: "8 924 562-21-23",
    },
    thirdStep: {
        appealText: "текст обращения",
    },
    isPending: false,
    isError: false,
    isMailed: false,
};

export const appealFormSlice = createSlice({
    name: "appealForm",
    initialState,
    reducers: {
        setFirstStep(state, action: PayloadAction<IFirstStep>) {
            state.firstStep.firstName = action.payload.firstName;
            state.firstStep.lastName = action.payload.lastName;
            state.firstStep.middleName = action.payload.middleName;
        },
        setSecondStep(state, action: PayloadAction<ISecondStep>) {
            state.secondStep.email = action.payload.email;
            state.secondStep.extraContacts = action.payload.extraContacts;
        },
        setThirdStep(state, action) {
            state.thirdStep.appealText = action.payload.appealText;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(postAppeal.fulfilled, (state, action) => {
            console.log(action.payload);
        });
        builder.addCase(postAppeal.rejected, (state, action) => {
            console.log(action.payload);
        });
    },
});

export const { setFirstStep, setSecondStep, setThirdStep } =
    appealFormSlice.actions;
export default appealFormSlice.reducer;
