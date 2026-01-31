import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name : "cart",
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            let existItem = state.find((item) => item.id === action.payload.id)
            if(existItem){
                return state.map((item) => (item.id === action.payload.id? {...item, qty: item.qty+1} : {...item}))
            }else{
                state.push(action.payload)
            }
        },
        RemoveItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        IncreaseQty: (state, action) => {
            return state.map((item) => (item.id === action.payload? {...item, qty: item.qty+1} : {...item}))
        },
        DecreaseQty: (state, action) => {
            return state.map((item) => (item.id === action.payload? {...item, qty: item.qty-1} : {...item}))
        },
        RemoveAllOrder: (state, action) => {
            return [];
        }
    }
})

export const {AddItem, RemoveItem, IncreaseQty, DecreaseQty, RemoveAllOrder} = cartslice.actions;

export default cartslice.reducer;