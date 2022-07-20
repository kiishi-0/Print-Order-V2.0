import { createSlice } from "@reduxjs/toolkit";

// orders.filter(or => or.id !== order.id)s
const initialStateValue = {value: [],}
export const ordersSlice = createSlice({
    name: "orders",
    initialState: initialStateValue,
    reducers: {
        addOrder: (state, action) =>{
            let newOrder = action.payload;
            state.value = [...state.value, newOrder]
        },
        removeOrder: (state, action) =>{
            let oldOrderID = action.payload;
            let newValue = state.value;

            let submitted = state.value[oldOrderID-1]
            localStorage.setItem(`order${submitted.id}`, JSON.stringify(submitted));
            var retrievedObject = localStorage.getItem(`order${submitted.id}`);
            
            state.value = newValue.filter(order => order.id !== oldOrderID);;
            
            console.log(JSON.parse(retrievedObject));
        }
    }
});

export const {addOrder, removeOrder} = ordersSlice.actions;

export default ordersSlice.reducer;