import { Stack, Typography } from '@mui/joy';
import { AnimatedSection, SectionHeader } from '@/entities/invitation';
import { TranslucentMobileModal } from '@/shared/components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RouterName } from '@/shared/enum';
import { OutlinedButton } from '@/shared/ui';

export function Guestbook() {
  const navigate = useNavigate();

  const [isGuestbookOpen, setIsGuestbookOpen] = useState(false);
  const toggleAttendanceConfirmation = () => {
    setIsGuestbookOpen(!isGuestbookOpen);
  };

  const openGuestbook = () => {
    toggleAttendanceConfirmation();
    navigate(RouterName.GUESTBOOK);
  };

  const closeGuestbook = () => {
    toggleAttendanceConfirmation();
    navigate(RouterName.INVITATION);
  };

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'GUESTBOOK'} korTitle={'방명록'} />
      </AnimatedSection>

      <OutlinedButton onClick={openGuestbook} buttonColor={'#cccccc'} sx={{ color: '#888888' }}>
        작성하기
      </OutlinedButton>

      <GuestbookModal isGuestbookOpen={isGuestbookOpen} onClose={closeGuestbook} />
    </Stack>
  );
}

function GuestbookModal({
  isGuestbookOpen,
  onClose,
}: {
  isGuestbookOpen: boolean;
  onClose: () => void;
}) {
  return (
    <TranslucentMobileModal
      title={
        <Stack>
          <Typography sx={{ color: '#333333', fontSize: '1.1rem', fontWeight: 800 }}>
            방명록 등록
          </Typography>
        </Stack>
      }
      isOpen={isGuestbookOpen}
      onClose={onClose}
      sx={{ backgroundColor: '#ffffff' }}
      closeIconColor={'#999999'}
      isCloseButtonVisible={false}
    >
      <Outlet />
    </TranslucentMobileModal>
  );
}
