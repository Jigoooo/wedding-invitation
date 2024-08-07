import { Checkbox as MuiCheckbox } from '@mui/joy';
import { CheckboxProps } from '@mui/joy';

export function Checkbox(props: Readonly<CheckboxProps>) {
  return <MuiCheckbox {...props} className={'selection-none'} />;
}
