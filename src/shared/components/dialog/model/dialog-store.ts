import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

import { DialogInfoStates, DialogStates, DialogStoreInterface } from './dialog-interfaces.ts';

const dialogInitialState: DialogStates = {
  dialogOpen: false,
  dialogInfos: {
    header: '',
    contents: '',
    confirmButtonColor: 'primary',
    confirmText: '확인',
    cancelText: '취소',
    confirmCallback: () => {},
    cancelCallback: () => {},
    withCancel: false,
    withCloseButton: false,
    color: 'primary',
    buttonNumbers: 2,
    customButtons: [],
  },
};

const useDialog = create<DialogStoreInterface>()((setState) => {
  return {
    ...dialogInitialState,
    actions: {
      openDialog: ({
        header = '알림',
        contents,
        confirmButtonColor = 'primary',
        confirmText = '확인',
        cancelText = '취소',
        confirmCallback = () => {},
        cancelCallback = () => {},
        withCancel = false,
        withCloseButton = false,
        color = 'primary',
        buttonNumbers = 2,
        customButtons = [],
      }) => {
        setState((state) => ({
          ...state,
          dialogOpen: true,
          dialogInfos: {
            header,
            contents,
            confirmButtonColor,
            confirmText,
            cancelText,
            confirmCallback,
            cancelCallback,
            withCancel,
            withCloseButton,
            color,
            buttonNumbers,
            customButtons,
          },
        }));
      },
      openDialogAsync: ({
        header = '알림',
        contents,
        confirmButtonColor = 'primary',
        confirmText = '확인',
        cancelText = '취소',
        confirmCallback = () => {},
        cancelCallback = () => {},
        withCancel = false,
        withCloseButton = false,
        color = 'primary',
        buttonNumbers = 2,
        customButtons = [],
      }) =>
        new Promise((resolve) => {
          setState((state) => ({
            ...state,
            dialogOpen: true,
            dialogInfos: {
              ...state.dialogInfos,
              header,
              contents,
              confirmButtonColor,
              confirmText,
              cancelText,
              confirmCallback: () => {
                if (confirmCallback) confirmCallback();
                resolve(true);
              },
              cancelCallback: () => {
                if (cancelCallback) cancelCallback();
                resolve(false);
              },
              withCancel,
              withCloseButton,
              color,
              buttonNumbers,
              customButtons: customButtons.map((button) => ({
                ...button,
                callback: () => {
                  button.callback();
                  resolve(true);
                },
              })),
            },
          }));
        }),
      closeDialog: () => {
        setState((state) => ({ ...state, dialogOpen: false }));
      },
    },
  };
});

export const useDialogOpen = () => useDialog((state) => state.dialogOpen);
export const useDialogInfos = () => useDialog(useShallow((state) => state.dialogInfos));
export const openDialog = (dialogInfos: DialogInfoStates) => useDialog.getState().actions.openDialog(dialogInfos);
export const openDialogAsync = (dialogInfos: DialogInfoStates) =>
  useDialog.getState().actions.openDialogAsync(dialogInfos);
export const closeDialog = () => useDialog.getState().actions.closeDialog();
