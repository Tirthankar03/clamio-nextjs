'use client';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/utils/productSlice';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    }

    return (
        <div className="relative w-11/12 mx-auto md:w-5/6">
            <input
                type="text"
                placeholder="Search Creator"
                className="w-full py-2 md:py-3 pl-10 pr-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                onChange={handleSearch}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
    );
};

export default SearchBar;
