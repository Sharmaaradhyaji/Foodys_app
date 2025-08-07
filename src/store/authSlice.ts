import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../types';

interface AuthState extends UserData {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  name: '',
  place: '',
  gender: '',
  email: '',
  number: '',
  password: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<UserData>) => {
      return { ...state, ...action.payload, isLoggedIn: true };
    },
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>,
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    logout: state => {
      Object.assign(state, initialState);
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
