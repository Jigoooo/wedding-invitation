import { Box, Divider, Stack, Typography } from '@mui/joy';
import { getWeddingImageSrc } from '@/entities/invitation';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

// const maskLinearGradientStyle = {
//   maskImage: `linear-gradient(180deg,
//     transparent 0%,
//     rgba(0, 0, 0, 0.1) 2%,
//     rgba(0, 0, 0, 0.3) 4%,
//     rgba(0, 0, 0, 0.5) 6%,
//     rgba(0, 0, 0, 0.7) 8%,
//     rgba(0, 0, 0, 0.9) 10%,
//     #000 12%,
//     #000 88%,
//     rgba(0, 0, 0, 0.9) 90%,
//     rgba(0, 0, 0, 0.7) 92%,
//     rgba(0, 0, 0, 0.5) 94%,
//     rgba(0, 0, 0, 0.3) 96%,
//     rgba(0, 0, 0, 0.1) 98%,
//     transparent 100%)`,
//   WebkitMaskImage: `linear-gradient(180deg,
//     transparent 0%,
//     rgba(0, 0, 0, 0.1) 2%,
//     rgba(0, 0, 0, 0.3) 4%,
//     rgba(0, 0, 0, 0.5) 6%,
//     rgba(0, 0, 0, 0.7) 8%,
//     rgba(0, 0, 0, 0.9) 10%,
//     #000 12%,
//     #000 88%,
//     rgba(0, 0, 0, 0.9) 90%,
//     rgba(0, 0, 0, 0.7) 92%,
//     rgba(0, 0, 0, 0.5) 94%,
//     rgba(0, 0, 0, 0.3) 96%,
//     rgba(0, 0, 0, 0.1) 98%,
//     transparent 100%)`,
// };

export function InvitationHeader({
  weddingDate,
  weddingLocationName,
  groomName,
  brideName,
}: {
  weddingDate: Date;
  weddingLocationName: string;
  groomName: string;
  brideName: string;
}) {
  const formattedDate = format(weddingDate, 'yyyy년 M월 d일', { locale: ko });
  const formattedTime = format(weddingDate, 'a h시', { locale: ko });

  const fullFormattedDate = `${formattedDate} ${formattedTime}`;

  return (
    <Stack
      component={'header'}
      sx={{ width: '100%', height: 950, alignItems: 'center', pt: 4, gap: 2.5 }}
    >
      <Stack sx={{ width: '100%', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: '1.6rem',
            fontWeight: 500,
            fontFamily: 'Crimson Pro',
            letterSpacing: 1.6,
          }}
        >
          {format(weddingDate, 'yyyy / MM / dd')}
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
          {format(weddingDate, 'EEEE').toUpperCase()}
        </Typography>
      </Stack>
      <img
        style={{
          width: '100%',
          borderRadius: 3,
          // ...maskLinearGradientStyle,
        }}
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
          {groomName}
        </Typography>
        <Divider sx={{ mx: 0.3, backgroundColor: '#999999' }} orientation='vertical' />
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 800,
            textAlign: 'center',
          }}
        >
          {brideName}
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
          {fullFormattedDate}
          <br />
          {weddingLocationName}
        </Typography>
      </Stack>
    </Stack>
  );
}
