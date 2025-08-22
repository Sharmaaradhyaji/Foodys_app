import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Food, FoodState, NewFood } from '../../types';
import { api } from '../../api/axiosConfig';
import { AxiosError } from 'axios';

const initialState: FoodState = {
  foods: [],
  loading: false,
  error: null,
};

export const showFoods = createAsyncThunk(
  'food/showAllFoods',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/foods');
      return res.data.data as Food[];
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.message);
    }
  },
);

export const addFood = createAsyncThunk(
  'food/addFood',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const res = await api.post('/addFood', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data.data as Food;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.message);
    }
  }
);

export const rateFood = createAsyncThunk(
  'food/rateFood',
  async (
    { foodId, value }: { foodId: string; value: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await api.post(`/foods/${foodId}/rate`, { value });
      return res.data.data as Food;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.message);
    }
  },
);

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(showFoods.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showFoods.fulfilled, (state, action: PayloadAction<Food[]>) => {
        state.loading = false;
        state.foods = action.payload;
      })
      .addCase(showFoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addFood.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFood.fulfilled, (state, action: PayloadAction<Food>) => {
        state.loading = false;
        state.foods.push(action.payload);
      })
      .addCase(addFood.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(rateFood.fulfilled, (state, action: PayloadAction<Food>) => {
        const idx = state.foods.findIndex(food => food._id === action.payload._id);
        if (idx !== -1) state.foods[idx] = action.payload;
      })
  },
});

export default foodSlice.reducer;
