export const ModalType = {
  ADDRESS: 'address',
} as const;

export type ModalTypeBase = (typeof ModalType)[keyof typeof ModalType];
