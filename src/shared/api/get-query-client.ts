import { QueryClient } from '@tanstack/react-query';

export function getQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        throwOnError: false,
        refetchOnWindowFocus: false,
      },
    },
  });
}