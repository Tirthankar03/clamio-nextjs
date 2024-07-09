// src/components/shared/community-id/useCommunitySearch.ts
'use client'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectFilteredCommunities } from '@/utils/communitySlice'; // Ensure correct import path
import { RootState } from '@/Store/store';

const useCommunitySearch = () => {
    const [searchTerm, setSearchTermLocal] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchTerm(searchTerm));
    }, [dispatch, searchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTermLocal(e.target.value);
    };

    const filteredCommunities = useSelector((state: RootState) => selectFilteredCommunities(state));

    return {
        searchTerm,
        handleSearchChange,
        filteredCommunities,
    };
};

export default useCommunitySearch;
