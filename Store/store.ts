// src/store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from '@/utils/productSlice';
import userReducer from '@/utils/authSlice';
import cartReducer from '@/utils/cartSlice';
import communityReducer from '@/utils/communitySlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import middleware from '@/middleware';
import {thunk} from 'redux-thunk';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    middleware: [thunk]
};



const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    community: communityReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
