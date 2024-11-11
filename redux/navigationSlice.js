// src/redux/navigationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    screen: 'Screen1',
  },
  reducers: {
    goToScreen2: (state) => {
      state.screen = 'Screen2';
    },
  },
});

export const { goToScreen2 } = navigationSlice.actions;

export default navigationSlice.reducer;
