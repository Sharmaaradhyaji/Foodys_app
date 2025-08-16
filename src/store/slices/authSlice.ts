import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { AuthState, UserData } from '../../types';
import { api } from '../../api/axiosConfig';

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/getUser');
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || 'Failed to fetch user',
      );
    }
  },
);

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData: UserData, { rejectWithValue }) => {
    try {
      const response = await api.post('/register', userData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Signup failed');
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    credentials: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post('/login', credentials);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser', 
  async (_, { rejectWithValue }) => {
  try {
      await api.post('/logout');
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Logout failed');
    }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    setToken: (state, action: { payload: string }) => {
      state.token = action.payload;
      state.isLoggedIn = !!action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload.user || null;
        state.token = action.payload.token || null;
        state.isLoggedIn = !!action.payload.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.accessToken || null;
        state.isLoggedIn = !!action.payload.accessToken;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, () => initialState)
      .addMatcher(isPending(signupUser, loginUser, fetchUser), state => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        isRejected(signupUser, loginUser, fetchUser),
        (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        },
      );
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
