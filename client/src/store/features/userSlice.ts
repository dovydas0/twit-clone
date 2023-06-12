import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
    avatar: string | null,
    bio: string | null,
    cover_image: string | null,
    created_at: string | Date | null,
    dob: string | Date | null,
    email: string | null,
    id: string | null,
    location: string | null,
    username: string | null,
    website: string | null
}

// const initialState: User = {
//     avatar: null,
//     bio: null,
//     cover_image: null,
//     created_at: null,
//     dob: null,
//     email: null,
//     id: null,
//     location: null,
//     username: null,
//     website: null
// }

export const UserSlice = createSlice({
    name: "user",
    initialState: {} as User,
    reducers: {
        setUser:(state, action: PayloadAction<User>) => {
            Object.assign(state, action.payload);          
        }
    }
});

export default UserSlice.reducer;
export const { setUser } = UserSlice.actions;