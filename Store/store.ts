// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@/utils/productSlice';
import userReducer from '@/utils/authSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
