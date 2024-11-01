import axios from 'axios';

import { PROXY_CONVERT_URL_PREFIX } from '@/shared/constants';

export const customedAxios = ({ isMock = false }: { isMock?: boolean } = {}) => {
  return axios.create({
    baseURL: isMock && import.meta.env.DEV ? '' : PROXY_CONVERT_URL_PREFIX,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      accept: 'application/json,',
    },
    responseType: 'json',
    validateStatus: function (status) {
      switch (status) {
        case 200:
          return true;
        case 201:
          return true;
        case 400:
          return true;
        case 401:
          return true;
        case 404:
          return true;
        default:
          return false;
      }
    },
    timeout: 100000,
    timeoutErrorMessage: '요청시간이 초과되었습니다.',
  });
};
