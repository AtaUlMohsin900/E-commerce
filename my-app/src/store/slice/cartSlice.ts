import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface CounterState {
    items: Array<any>;
    totalAmount: number;
    totalQuantity: number;
    
}

const initialState: CounterState = {
    items: [],
    totalAmount:0,
    totalQuantity:0,
};

export const counterSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, actions:PayloadAction<any>) => {
            console.log(actions);
        },
        removeFromCart: (state, actions: PayloadAction<any>) => {
            console.log(actions);
            
        },
        clearCart: (state) => {
            state=initialState
        },
    },
})
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;