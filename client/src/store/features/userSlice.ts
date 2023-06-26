import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/UserType";

// type User = {
//     avatar: string | null,
//     bio: string | null,
//     cover_image: string | null,
//     created_at: string | Date | null,
//     dob: string | Date | null,
//     email: string | null,
//     id: string | null,
//     location: string | null,
//     username: string | null,
//     website: string | null
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