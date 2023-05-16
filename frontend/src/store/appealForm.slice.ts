import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
import { IFirstStep } from "../components/appealForm/firstStep";
import { ISecondStep } from "../components/appealForm/secondStep";
import { IThirdStep } from "../components/appealForm/thirdStep";
import { baseUrl } from "../utils/utils";
import { IAppealResponse } from "../utils/types";

export const postAppeal = createAsyncThunk(
    "appealForm/postAppeal",
    async (value: any, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                `${baseUrl}/appeals/create`,
                value
            );
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

interface IInitialState {
    currentStep: number;
    firstStep: IFirstStep;
    secondStep: ISecondStep;
    thirdStep: IThirdStep;
    isPending: boolean;
    isError: boolean;
    isMailed: boolean;
    appealDetails: string;
}

const initialState: IInitialState = {
    currentStep: 0,
    firstStep: {
        firstName: "",
        lastName: "",
        middleName: "",
    },
    secondStep: {
        email: "",
        extraContacts: "",
    },
    thirdStep: {
        appealText: "",
    },
    isPending: false,
    isError: false,
    isMailed: false,
    appealDetails: "",
};

export const appealFormSlice = createSlice({
    name: "appealForm",
    initialState,
    reducers: {
        setFirstStep(state, action: PayloadAction<IFirstStep>) {
            state.firstStep.firstName = action.payload.firstName;
            state.firstStep.lastName = action.payload.lastName;
            state.firstStep.middleName = action.payload.middleName;
            state.isMailed = false;
        },
        setSecondStep(state, action: PayloadAction<ISecondStep>) {
            state.secondStep.email = action.payload.email;
            state.secondStep.extraContacts = action.payload.extraContacts;
        },
        setThirdStep(state, action) {
            state.thirdStep.appealText = action.payload.appealText;
        },
        resetForm(state) {
            state.currentStep = 0;
            state.firstStep.firstName = "";
            state.firstStep.lastName = "";
            state.firstStep.middleName = "";
            state.secondStep.email = "";
            state.secondStep.extraContacts = "";
            state.thirdStep.appealText = "";
            state.appealDetails = "";
        },
        setCurrentStepNumber(state, action) {
            state.currentStep = action.payload.step;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            postAppeal.fulfilled,
            (state, action: PayloadAction<IAppealResponse>) => {
                state.isPending = false;
                state.isMailed = true;
                state.appealDetails = `№ ${action.payload.id} от ${moment(
                    action.payload.createdAt
                ).format("DD.MM.YYYY")} г.`;
            }
        );
        builder.addCase(postAppeal.pending, (state) => {
            state.isMailed = false;
            state.isError = false;
            state.isPending = true;
        });
        builder.addCase(postAppeal.rejected, (state, action) => {
            state.isError = true;
            state.isPending = false;
        });
    },
});

export const {
    setFirstStep,
    setSecondStep,
    setThirdStep,
    resetForm,
    setCurrentStepNumber,
} = appealFormSlice.actions;
export default appealFormSlice.reducer;
