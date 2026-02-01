import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name : "cart",
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            let existItem = state.find((item) => item.id === action.payload.id)
            if(existItem){
                return state.map((item) => (item.id === action.payload.id? {...item, qty: item.qty+1, days: item.days+1, persons: item.persons+1} : {...item}))
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
        IncreaseDays: (state, action) => {
            return state.map((item) => (item.id === action.payload? {...item, days: item.days+1} : {...item}))
        },
        DecreaseDays: (state, action) => {
            return state.map((item) => (item.id === action.payload? {...item, days: item.days-1} : {...item}))
        },
        IncreasePersons: (state, action) => {
            return state.map((item) => (item.id === action.payload? {...item, persons: item.persons+1} : {...item}))
        },
        DecreasePersons: (state, action) => {
            return state.map((item) => (item.id === action.payload? {...item, persons: item.persons-1} : {...item}))
        },
        RemoveAllOrder: (state, action) => {
            return [];
        }
    }
})

export const {AddItem, RemoveItem, IncreaseQty, DecreaseQty, IncreaseDays, DecreaseDays, IncreasePersons, DecreasePersons, RemoveAllOrder} = cartslice.actions;

export default cartslice.reducer;