import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Food, FoodState, NewFood } from '../../types';
import { api } from '../../api/axiosConfig';
import { AxiosError } from 'axios';

const initialState: FoodState = {
  foods: [],
  loading: false,
  loadingMore: false,
  error: null,
  page: 1,
  limit: 5,
  total: 0,
  hasMore: true,
};

interface PaginatedFoodResponse {
  data: Food[];
  page: number;
  limit: number;
  total: number;
}

export const showFoods = createAsyncThunk(
  'food/fetchFoods',
  async (
    {
      page = 1,
      limit = 5,
      foodType,
      category,
      search,
    }: {
      page?: number;
      limit?: number;
      foodType?: string;
      category?: string;
      search?: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });
      if (foodType) params.append('foodType', foodType);
      if (category) params.append('category', category);
      if (search) params.append('search', search);

      const res = await api.get<PaginatedFoodResponse>(
        `/foods?${params.toString()}`,
      );
      return res.data;
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
  },
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
      .addCase(showFoods.pending, (state, action) => {
        if (action.meta.arg.page === 1) state.loading = true;
        else state.loadingMore = true;
        state.error = null;
      })
      .addCase(
        showFoods.fulfilled,
        (state, action: PayloadAction<PaginatedFoodResponse>) => {
          const { data, page, limit, total } = action.payload;

          const combinedFoods = page === 1 ? data : [...state.foods, ...data];

          const uniqueMap = new Map<string, Food>();
          combinedFoods.forEach(food => uniqueMap.set(food._id, food));
          state.foods = Array.from(uniqueMap.values());

          state.page = page;
          state.limit = limit;
          state.total = total;
          state.hasMore = state.foods.length < total;

          state.loading = false;
          state.loadingMore = false;
        },
      )
      .addCase(showFoods.rejected, (state, action) => {
        state.loading = false;
        state.loadingMore = false;
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
        const idx = state.foods.findIndex(
          food => food._id === action.payload._id,
        );
        if (idx !== -1) state.foods[idx] = action.payload;
      });
  },
});

export default foodSlice.reducer;
