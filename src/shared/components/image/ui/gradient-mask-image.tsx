import { ReactNode } from 'react';
import { Box } from '@mui/joy';

export function GradientMaskImage({ children }: { children: ReactNode }) {
  return (
    <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          maskImage: `linear-gradient(180deg, transparent 90%, rgba(0, 0, 0, 0.175) 5%, #000 50%, rgba(0, 0, 0, 0.175) 85%, transparent 90%)`,
          WebkitMaskImage: `linear-gradient(180deg, transparent 90%, rgba(0, 0, 0, 0.175) 5%, #000 50%, rgba(0, 0, 0, 0.175) 85%, transparent 90%)`,
        }}
      />
      <Box style={{ position: 'relative', zIndex: 1 }}>{children}</Box>
    </Box>
  );
}
