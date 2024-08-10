import { Box, Divider, Stack, Typography } from '@mui/joy';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import HeaderImage from '@/shared/assets/images/wedding-image/header-image-origin.webp';

export function InvitationHeader({
  weddingDate,
  weddingDay,
  headerImageHeight,
}: {
  weddingDate: string;
  weddingDay: string;
  headerImageHeight: number;
}) {
  return (
    <Stack component={'header'} sx={{ width: '100%', alignItems: 'center', pt: 4, gap: 2.5 }}>
      <Stack sx={{ width: '100%', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 500,
            fontFamily: 'Crimson Pro',
            letterSpacing: 2,
          }}
        >
          {weddingDate}
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 400,
            fontFamily: 'Crimson Pro',
            textAlign: 'center',
            letterSpacing: 2,
          }}
        >
          {weddingDay}
        </Typography>
      </Stack>
      <LazyLoadImage
        style={{ width: '100%', borderRadius: 10 }}
        alt={'Header'}
        effect='blur'
        src={HeaderImage}
        height={headerImageHeight}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: 2,
          mt: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 800,
            textAlign: 'center',
          }}
        >
          김지우
        </Typography>
        <Divider sx={{ mx: 0.3, backgroundColor: '#999999' }} orientation='vertical' />
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 800,
            textAlign: 'center',
          }}
        >
          김지영
        </Typography>
      </Box>
      <Stack sx={{ width: '100%', gap: 1 }}>
        <Typography
          sx={{
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#666666',
            textAlign: 'center',
            lineHeight: 2,
          }}
        >
          2024년 12월 14일 오후 1시
          <br />
          천안 비렌티 신관 3F, 루체오홀
        </Typography>
      </Stack>
    </Stack>
  );
}
