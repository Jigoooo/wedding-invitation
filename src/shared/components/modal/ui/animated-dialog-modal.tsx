import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { DialogTitle, Divider, ModalClose } from '@mui/joy';

import { FuturAnimatedModalProps } from '@/shared/components/modal';
import { DIALOG_Z_INDEX } from '@/shared/constants';

export function AnimatedDialogModal({
  modalOpen,
  onClose,
  keepMounted = true,
  dialogTitle,
  children,
}: Readonly<FuturAnimatedModalProps>) {
  const nodeRef = useRef(null);

  const onCloseControl = (_event?: object, reason?: 'backdropClick' | 'escapeKeyDown' | 'closeClick') => {
    if (reason && reason === 'backdropClick') return;

    if (onClose) onClose();
  };

  return (
    <Transition nodeRef={nodeRef} in={modalOpen} timeout={400}>
      {(state: string) => (
        <Modal
          ref={nodeRef}
          keepMounted={keepMounted}
          open={!['exited', 'exiting'].includes(state)}
          onClose={onCloseControl}
          slotProps={{
            backdrop: {
              sx: {
                opacity: 0,
                backdropFilter: 'none',
                transition: `opacity 400ms, backdrop-filter 400ms`,
                ...{
                  entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                  entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                }[state],
              },
            },
          }}
          sx={{
            visibility: state === 'exited' ? 'hidden' : 'visible',
          }}
        >
          <ModalDialog
            sx={{
              zIndex: DIALOG_Z_INDEX,
              opacity: 0,
              transition: `opacity 300ms`,
              ...{
                entering: { opacity: 1 },
                entered: { opacity: 1 },
              }[state],
            }}
            variant='outlined'
            role='alertdialog'
          >
            {dialogTitle && (
              <>
                <ModalClose variant='plain' sx={{ m: 1 }} />
                <DialogTitle>{dialogTitle}</DialogTitle>
                <Divider />
              </>
            )}
            {children}
          </ModalDialog>
        </Modal>
      )}
    </Transition>
  );
}
