import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '../../types';
import { darkTheme, lightTheme } from '../../globals/globals';

const initialState: ThemeState = {
  isDay: true,
  colors: lightTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isDay = !state.isDay;
      state.colors = state.isDay ? lightTheme : darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
