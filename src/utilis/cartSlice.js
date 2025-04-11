import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage initially
const storedCart = localStorage.getItem('cartItems');

const initialState = {
  items: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
     
      
        state.items.push({ ...item, quantity: 1 });
      
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    clearCart(state) {
      state.items = [];
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
