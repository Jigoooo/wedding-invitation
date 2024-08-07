export interface TokenStates {
  jwtToken: string | null;
  refreshToken: string | null;
  deviceToken: string | null;
}

export interface TokenActions {
  handleToken: (key: keyof TokenStates, value: string | null) => void;
  resetToken: () => void;
}

export interface TokenStoreInterface extends TokenStates {
  actions: TokenActions;
}
