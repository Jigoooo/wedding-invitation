import React, { forwardRef } from 'react';
import { IconButton as MuiIconButton, iconButtonClasses, IconButtonProps } from '@mui/joy';

export const IconButton = forwardRef(
  (
    { disabled, sx, variant = 'plain', size, color = 'primary', onClick, children }: Readonly<IconButtonProps>,
    ref: any,
  ) => {
    const clonedChildren = React.Children.map(children, (child: React.ReactNode) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement, {
          sx: {
            transition: 'opacity 0.3s ease',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&:active': {
              opacity: 0.6,
              backgroundColor: 'transparent',
            },
          },
        });
      }
      return child;
    });

    return (
      <MuiIconButton
        ref={ref}
        className={'selection-none'}
        disabled={disabled}
        sx={[
          variant === 'plain' && {
            [`&.${iconButtonClasses.root}`]: {
              '&:hover': {
                background: 'transparent',
              },
              '&:active': {
                opacity: 0.6,
                backgroundColor: 'transparent',
              },
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
      >
        {clonedChildren}
      </MuiIconButton>
    );
  },
);

IconButton.displayName = 'IconButton';
