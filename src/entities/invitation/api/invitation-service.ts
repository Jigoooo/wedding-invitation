import { useQuery } from '@tanstack/react-query';

import { getGuestbookApi } from '@/entities/invitation';
import { GET_GUESTBOOK } from './invitation-query-key.ts';

export function useFetchGuestbook() {
  return useQuery({
    queryKey: [GET_GUESTBOOK],
    queryFn: () => getGuestbookApi(),
  });
}
