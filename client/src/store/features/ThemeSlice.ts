import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DarkTheme = {
    dark: boolean;
}


export const ThemeSlice = createSlice({
    name: "user",
    initialState: {dark: false} as DarkTheme,
    reducers: {
        setDark:(state, action: PayloadAction<DarkTheme>) => {
            Object.assign(state, action.payload);          
        }
    }
});

export default ThemeSlice.reducer;
export const { setDark } = ThemeSlice.actions;