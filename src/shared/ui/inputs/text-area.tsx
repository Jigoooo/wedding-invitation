import { Textarea, TextareaProps } from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';

import { colors } from '@/shared/constants';

export function TextArea({
  readOnly,
  sx,
  startDecorator,
  placeholder,
  defaultValue,
  minRows,
  maxRows,
  value,
  onChange,
  onClick,
  error,
  variant,
}: Readonly<TextareaProps>) {
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
    <Textarea
      className={'selection-none'}
      readOnly={readOnly}
      sx={[
        {
          transition: 'border-color 0.2s ease-in-out',
        },
        variant === 'soft'
          ? {
              backgroundColor: modeBackgroundColor,
              pt: 1,
              '&::before': {
                display: 'none',
              },
              '&:focus-within': {
                border: `2px solid ${focusedHighlightColor}`,
              },
              '&:hover': {
                borderColor: error ? modeBackgroundColor : colors.primary[400],
              },
              '& .MuiInput-input::placeholder': {
                color: placeholderColor,
                fontSize: '14px',
              },
            }
          : variant === 'outlined'
            ? {
                backgroundColor: error ? modeBackgroundColor : 'transparent',
                pt: 1,
                '&::before': {
                  display: 'none',
                },
                '&:focus-within': {
                  border: `2px solid ${focusedHighlightColor}`,
                },
                '&:hover': {
                  borderColor: error ? modeBackgroundColor : colors.primary[400],
                },
                '& .MuiInput-input::placeholder': {
                  color: placeholderColor,
                  fontSize: '14px',
                },
              }
            : {},
        errorStyle,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      startDecorator={startDecorator}
      variant={variant}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      defaultValue={defaultValue}
      minRows={minRows}
      maxRows={maxRows}
      error={error}
    />
  );
}
