import { customedAxios, setupInterceptors } from '@/shared/api';
import { Adapter, ApiResponseType, ResponseAdapter } from '@/shared/class';
import { RGuestbook } from '@/entities/invitation';
import { GUESTBOOK } from '@/shared/constants';

export const getGuestbookApi = async () => {
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
