import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appealFormSlice from "./appealForm.slice";
import appealsSlice from "./appeals.slice";

export const store = configureStore({
    reducer: { appealForm: appealFormSlice, appeals: appealsSlice },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
