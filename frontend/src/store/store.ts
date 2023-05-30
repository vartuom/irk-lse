import { configureStore } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
    useStore,
} from "react-redux";
import appealFormSlice from "./appealForm.slice";
import appealsSlice from "./appeals.slice";
import userSlice from "./user.slice";
import appealFilterSlice from "./appealFilter.slice";

export const store = configureStore({
    reducer: {
        appealForm: appealFormSlice,
        appeals: appealsSlice,
        user: userSlice,
        appealsFilter: appealFilterSlice,
    },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type AppStore = typeof store;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
