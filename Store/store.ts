// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@/utils/productSlice';
import userReducer from '@/utils/authSlice';
import cartReducer from '@/utils/cartSlice';
import communityReducer from '@/utils/communitySlice'; // Import the community slice

export const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer,
        cart: cartReducer,
        community: communityReducer, // Add the community reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
