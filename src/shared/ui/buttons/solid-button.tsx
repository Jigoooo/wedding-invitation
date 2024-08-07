import Button from '@mui/joy/Button';
import { buttonClasses, ButtonProps } from '@mui/joy';
import { darken } from 'polished';

interface FuturButtonProps extends ButtonProps {
  noAnimation?: boolean;
  buttonColor?: string;
}

export function SolidButton({
  children = '',
  sx = [],
  noAnimation = false,
  type = 'button',
  fullWidth = false,
  onClick,
  buttonColor,
  color,
  loading,
  disabled = false,
  startDecorator,
  endDecorator,
}: Readonly<FuturButtonProps>) {
  return (
    <Button
      className={'selection-none'}
      disabled={disabled}
      tabIndex={-1}
      sx={[
        noAnimation
          ? {}
          : {
              transition: '0.4s',
            },
        {
          width: 'auto',
          height: 40,
          paddingTop: 1.0,
        },
        buttonColor && {
          backgroundColor: buttonColor,
          [`&.${buttonClasses.root}`]: {
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover': {
                backgroundColor: `${darken(0.05, buttonColor)} !important`,
              },
            },
            '&:focus': {
              backgroundColor: 'none !important',
            },
            '&:active': {
              backgroundColor: `${darken(0.1, buttonColor)} !important`,
            },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      color={color}
      variant={'solid'}
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
      loading={loading}
      startDecorator={startDecorator}
      endDecorator={endDecorator}
    >
      {children}
    </Button>
  );
}
