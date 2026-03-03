import { PastaFood } from "@/data/pastalist"
import { PizzaFood } from "@/data/pizzalist"
import { createSlice } from "@reduxjs/toolkit"

export interface CartItem extends PizzaFood {
    quantity: number
}

export interface CartItem extends PastaFood {
    quantity: number
}

export interface CartState {
    items: CartItem[],
    isOpen: boolean
}

// ==================================
const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existing = state.items.find((item) => item.id === action.payload.id)

            if (existing) {
                existing.quantity += 1
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        }
    }
})

export const {addToCart} = cartSlice.actions