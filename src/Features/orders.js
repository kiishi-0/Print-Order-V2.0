import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = {value: [],}
export const ordersSlice = createSlice({
    name: "orders",
    initialState: initialStateValue,
    reducers: {
        addOrder: (state, action) =>{
            let newOrder = action.payload;
            state.value = [...state.value, newOrder]
        }
    }
});

export const {addOrder} = ordersSlice.actions;

export default ordersSlice.reducer;