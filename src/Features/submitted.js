import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = {value: [],}
export const submittedSlice = createSlice({
    name: "submitted",
    initialState: initialStateValue,
    reducers: {
        addOrder: (state, action) =>{
            let newOrder = action.payload;
            state.value = [...state.value, newOrder]
        }
    }
});

export const {addOrder} = submittedSlice.actions;

export default submittedSlice.reducer;