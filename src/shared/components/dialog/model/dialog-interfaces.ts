import { AnyFunction } from '@/shared/types';
import { OverridableStringUnion } from '@mui/types';
import { ColorPaletteProp } from '@mui/joy/styles/types';
import { SnackbarPropsColorOverrides } from '@mui/joy/Snackbar/SnackbarProps';
import { ReactNode } from 'react';

export interface DialogCustomButtons {
  label: string;
  color: OverridableStringUnion<ColorPaletteProp, SnackbarPropsColorOverrides>;
  callback: AnyFunction;
}

export interface DialogInfoStates {
  header?: string;
  contents: ReactNode;
  confirmButtonColor?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
  confirmText?: string;
  cancelText?: string;
  confirmCallback?: AnyFunction;
  cancelCallback?: AnyFunction;
  withCancel?: boolean;
  withCloseButton?: boolean;
  color?: OverridableStringUnion<ColorPaletteProp, SnackbarPropsColorOverrides>;
  buttonNumbers?: number;
  customButtons?: DialogCustomButtons[];
}
export interface DialogStates {
  dialogOpen: boolean;
  dialogInfos: DialogInfoStates;
}

interface DialogActions {
  openDialog: (openDialog: DialogInfoStates) => void;
  openDialogAsync: (openDialog: DialogInfoStates) => Promise<boolean>;
  closeDialog: () => void;
}

export interface DialogStoreInterface extends DialogStates {
  actions: DialogActions;
}
