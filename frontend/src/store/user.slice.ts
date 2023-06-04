import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICredentials } from "../types/types";
import { axiosGeneric } from "../api/axios";

interface IInitialState {
    isAuthPending: boolean;
    isLoggedIn: boolean;
    user: {
        name: string;
        accessToken: string;
    };
}

interface ILoginData {
    user: any;
    accessToken: string;
}

const initialState: IInitialState = {
    isAuthPending: false,
    isLoggedIn: false,
    user: {
        name: "",
        accessToken: "",
    },
};

export const fetchLogIn = createAsyncThunk(
    "user/fetchLogIn",
    async (credentials: ICredentials, { rejectWithValue }) => {
        try {
            const { data } = await axiosGeneric.post<ILoginData>(
                `/auth/signin`,
                credentials
            );
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
            const { data } = await axiosGeneric.get(`/auth/signin`);
            return data.user;
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
        setToken(state, action) {
            state.user.accessToken = action.payload.accessToken;
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
                state.user.name = action.payload.user.name;
                state.user.accessToken = action.payload.accessToken;
            });
    },
});

export const { setLoggedIn, setToken } = userSlice.actions;
export default userSlice.reducer;
