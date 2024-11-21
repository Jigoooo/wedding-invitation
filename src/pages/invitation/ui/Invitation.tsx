import 'react-lazy-load-image-component/src/effects/blur.css';

import { Divider, Stack } from '@mui/joy';

import {
  AttendanceSection,
  FallingAnimation,
  Guestbook,
  IntroAnimation,
  InvitationFooter,
  InvitationHeader,
  InvitationIntroduction,
  InvitationLocationInfo,
  WeddingCalendar,
  WeddingInformationAndInstructions,
  InvitationAccounts,
  Gallery,
  BackgroundMusic,
} from '@/widgets/invitation';

const MIN_WIDTH = 310;
const MAX_WIDTH = 430;

const BACKGROUND_COLOR = '#f3f3f3';

export function Invitation() {
  return (
    <Stack
      sx={{
        minHeight: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR,
      }}
    >
      <BackgroundMusic />

      <Stack
        className={'selection-none'}
        sx={{
          minWidth: MIN_WIDTH,
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

        <InvitationHeader />

        <Stack component={'main'} sx={{ width: '100%', alignItems: 'center', gap: 14, pb: 10 }}>
          <InvitationIntroduction />

          <Gallery />

          <WeddingCalendar />

          <InvitationLocationInfo />

          <WeddingInformationAndInstructions />

          <InvitationAccounts />

          <Guestbook />

          <AttendanceSection />
        </Stack>

        <Stack
          component={'footer'}
          sx={{ width: '100%', mt: 'auto', alignItems: 'center', gap: 3 }}
        >
          <Divider />
          <InvitationFooter />
        </Stack>
      </Stack>
    </Stack>
  );
}
