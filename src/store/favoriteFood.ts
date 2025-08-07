// src/store/favoriteFoodSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Food } from './foodSlice';

interface FavoriteFoodState {
  favorites: Food[];
}

const initialState: FavoriteFoodState = {
  favorites: [],
};

const favoriteFoodSlice = createSlice({
  name: 'favoriteFood',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Food>) => {
      if (!state.favorites.find(f => f.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(f => f.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteFoodSlice.actions;
export default favoriteFoodSlice.reducer;
