import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from '@/utils/productSlice';
import userReducer from '@/utils/authSlice';
import creatorReducer from '@/utils/creatorSlice';
import cartReducer from '@/utils/cartSlice';
import communityReducer from '@/utils/communitySlice';
import loginTypeReducer from '@/utils/loginTypeSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  middleware: [thunk],
};

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  cart: cartReducer,
  community: communityReducer,
  creator: creatorReducer,
  loginType: loginTypeReducer, // Add the loginType reducer here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
