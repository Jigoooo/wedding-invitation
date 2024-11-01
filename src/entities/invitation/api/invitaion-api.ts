import { customedAxios, setupInterceptors } from '@/shared/api';
import { Adapter, ApiResponseType, ResponseAdapter } from '@/shared/class';
import {
  RGuestbook,
  PDeleteGuestbook,
  PRegisterGuestbook,
  PVerifyGuestbookPassword,
} from '@/entities/invitation';
import { GUESTBOOK } from '@/shared/constants';
import { RVerifyGuestbookPassword } from '@/entities/invitation/model/invitation-type.ts';

export const getGuestbooksApi = async () => {
  try {
    const response = await setupInterceptors(customedAxios()).get(GUESTBOOK);
    return Adapter.from(response).to((item: ApiResponseType<RGuestbook[]>) =>
      new ResponseAdapter(item).adapt(),
    );
  } catch (error) {
    console.log(error);
    return {
      code: -1,
      msg: '',
      success: false,
      data: null,
    };
  }
};

export const registerGuestbookApi = async (params: PRegisterGuestbook) => {
  try {
    const response = await setupInterceptors(customedAxios()).post(GUESTBOOK, params);
    return Adapter.from(response).to((item: ApiResponseType<null>) =>
      new ResponseAdapter(item).adapt(),
    );
  } catch (error) {
    console.log(error);
    return {
      code: -1,
      msg: '',
      success: false,
      data: null,
    };
  }
};

export const verifyGuestbookPasswordApi = async (params: PVerifyGuestbookPassword) => {
  try {
    const response = await setupInterceptors(customedAxios()).post(
      `${GUESTBOOK}/${params.userIdx}/verify-password`,
      {
        password: params.password,
      },
    );

    return Adapter.from(response).to((item: ApiResponseType<RVerifyGuestbookPassword>) =>
      new ResponseAdapter(item).adapt(),
    );
  } catch (error) {
    console.log(error);
    return {
      code: -1,
      msg: '',
      success: false,
      data: {
        success: false,
        message: '',
      },
    };
  }
};

export const deleteGuestbookApi = async (params: PDeleteGuestbook) => {
  try {
    const response = await setupInterceptors(customedAxios()).delete(
      `${GUESTBOOK}/${params.userIdx}`,
      {
        data: {
          password: params.password,
        },
      },
    );
    return Adapter.from(response).to((item: ApiResponseType<null>) =>
      new ResponseAdapter(item).adapt(),
    );
  } catch (error) {
    console.log(error);
    return {
      code: -1,
      msg: '',
      success: false,
      data: null,
    };
  }
};
