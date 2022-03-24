import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = {value: ['Magazines', 'Brochures', 'Food Packs', 'Calendars', 'Fliers', 'Others']}
export const usersSlice = createSlice({
    name: "products",
    initialState: initialStateValue,
    reducers: {
        addUser: (state, action) =>{
            let newProduct = action.payload;
            state.value = [...state.value, newProduct]
        }
    }
});

export const {addUser} = usersSlice.actions;

export default usersSlice.reducer;