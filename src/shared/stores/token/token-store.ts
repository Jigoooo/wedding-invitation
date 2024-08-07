import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

import { TokenStates, TokenStoreInterface } from './token-interfaces.ts';
import { decrypt, encrypt } from '@/shared/lib';

const tokenMiddleWare = (store: StateCreator<TokenStoreInterface>) =>
  persist(store, {
    name: 'token-storage',
    merge: (state, newState) => {
      const stateCopy = typeof state === 'object' ? { ...state } : state;
      return { ...stateCopy, ...newState };
    },
  });

const tokenInitialStates: TokenStates = {
  jwtToken: null,
  refreshToken: null,
  deviceToken: null,
};

export const useTokenStore = create<TokenStoreInterface>()(
  tokenMiddleWare((setState) => {
    return {
      ...tokenInitialStates,
      actions: {
        handleToken: (key: keyof TokenStates, value: string | null) => {
          setState((state) => ({ ...state, [key]: encrypt(value) }));
        },
        resetToken: () => {
          setState((state) => ({ ...state, ...tokenInitialStates }));
        },
      },
    };
  }),
);

export let localJwtTokenLocal = '';
export let localRefreshTokenLocal = '';
export const useDeviceToken = () => useTokenStore((state) => decrypt(state.deviceToken));
export const tokenActions = useTokenStore.getState().actions;

export const unSubscribeTokenStore = useTokenStore.subscribe((state) => {
  localJwtTokenLocal = decrypt(state.jwtToken) ?? '';
  localRefreshTokenLocal = decrypt(state.refreshToken) ?? '';
});
