import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = {
    state: boolean;
}

const initialState: State = {
    state: false,
}

export const StateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        setState:(state, action: PayloadAction<boolean>) => {
            state.state = action.payload;
        }
    }
});

export default StateSlice.reducer;
export const { setState } = StateSlice.actions;