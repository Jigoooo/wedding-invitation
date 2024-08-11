import { Box, Divider, Stack, Typography } from '@mui/joy';
import { getWeddingImageSrc } from '@/entities/invitation';

export function InvitationHeader({
  weddingDate,
  weddingDay,
}: {
  weddingDate: string;
  weddingDay: string;
}) {
  return (
    <Stack
      component={'header'}
      sx={{ width: '100%', height: 950, alignItems: 'center', pt: 4, gap: 2.5 }}
    >
      <Stack sx={{ width: '100%', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 500,
            fontFamily: 'Crimson Pro',
            letterSpacing: 2,
          }}
        >
          {weddingDate}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 400,
            fontFamily: 'Crimson Pro',
            textAlign: 'center',
            letterSpacing: 2,
          }}
        >
          {weddingDay}
        </Typography>
      </Stack>
      <img
        style={{ width: '100%', borderRadius: 10 }}
        alt={'Header'}
        src={getWeddingImageSrc('header-image-origin.webp')}
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
