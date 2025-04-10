import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import CartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: CartReducer,
  },
});

export default store;
