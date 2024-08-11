import { SectionHeader } from '@/entities/invitation';
import { Box, Stack } from '@mui/joy';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';

export function InvitationLocationInfo() {
  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <SectionHeader engTitle={'LOCATION'} korTitle={'오시는 길'} />
      <Box component={MapDiv} sx={{ width: '100%', height: 300 }}>
        <NaverMap />
      </Box>
    </Stack>
  );
}
