// src/utils/loginTypeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const loginTypeSlice = createSlice({
  name: 'loginType',
  initialState: {
    isCreatorLogin: false,
  },
  reducers: {
    toggleLoginType: (state) => {
      state.isCreatorLogin = !state.isCreatorLogin;
    },
  },
});

export const { toggleLoginType } = loginTypeSlice.actions;
export default loginTypeSlice.reducer;
