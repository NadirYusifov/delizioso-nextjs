import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Foods } from "@/data/menu";

export interface CartItem extends Foods {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

// ==================================
const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        if(existing.quantity < 10) existing.quantity += 1 ;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
        return;
      }

      const itemFood = state.items.find((item) => item.id === id);
      if (itemFood) itemFood.quantity = quantity;
    },

    incrementQuantity: (state, action) => {
      const itemFood = state.items.find((item) => item.id === action.payload);
       
      if (!itemFood) return
      
      if (itemFood.quantity < 10) itemFood.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const itemFood = state.items.find((item) => item.id === action.payload);

      if (!itemFood) return;

      if (itemFood.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        itemFood.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
    setCartItems: (state, action) => {
      state.items = action.payload || [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  setCartItems,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectTotalItems = createSelector(selectCartItems, (items) =>
  items.reduce((sum, i) => sum + i.quantity, 0),
);

export const selectTotalPrice = createSelector(selectCartItems, (items) =>
  items.reduce((sum, i) => sum + i.price * i.quantity, 0),
);

export const selectIsInCart = (productId: number) => {
  createSelector(selectCartItems, (items) =>
    items.some((i) => i.id === productId),
  );
};

export const selectCartItemById = (productId: number) => {
  createSelector(selectCartItems, (items) =>
    items.find((i) => i.id === productId),
  );
};

export default cartSlice.reducer;
