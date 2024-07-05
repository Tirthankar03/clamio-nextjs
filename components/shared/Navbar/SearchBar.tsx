// src/components/shared/SearchBar.tsx
'use client';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/utils/productSlice';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    }

    return (
        <input
            type="text"
            placeholder="SEARCH CREATOR"
            className="w-11/12 mx-auto py-2 md:py-4 px-4 rounded-lg text-black border border-black"
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
