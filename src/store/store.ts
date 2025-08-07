import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'
import themeReducer from './themeSlice'
import foodReducer from './foodSlice'
import favoriteFoodReducer from './favoriteFood'

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
