// src/utils/communitySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/Store/store';
import { communityCardsData } from '@/constants/data';

interface CommunityCardData {
    id: number;
    title: string;
    members: string;
    img_url: string;
}

interface CommunityState {
    communities: CommunityCardData[];
    filteredCommunities: CommunityCardData[];
}

const initialState: CommunityState = {
    communities: Object.values(communityCardsData),
    filteredCommunities: [],
};

const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.filteredCommunities = state.communities.filter((community) =>
                community.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    },
});

export const { setSearchTerm } = communitySlice.actions;

export const selectFilteredCommunities = (state: RootState) => state.community.filteredCommunities;

export default communitySlice.reducer;
