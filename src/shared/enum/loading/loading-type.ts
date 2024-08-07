export const LoadingType = {
  SYNC_LOADING: 'syncLoading',
  MOON_LOADING: 'moonLoading',
} as const;

export type LoadingTypeBase = (typeof LoadingType)[keyof typeof LoadingType];
