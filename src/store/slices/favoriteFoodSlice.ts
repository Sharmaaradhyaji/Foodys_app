import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api/axiosConfig';
import { FavoriteFoodState, Food } from '../../types';

const initialState: FavoriteFoodState = {
  favorites: [],
  loading: false,
  error: null,
};

export const fetchFavorites = createAsyncThunk<Food[]>(
  'favorites/fetch',
  async () => {
    const { data } = await api.get('/favorites');
    return data.data as Food[];
  },
);

export const addFavoriteFood = createAsyncThunk<Food[], string>(
  'favorites/add',
  async foodId => {
    const { data } = await api.post(`/favorites/${foodId}`);
    return data.data as Food[];
  },
);

export const removeFavoriteFood = createAsyncThunk<Food[], string>(
  'favorites/remove',
  async foodId => {
    const { data } = await api.delete(`/favorites/${foodId}`);
    return data.data as Food[];
  },
);

const favoriteFoodSlice = createSlice({
  name: 'favoriteFood',
  initialState,
  reducers: {
    toggleFavoriteLocal: (state, action: PayloadAction<Food>) => {
      state.favorites = state.favorites.filter(
        food => food._id !== action.payload._id,
      );
      state.favorites.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFavorites.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ?? 'Failed to load favorites';
      })
      .addCase(addFavoriteFood.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(removeFavoriteFood.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const { toggleFavoriteLocal } = favoriteFoodSlice.actions;
export default favoriteFoodSlice.reducer;
