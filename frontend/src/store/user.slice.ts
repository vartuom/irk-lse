import { createSlice } from "@reduxjs/toolkit";
import { appealFormSlice } from "./appealForm.slice";

interface IInitialState {
    isAuthPending: boolean;
    isLoggedIn: boolean;
    user: {
        name: string;
    };
}

const initialState: IInitialState = {
    isAuthPending: false,
    isLoggedIn: false,
    user: {
        name: "",
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoggedIn(state) {
            state.isLoggedIn = true;
        },
    },
});

export const { setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
