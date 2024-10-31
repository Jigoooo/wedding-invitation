import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getGuestbooksApi, deleteGuestbookApi } from './invitaion-api.ts';
import { GET_GUESTBOOK } from './invitation-query-key.ts';
import { PDeleteGuestbook } from '@/entities/invitation/model/invitation-type.ts';

export function useFetchGuestbook() {
  return useQuery({
    queryKey: [GET_GUESTBOOK],
    queryFn: () => getGuestbooksApi(),
  });
}

export function useDeleteGuestbook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PDeleteGuestbook) => deleteGuestbookApi(data),
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
