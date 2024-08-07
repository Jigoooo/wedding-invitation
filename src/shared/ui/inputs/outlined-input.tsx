import { RefObject } from 'react';
import Input, { InputProps } from '@mui/joy/Input';
import { useColorScheme } from '@mui/joy/styles';

import { colors } from '@/shared/constants';
import { formEnterPrevention } from '@/shared/lib';

interface OutlinedInputProps extends InputProps {
  inputRef?: RefObject<any>;
  ariaLabel?: string | undefined;
  keydownEnabled?: boolean;
  focusWithin?: boolean;
}

export function OutlinedInput({
  inputRef,
  className,
  sx,
  style = {},
  name = '',
  type = 'text',
  defaultValue,
  value,
  onChange,
  onClick,
  keydownEnabled = false,
  placeholder = '',
  color = 'neutral',
  required = false,
  error = false,
  readOnly = false,
  disabled = false,
  startDecorator,
  endDecorator,
  ariaLabel,
  autoComplete = 'new-password',
  autoFocus,
  focusWithin = true,
}: Readonly<OutlinedInputProps>) {
  const { mode } = useColorScheme();

  const errorStyle = error
    ? {
        border: '2px solid #D32F2F',
      }
    : {};

  const focusedHighlightColor = error ? 'transparent' : `${colors.primary[400]}`;
  let modeBackgroundColor = mode === 'light' ? colors.lightGrey : colors.darkGrey;
  let placeholderColor = undefined;

  if (error) {
    modeBackgroundColor = mode === 'light' ? colors.lightRed : colors.darkGrey;
    placeholderColor = colors.darkGrey;
  }

  return (
    <Input
      ref={inputRef}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      className={`selection-none ${className}`}
      style={{ ...style, ...errorStyle }}
      sx={[
        {
          backgroundColor: error ? modeBackgroundColor : 'transparent',
          border: 'none',
          outline: 'none',
          boxShadow: `inset 0 0 0 1px rgba(0,27,55,0.1)`,
          transition: 'all 0.2s ease-in-out',
          '&::before': {
            display: 'none',
          },
          '& .MuiInput-input::placeholder': {
            color: placeholderColor,
            fontSize: '14px',
          },
        },
        focusWithin && {
          '&:focus-within': {
            boxShadow: `inset 0 0 0 2px ${focusedHighlightColor} !important`,
          },
          '&:hover': {
            boxShadow: `inset 0 0 0 2px ${error ? modeBackgroundColor : colors.primary[200]}`,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      name={name}
      type={type}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      variant={'outlined'}
      color={color}
      onKeyDown={keydownEnabled ? undefined : formEnterPrevention}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      startDecorator={startDecorator}
      endDecorator={endDecorator}
      aria-label={ariaLabel}
    />
  );
}
