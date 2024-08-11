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
import { SectionHeader } from '@/entities/invitation';

const WEDDING_DATE = '2024.12.14';
const WEDDING_DAY = 'SATURDAY';

const MAX_WIDTH = 450;

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
          height: '100%',
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#fefefe',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
          position: 'relative',
          px: 1,
          gap: 14,
        }}
      >
        <IntroAnimation />
        <FallingAnimation />
        <InvitationHeader weddingDate={WEDDING_DATE} weddingDay={WEDDING_DAY} />
        <Stack component={'main'} sx={{ width: '100%', alignItems: 'center', gap: 14 }}>
          <InvitationIntroduction />
          <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
            <SectionHeader engTitle={'GALLERY'} korTitle={'갤러리'} />
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
            <WeddingCalendar />
          </Stack>
          <InvitationLocationInfo />
          <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
            <SectionHeader engTitle={'INFORMATION'} korTitle={'예식정보 및 안내사항'} />
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
            <SectionHeader engTitle={'ACCOUNT'} korTitle={'마음 전하실 곳'} />
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
            <SectionHeader engTitle={'GUESTBOOK'} korTitle={'방명록'} />
          </Stack>
          <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
            참석의사 전달
          </Stack>
        </Stack>
        <Stack component={'footer'} sx={{ width: '100%', height: 150, alignItems: 'center' }}>
          Footer - 카톡공유, 링크주소 복사 등
        </Stack>
      </Stack>
    </Stack>
  );
}
