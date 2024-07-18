// src/utils/productSlice.ts
import { RootState } from '@/Store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
