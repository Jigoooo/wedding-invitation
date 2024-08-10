import { Stack, Typography } from '@mui/joy';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import InfoImage from '@/shared/assets/images/wedding-image/info-image-origin.webp';

export function InvitationIntroduction({ infoImageHeight }: { infoImageHeight: number }) {
  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 4 }}>
      <Stack sx={{ width: '100%', alignItems: 'center', gap: 1 }}>
        <Typography
          sx={{
            fontSize: '0.9rem',
            fontWeight: 300,
            fontFamily: 'Crimson Pro',
            color: '#f79e9e',
            letterSpacing: 3,
          }}
        >
          INVITATION
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 800,
            color: '#f79e9e',
            letterSpacing: 3,
          }}
        >
          소중한 분들을 초대합니다
        </Typography>
      </Stack>
      <Stack sx={{ gap: 6 }}>
        <Typography
          sx={{
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: 1.4,
            textAlign: 'center',
            lineHeight: 2,
            color: '#666666',
          }}
        >
          인연의 소중함을 깊이새기고
          <br />
          사랑의 신의를 다짐하며
          <br />
          저희들 이제 인생의 길을 함께 가려 합니다.
        </Typography>
        <Typography
          sx={{
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: 1.4,
            textAlign: 'center',
            lineHeight: 2,
            color: '#666666',
          }}
        >
          설레는 새로운 시작의 날
          <br />
          함께 축복해 주시면
          <br />
          더없는 기쁨으로 간직하겠습니다.
        </Typography>
      </Stack>
      <LazyLoadImage
        style={{ width: '100%', borderRadius: 10 }}
        alt={'Info'}
        effect='blur'
        src={InfoImage}
        height={infoImageHeight}
      />
      <Stack sx={{ width: '100%', alignItems: 'center', gap: 1 }}>
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: 1.4,
          }}
        >
          김광태 &middot; 최정남
          <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            &nbsp;의 장남&nbsp;
          </Typography>
          김지우
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: 1.4,
          }}
        >
          김상돈 &middot; 박지효
          <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            &nbsp;의 장녀&nbsp;
          </Typography>
          김지영
        </Typography>
      </Stack>
    </Stack>
  );
}
