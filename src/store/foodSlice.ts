import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import rawFoods from '../utils/fooddata/data.json'

export interface Food {
  id: number;
  food_name: string;
  image_url: string;
  rating: number;
  ingredients: string[];
  steps_to_prepare: string[];
  food_type: 'Veg' | 'Non-Veg';
}

interface FoodState {
  foods: Food[];
}

const initialState: FoodState = {
  foods: rawFoods.map(item => ({
    ...item,
    food_type: item.food_type as 'Veg' | 'Non-Veg',
  })),
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<Food>) => {
      state.foods.push(action.payload);
    },
  },
});

export const { addFood } = foodSlice.actions;
export default foodSlice.reducer;
