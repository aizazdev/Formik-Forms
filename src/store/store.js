import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reducer/carSlice';
export const store = configureStore({
  reducer: {
      cart: cartReducer
  },
})