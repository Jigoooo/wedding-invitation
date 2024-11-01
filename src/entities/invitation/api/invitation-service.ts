import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  getGuestbooksApi,
  deleteGuestbookApi,
  registerGuestbookApi,
  verifyGuestbookPasswordApi,
} from './invitaion-api.ts';
import { GET_GUESTBOOK } from './invitation-query-key.ts';
import {
  PDeleteGuestbook,
  PRegisterGuestbook,
  PVerifyGuestbookPassword,
} from '@/entities/invitation/model/invitation-type.ts';
import { showSnackBar } from '@/shared/components';

export function useFetchGuestbook() {
  return useQuery({
    queryKey: [GET_GUESTBOOK],
    queryFn: () => getGuestbooksApi(),
  });
}

export function useRegisterGuestbook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PRegisterGuestbook) => registerGuestbookApi(params),
    onMutate: () => {},
    onSuccess: () => {
      showSnackBar({
        message: '저장되었습니다.',
      });
      queryClient.invalidateQueries({
        queryKey: [GET_GUESTBOOK],
      });
    },
    onError: () => {},
    onSettled: () => {},
  });
}

export function useVerifyGuestbookPassword() {
  return useMutation({
    mutationFn: (params: PVerifyGuestbookPassword) => verifyGuestbookPasswordApi(params),
  });
}

export function useDeleteGuestbook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PDeleteGuestbook) => deleteGuestbookApi(params),
    onMutate: () => {},
    onSuccess: () => {
      showSnackBar({
        message: '삭제되었습니다.',
      });
      queryClient.invalidateQueries({
        queryKey: [GET_GUESTBOOK],
      });
    },
    onError: () => {},
    onSettled: () => {},
  });
}
