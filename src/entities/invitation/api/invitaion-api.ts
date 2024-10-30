import { customedAxios, setupInterceptors } from '@/shared/api';
import { Adapter, ApiResponseType, ResponseAdapter } from '@/shared/class';
import { RGuestbook } from '@/entities/invitation';
import { GUESTBOOK } from '@/shared/constants';

export const getGuestbookApi = async (): Promise<ApiResponseType<RGuestbook[] | null>> => {
  try {
    const response = await setupInterceptors(customedAxios()).get(GUESTBOOK);
    console.log(response);
    return Adapter.from(response.data).to((item: ApiResponseType<RGuestbook[]>) =>
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
