import { Box, Divider, Stack, Typography } from '@mui/joy';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import {
  getWeddingImageSrc,
  useWeddingInfo,
  useMarriedPersons,
  getReplaceWeddingImageSrc,
} from '@/entities/invitation';

export function InvitationHeader() {
  const weddingInfo = useWeddingInfo();
  const marriedPersons = useMarriedPersons();

  const formattedDate = format(weddingInfo.weddingDateTime, 'yyyy년 M월 d일', { locale: ko });
  const formattedTime = format(weddingInfo.weddingDateTime, 'a h시', { locale: ko });

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
          {format(weddingInfo.weddingDateTime, 'yyyy / MM / dd')}
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
          {format(weddingInfo.weddingDateTime, 'EEEE').toUpperCase()}
        </Typography>
      </Stack>
      <img
        style={{
          width: '100%',
          borderRadius: 3,
        }}
        alt={'Header'}
        src={getWeddingImageSrc('header-image-origin.webp')}
        onError={(e) => {
          e.currentTarget.src = getReplaceWeddingImageSrc('header-image-origin.webp');
        }}
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
          {marriedPersons.groom.name}
        </Typography>
        <Divider sx={{ mx: 0.3, backgroundColor: '#999999' }} orientation='vertical' />
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 800,
            textAlign: 'center',
          }}
        >
          {marriedPersons.bride.name}
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
          {weddingInfo.weddingHallNameDetail}
        </Typography>
      </Stack>
    </Stack>
  );
}
