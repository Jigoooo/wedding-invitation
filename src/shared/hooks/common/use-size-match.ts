import { useTheme } from '@mui/joy/styles';
import { useMediaQuery } from '@mui/material';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';

export function useSizeMatch(size: Breakpoint | number) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(size));
}
