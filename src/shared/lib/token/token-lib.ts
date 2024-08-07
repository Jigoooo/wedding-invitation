import { getSecureLocalStorage, removeSecureLocalStorage, setSecureLocalStorage } from '@/shared/lib';

export const TOKEN_KEY = 'token';

export const setToken = (tokenValue: { token: string; refreshToken: string }) => {
  setSecureLocalStorage({
    key: TOKEN_KEY,
    value: JSON.stringify(tokenValue),
  });
};

export const getToken = () => {
  return getSecureLocalStorage(TOKEN_KEY);
};

export const removeToken = () => {
  removeSecureLocalStorage(TOKEN_KEY);
};
