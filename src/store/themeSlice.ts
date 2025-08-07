import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../globals/globals';

interface ThemeState {
  isDay: boolean;
  colors: typeof lightTheme;
}

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
