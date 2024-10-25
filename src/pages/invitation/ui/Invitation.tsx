import 'react-lazy-load-image-component/src/effects/blur.css';

import { Divider, Stack } from '@mui/joy';
import { parse } from 'date-fns';

import {
  AttendanceSection,
  FallingAnimation,
  IntroAnimation,
  InvitationFooter,
  InvitationHeader,
  InvitationIntroduction,
  InvitationLocationInfo,
  WeddingCalendar,
} from '@/widgets/invitation';
import { AnimatedSection, marriedPersons, SectionHeader } from '@/entities/invitation';
import { InvitationAccounts } from '@/widgets/invitation/ui/invitation-accounts.tsx';

const weddingDate = parse('2024.12.14 13:00:00', 'yyyy.MM.dd HH:mm:ss', new Date());

const LINK_URL = import.meta.env.VITE_INVITATION_SERVER_URL;
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
          marriedPersons={marriedPersons}
        />

        <Stack component={'main'} sx={{ width: '100%', alignItems: 'center', gap: 14, pb: 10 }}>
          <InvitationIntroduction marriedPersons={marriedPersons} />

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

          <InvitationAccounts />

          <AnimatedSection>
            <Stack component={'section'} sx={{ width: '100%', alignItems: 'center' }}>
              <SectionHeader engTitle={'GUESTBOOK'} korTitle={'방명록'} />
            </Stack>
          </AnimatedSection>

          <AttendanceSection />
        </Stack>

        <Stack
          component={'footer'}
          sx={{ width: '100%', mt: 'auto', alignItems: 'center', gap: 3 }}
        >
          <Divider />
          <InvitationFooter linkUrl={LINK_URL} />
        </Stack>
      </Stack>
    </Stack>
  );
}
