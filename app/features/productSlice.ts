// src/Store/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/Store/store';

interface Product {
    id: number;
    productName: string;
    name: string;
    stars: string;
    price: string;
    imageUrl: string;
}

interface ProductState {
    searchQuery: string;
}

const initialState: ProductState = {
    searchQuery: '',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { setSearchQuery } = productSlice.actions;
export const selectSearchQuery = (state: RootState) => state.product.searchQuery;
export default productSlice.reducer;
