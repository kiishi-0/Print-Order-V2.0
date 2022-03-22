import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = {value: [],}
export const usersSlice = createSlice({
    name: "users",
    initialState: initialStateValue,
    reducers: {
        addUser: (state, action) =>{
            let newUser = action.payload;
            state.value = [...state.value, newUser]
        }
    }
});

export const {addUser} = usersSlice.actions;

export default usersSlice.reducer;