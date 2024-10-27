import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/joy';
import { Outlet, useNavigate } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';

import { RouterName } from '@/shared/enum';
import { AnimatedSection, SectionHeader } from '@/entities/invitation';
import { TranslucentMobileModal } from '@/shared/components';
import { SoftButton } from '@/shared/ui';
import Card from '@mui/joy/Card';

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
      <Stack sx={{ width: '100%', px: 3, gap: 2 }}>
        <AnimatedSection>
          <Stack sx={{ width: '100%' }}>
            <Card>test</Card>
          </Stack>
        </AnimatedSection>
        <AnimatedSection>
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
            <SoftButton
              onClick={openGuestbook}
              sx={{
                height: 45,
                borderRadius: 25,
                color: '#666666',
                border: '1px solid #dadada',
              }}
              buttonColor={'#ffffff'}
              startDecorator={<EditIcon style={{ color: '#999999' }} />}
            >
              작성하기
            </SoftButton>
          </Box>
        </AnimatedSection>
      </Stack>

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
