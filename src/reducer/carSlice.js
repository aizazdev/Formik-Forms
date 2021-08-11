import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: 0, item: "item1", detail: "this is item for you"}    
];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_TO_CART: (state)=> {
            console.log("add", state);
        },
        REMOVE_FROM_CART: (state)=> {
            console.log("remove", state);
        },
    }
});

export const {ADD_TO_CART, REMOVE_FROM_CART} = cartSlice.actions;
export default cartSlice.reducer;