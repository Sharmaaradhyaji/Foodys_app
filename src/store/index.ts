import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import themeReducer from './slices/themeSlice'
import foodReducer from './slices/foodSlice'
import favoriteFoodReducer from './slices/favoriteFoodSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    food: foodReducer,
    favoriteFood: favoriteFoodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
