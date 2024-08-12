import { Stack, Typography } from '@mui/joy';

export function SectionHeader({ engTitle, korTitle }: { engTitle: string; korTitle: string }) {
  return (
    <Stack sx={{ width: '100%', alignItems: 'center', gap: 0.3 }}>
      <Typography
        sx={{
          fontSize: '0.9rem',
          fontWeight: 400,
          fontFamily: 'Crimson Pro',
          color: '#f79e9e',
          letterSpacing: 2,
        }}
      >
        {engTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: '1.1rem',
          fontWeight: 800,
          color: '#f79e9e',
          letterSpacing: 2.6,
        }}
      >
        {korTitle}
      </Typography>
    </Stack>
  );
}
