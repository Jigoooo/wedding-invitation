import 'react-lazy-load-image-component/src/effects/blur.css';

import { Stack } from '@mui/joy';

import {
  FallingAnimation,
  IntroAnimation,
  InvitationHeader,
  InvitationIntroduction,
  InvitationLocationInfo,
  WeddingCalendar,
} from '@/widgets/invitation';
import { AnimatedSection, SectionHeader } from '@/entities/invitation';
import { parse } from 'date-fns';

const weddingDate = parse('2024.12.14 13:00:00', 'yyyy.MM.dd HH:mm:ss', new Date());

const GROOM_NAME = '김지우';
const BRIDE_NAME = '김지영';
const WEDDING_ADDRESS = '충남 천안시 서북구 천안대로 1198-30';
const WEDDING_LOCATION_NAME = '천안 비렌티 신관 3F, 루체오홀';
const WEDDING_PLACE_NAME = '천안 비렌티';
const MAX_WIDTH = 430;

export function Invitation() {
  return (
    <Stack
      sx={{
        minHeight: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
      }}
    >
      <Stack
        className={'selection-none'}
        sx={{
          minWidth: 360,
          maxWidth: MAX_WIDTH,
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        <IntroAnimation />
        <FallingAnimation />

        <InvitationHeader
          weddingDate={weddingDate}
          weddingLocationName={WEDDING_LOCATION_NAME}
          groomName={GROOM_NAME}
          brideName={BRIDE_NAME}
        />

        <Stack component={'main'} sx={{ width: '100%', alignItems: 'center', gap: 14 }}>
          <InvitationIntroduction />

          <AnimatedSection>
            <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
              <SectionHeader engTitle={'GALLERY'} korTitle={'갤러리'} />
            </Stack>
          </AnimatedSection>

          <WeddingCalendar weddingDate={weddingDate} />

          <InvitationLocationInfo
            weddingAddress={WEDDING_ADDRESS}
            weddingLocationName={WEDDING_LOCATION_NAME}
            weddingPlaceName={WEDDING_PLACE_NAME}
          />

          <AnimatedSection>
            <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
              <SectionHeader engTitle={'INFORMATION'} korTitle={'예식정보 및 안내사항'} />
            </Stack>
          </AnimatedSection>

          <AnimatedSection>
            <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
              <SectionHeader engTitle={'ACCOUNT'} korTitle={'마음 전하실 곳'} />
            </Stack>
          </AnimatedSection>

          <AnimatedSection>
            <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
              <SectionHeader engTitle={'GUESTBOOK'} korTitle={'방명록'} />
            </Stack>
          </AnimatedSection>

          <AnimatedSection>
            <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
              참석의사 전달
            </Stack>
          </AnimatedSection>
        </Stack>

        <Stack component={'footer'} sx={{ width: '100%', mt: 'auto', alignItems: 'center' }}>
          Footer - 카톡공유, 링크주소 복사 등
        </Stack>
      </Stack>
    </Stack>
  );
}
