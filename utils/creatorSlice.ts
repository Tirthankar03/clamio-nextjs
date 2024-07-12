import { createSlice } from "@reduxjs/toolkit";


const creatorSlice = createSlice({
    name: 'creator',
    initialState: {
        isCreatorLoggedIn: false,
    },

    reducers: {
        setIsCreatorLoggedIn : (state,action)=>{
            state.isCreatorLoggedIn = action.payload;
        },
    }
});

export const {setIsCreatorLoggedIn} = creatorSlice.actions;
export default creatorSlice.reducer;