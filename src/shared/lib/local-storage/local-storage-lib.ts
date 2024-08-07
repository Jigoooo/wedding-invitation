import secureLocalStorage from 'react-secure-storage';

export const setSecureLocalStorage = ({ key, value }: { key: string; value: string | object | number | boolean }) => {
  try {
    secureLocalStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getSecureLocalStorage = (key: string) => {
  try {
    return secureLocalStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const removeSecureLocalStorage = (key: string) => {
  try {
    secureLocalStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const clearSecureLocalStorage = () => {
  try {
    secureLocalStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
