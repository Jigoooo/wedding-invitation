import { Option, Select, selectClasses, SelectProps } from '@mui/joy';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useColorScheme } from '@mui/joy/styles';

import { colors } from '@/shared/constants';
import { formEnterPrevention } from '@/shared/lib';

type SelectedItemTypes = {
  key: string | number;
  label: string;
};

interface FuturSelectBoxTypes extends SelectProps<any, any> {
  item: SelectedItemTypes[];
  error?: boolean;
  defaultBackground?: boolean;
}

export function FuturSelectBox({
  style = {},
  sx,
  defaultBackground = true,
  slotProps,
  placeholder = '',
  name = '',
  size,
  required = false,
  variant = 'soft',
  item = [],
  value,
  defaultValue,
  onChange,
  error = false,
}: Readonly<FuturSelectBoxTypes>) {
  const { mode } = useColorScheme();

  const errorStyle = error
    ? {
        border: '2px solid #D32F2F',
      }
    : {};

  let modeBackgroundColor = mode === 'light' ? colors.lightGrey : colors.darkGrey;
  const placeholderColor = !value || item.length === 0 ? colors.darkGrey2 : undefined;

  if (error) {
    modeBackgroundColor = colors.lightRed;
  }

  return (
    <Select
      className={'selection-none'}
      style={{ ...style, ...errorStyle }}
      slotProps={slotProps}
      placeholder={placeholder}
      name={name}
      size={size}
      required={required}
      variant={variant}
      indicator={<KeyboardArrowDown />}
      sx={[
        {
          backgroundColor: defaultBackground ? undefined : modeBackgroundColor,
          [`& .${selectClasses.button}`]: {
            color: placeholderColor,
          },
          '&.MuiSelect-root': {
            '& .MuiMenu-paper': {
              backgroundColor: 'transparent',
            },
          },
          [`& .${selectClasses.indicator}`]: {
            transition: '0.2s',
            backgroundColor: 'transparent',
            [`&.${selectClasses.expanded}`]: {
              transform: 'rotate(-180deg)',
            },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      onKeyDown={formEnterPrevention}
    >
      {item.map((value: SelectedItemTypes) => {
        return (
          <Option key={value.key} value={value.key}>
            {value.label}
          </Option>
        );
      })}
    </Select>
  );
}
