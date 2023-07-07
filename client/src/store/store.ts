import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import UserSlice from "./features/userSlice";
import ThemeSlice from "./features/ThemeSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice,
        theme: ThemeSlice
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;