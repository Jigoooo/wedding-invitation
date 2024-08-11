import { AnimatedSection, SectionHeader } from '@/entities/invitation';
import { Box, Stack, Typography } from '@mui/joy';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';

export function InvitationLocationInfo({
  weddingAddress,
  weddingLocationName,
}: {
  weddingAddress: string;
  weddingLocationName: string;
}) {
  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'LOCATION'} korTitle={'오시는 길'} />
      </AnimatedSection>
      <AnimatedSection>
        <Stack sx={{ width: '100%', alignItems: 'center', gap: 1 }}>
          <Typography
            sx={{ color: '#333333', fontSize: '1.2rem', fontWeight: 800, letterSpacing: 1.2 }}
          >
            {weddingLocationName}
          </Typography>
          <Typography
            sx={{ color: '#666666', fontSize: '0.9rem', fontWeight: 600, letterSpacing: 1 }}
          >
            {weddingAddress}
          </Typography>
        </Stack>
      </AnimatedSection>
      <AnimatedSection>
        <Box component={MapDiv} sx={{ width: '100%', height: 300 }}>
          <NaverMap />
        </Box>
      </AnimatedSection>
    </Stack>
  );
}
