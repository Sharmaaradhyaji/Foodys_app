import axios, { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';
import * as Keychain from 'react-native-keychain';
import { store } from '../store';
import { clearAuth } from '../store/slices/authSlice';
import { navigate } from '../navigation/navigationService';
import { axiosConfigText } from '../globals/constants/constants';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3000/api',
  withCredentials: true,
});

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

const getTokens = async () => {
  const creds = await Keychain.getGenericPassword({ service: 'authTokens' });
  if (creds)
    return { accessToken: creds.username, refreshToken: creds.password };
  return { accessToken: null, refreshToken: null };
};

api.interceptors.request.use(
  async config => {
    const { accessToken } = await getTokens();
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  async error => {
    if (!error.config) {
      Toast.show({
        type: 'error',
        text1: 'Network error',
        text2: error.message,
      });
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    if (originalRequest._retry) return Promise.reject(error);

    if (error.response?.status === 401 || error.response?.status === 403) {
      originalRequest._retry = true;

      const { refreshToken } = await getTokens();

      if (!refreshToken) {
        await Keychain.resetGenericPassword({ service: 'authTokens' });
        store.dispatch(clearAuth());
        navigate('Login');

        return Promise.reject(new Error(axiosConfigText.noRefreshToken));
      }

      try {
        const response = await axios.post(
          'http://10.0.2.2:3000/api/refreshToken',
          { refreshToken },
        );

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          response.data.data;

        if (!newAccessToken) throw new Error(axiosConfigText.noAcessReturned);

        await Keychain.setGenericPassword(
          newAccessToken,
          newRefreshToken ?? '',
          {
            service: 'authTokens',
          },
        );

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError: unknown) {
        if (isAxiosError(refreshError)) {
          if (
            refreshError.response?.status === 401 ||
            refreshError.response?.status === 403
          ) {
            await Keychain.resetGenericPassword({ service: 'authTokens' });
            store.dispatch(clearAuth());
            navigate('Login');

            Toast.show({
              type: 'error',
              text1: axiosConfigText.sessionExpired,
              text2: axiosConfigText.sessionExpired,
            });
          }
          return Promise.reject(refreshError);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Unexpected error',
            text2: String(refreshError),
          });
          return Promise.reject(refreshError);
        }
      }
    }

    if (!error.response) {
      Toast.show({
        type: 'error',
        text1: 'Network error',
        text2: error.message,
      });
    }

    return Promise.reject(error);
  },
);

export default api;
