import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { AuthState, UserData } from '../../types';
import { api } from '../../api/axiosConfig';
import { AUTH_MESSAGES } from '../../globals/constants/constants';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';
import * as Keychain from 'react-native-keychain';

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
  isInitialized: false,
};

export const saveTokens = async (accessToken: string, refreshToken: string) => {
  await Keychain.setGenericPassword(accessToken, refreshToken, {
    service: 'authTokens',
  });
};

export const loadToken = createAsyncThunk(
  'auth/loadToken',
  async (_, { rejectWithValue }) => {
    try {
      const creds = await Keychain.getGenericPassword({service: 'authTokens'})
      
      if(creds){
        return { accessToken: creds.username, refreshToken: creds.password }
      }
      return { accessToken: null, refreshToken: null };
    } catch {
      return rejectWithValue(AUTH_MESSAGES.FAILED_LOAD_TOKEN);
    }
  },
);

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/getUser');
      return res.data.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(
        error.response?.data?.message || AUTH_MESSAGES.FAILED_FETCH_USER,
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
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(
        error.response?.data?.message || AUTH_MESSAGES.SIGNUP_FAILED,
      );
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
      const { accessToken, refreshToken } = response.data.data;
      
      if (accessToken && refreshToken) {
        await saveTokens(accessToken, refreshToken);
      }
      
      return response.data.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(
        error.response?.data?.message || AUTH_MESSAGES.LOGIN_FAILED,
      );
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await api.post('/logout');
      await Keychain.resetGenericPassword({ service: 'authTokens' });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(
        error.response?.data?.message || AUTH_MESSAGES.LOGOUT_FAILED,
      );
    }
  },
);

export const clearAuth = createAsyncThunk(
  'auth/clearAuth',
  async (_, { rejectWithValue }) => {
    try {
      await Keychain.resetGenericPassword({ service: 'authTokens' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(AUTH_MESSAGES.LOGOUT_FAILED);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.loading = false;
        state.error = null;
      })

      .addCase(loadToken.fulfilled, (state, action) => {
        if (action.payload.accessToken) {
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
        }
        state.isInitialized = true;
      })

      .addCase(loadToken.rejected, state => {
        state.isInitialized = true;
        state.loading = false;
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addCase(logoutUser.fulfilled, state => {
        Object.assign(state, { ...initialState, isInitialized: true });
      })

      .addCase(clearAuth.fulfilled, state => {
        Object.assign(state, { ...initialState, isInitialized: true });
      })

      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.user = null;
      })
      .addCase(clearAuth.rejected, (state, action) => {
        state.error = action.payload as string;
        Toast.show({
          type: 'error',
          text1: 'Logout failed',
          text2: state.error,
        });
      })
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

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
