import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/constants";
import axios from "../api/axios";
import { ICredentials } from "../types/types";

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

export const fetchLogIn = createAsyncThunk(
    "user/fetchLogIn",
    async (credentials: ICredentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/auth/signin`, credentials);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchGetUserData = createAsyncThunk(
    "user/fetchGetUserData",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/auth/signin`);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoggedIn(state) {
            state.isLoggedIn = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogIn.pending, (state, action) => {
                state.isAuthPending = true;
            })
            .addCase(fetchLogIn.rejected, (state) => {
                state.isAuthPending = false;
                state.isLoggedIn = false;
            })
            .addCase(fetchLogIn.fulfilled, (state, action) => {
                state.isAuthPending = false;
                state.isLoggedIn = true;
                state.user.name = action.payload.username;
            });
    },
});

export const { setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
