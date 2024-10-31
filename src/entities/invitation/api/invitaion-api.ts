import { customedAxios, setupInterceptors } from '@/shared/api';
import { Adapter, ApiResponseType, ResponseAdapter } from '@/shared/class';
import { RGuestbook } from '@/entities/invitation';
import { GUESTBOOK } from '@/shared/constants';
import { PDeleteGuestbook } from '@/entities/invitation/model/invitation-type.ts';

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
