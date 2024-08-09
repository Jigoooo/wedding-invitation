import 'react-lazy-load-image-component/src/effects/blur.css';

import { Stack, Typography } from '@mui/joy';
import Snowfall from 'react-snowfall';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import HeaderImage from '@/shared/assets/images/wedding-image/header-image-origin.webp';

const WEDDING_DATE = '2024.12.14';
const WEDDING_DAY = 'SATURDAY';

export function Invitation() {
  return (
    <Stack
      sx={{
        minWidth: 360,
        maxWidth: 450,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <Snowfall
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 999,
          height: '100%',
          width: '100%',
          background: 'transparent',
        }}
        radius={[1, 2]}
        rotationSpeed={[-1.0, 1.0]}
        speed={[1.0, 2.0]}
        wind={[-0.5, 1.0]}
        snowflakeCount={100}
      />
      <Stack component={'section'} sx={{ height: '100%', width: '100%', alignItems: 'center' }}>
        <Stack
          component={'header'}
          sx={{ width: '100%', height: 910, alignItems: 'center', pt: 4, gap: 5 }}
        >
          <Stack sx={{ width: '100%', alignItems: 'center' }}>
            <Typography
              sx={{
                fontSize: '1.8rem',
                fontWeight: 500,
                fontFamily: 'Crimson Pro',
                letterSpacing: 2,
              }}
            >
              {WEDDING_DATE}
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
              {WEDDING_DAY}
            </Typography>
          </Stack>
          <LazyLoadImage
            style={{ width: '100%' }}
            alt={'Header'}
            effect='blur'
            src={HeaderImage}
            height={630}
            width={420}
            // visibleByDefault={true}
          />
          <Stack sx={{ width: '100%', gap: 1 }}>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#666666',
                textAlign: 'center',
              }}
            >
              2024년 12월 14일 오후 1시
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#666666',
                textAlign: 'center',
              }}
            >
              천안 비렌티 신관 3F, 루체오홀
            </Typography>
          </Stack>
        </Stack>
        <Stack component={'main'} sx={{ width: '100%', alignItems: 'center' }}>
          <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
            Greeting - 소개
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
            CoupleInfo - 부모님 기준 신랑, 신부 정보
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
            DateInfo - 결혼식 날짜 정보
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
            Photos - 신랑, 신부 사진
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
            Directions - 오시는길, 주차, 대중교통 정보 등
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
            Information - 안내사항, 기타 정보
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
            AccountInfo - 계좌정보
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
            Guestbook - 방명록
          </Stack>
        </Stack>
        <Stack component={'footer'} sx={{ width: '100%', height: 150, alignItems: 'center' }}>
          Footer - 카톡공유, 링크주소 복사 등
        </Stack>
      </Stack>
    </Stack>
  );
}
