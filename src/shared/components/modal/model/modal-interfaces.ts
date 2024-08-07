import { ReactElement } from 'react';
import { ModalProps } from '@mui/joy';

import { ModalTypeBase } from '@/shared/enum';

export interface FuturAnimatedModalProps extends Omit<ModalProps, 'open' | 'onClose'> {
  modalOpen: boolean | undefined;
  children: ReactElement;
  onClose: () => void;
  dialogTitle?: string;
}

interface ModalInfo {
  isOpen: boolean;
}

export interface ModalStates {
  address: ModalInfo;
}

interface ModalActions {
  openModal: (modalType: ModalTypeBase) => void;
  closeModal: (modalType: ModalTypeBase) => void;
}

export interface ModalStoreInterface extends ModalStates {
  actions: ModalActions;
}
