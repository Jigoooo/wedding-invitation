import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import { OverridableStringUnion } from '@mui/types';
import { ColorPaletteProp } from '@mui/joy/styles/types';
import { SnackbarPropsColorOverrides } from '@mui/joy/Snackbar/SnackbarProps';
import ReportIcon from '@mui/icons-material/Report';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

import {
  AnimatedDialogModal,
  closeDialog,
  useDialogInfos,
  useDialogOpen,
} from '@/shared/components';
import { PlainButton, SolidButton } from '@/shared/ui';
import { ModalClose } from '@mui/joy';

export function AlertDialog() {
  const dialogOpen = useDialogOpen();
  const dialogInfos = useDialogInfos();

  return (
    <AnimatedDialogModal modalOpen={dialogOpen} onClose={closeDialog}>
      <>
        {dialogInfos.withCloseButton && <ModalClose variant='plain' sx={{ m: 1 }} />}
        <DialogTitle>
          {getIcon(dialogInfos.color)}
          {dialogInfos.header}
        </DialogTitle>
        <Divider />
        <DialogContent>{dialogInfos.contents}</DialogContent>
        {dialogInfos.buttonNumbers === 2 ? (
          <DialogActions sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <SolidButton
              noAnimation={true}
              color={dialogInfos.color}
              onClick={() => {
                dialogInfos?.confirmCallback?.();
                closeDialog();
              }}
            >
              {dialogInfos.confirmText}
            </SolidButton>
            {dialogInfos.withCancel && (
              <PlainButton
                noAnimation={true}
                color='neutral'
                onClick={() => {
                  dialogInfos?.cancelCallback?.();
                  closeDialog();
                }}
              >
                {dialogInfos.cancelText}
              </PlainButton>
            )}
          </DialogActions>
        ) : (
          <DialogActions sx={{ display: 'flex', flexDirection: 'column' }}>
            {dialogInfos.customButtons!.map(({ label, color, callback }) => (
              <PlainButton
                key={label}
                noAnimation={true}
                color={color}
                onClick={() => {
                  callback();
                  closeDialog();
                }}
              >
                {label}
              </PlainButton>
            ))}
          </DialogActions>
        )}
      </>
    </AnimatedDialogModal>
  );
}

const getIcon = (color?: OverridableStringUnion<ColorPaletteProp, SnackbarPropsColorOverrides>) => {
  switch (color) {
    case 'danger':
      return <ReportIcon style={{ color: 'red' }} />;
    case 'warning':
      return <WarningIcon style={{ color: 'orange' }} />;
    case 'success':
      return <CheckCircleIcon style={{ color: 'green' }} />;
    case 'neutral':
    default:
      return <InfoIcon />;
  }
};
