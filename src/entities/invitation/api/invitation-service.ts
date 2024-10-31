import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getGuestbooksApi, deleteGuestbookApi, registerGuestbookApi } from './invitaion-api.ts';
import { GET_GUESTBOOK } from './invitation-query-key.ts';
import {
  PDeleteGuestbook,
  PRegisterGuestbook,
} from '@/entities/invitation/model/invitation-type.ts';
import { showSnackBar } from '@/shared/components';

export function useFetchGuestbook() {
  return useQuery({
    queryKey: [GET_GUESTBOOK],
    queryFn: () => getGuestbooksApi(),
  });
}

export function useRegisterGuestbook(onSuccess: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PRegisterGuestbook) => registerGuestbookApi(params),
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_GUESTBOOK],
      });
      onSuccess();
      showSnackBar({
        message: '전송완료',
      });
    },
    onError: () => {},
    onSettled: () => {},
  });
}

export function useDeleteGuestbook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PDeleteGuestbook) => deleteGuestbookApi(params),
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_GUESTBOOK],
      });
    },
    onError: () => {},
    onSettled: () => {},
  });
}
