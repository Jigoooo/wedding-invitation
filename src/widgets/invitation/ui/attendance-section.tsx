import { Box, Stack, Typography } from '@mui/joy';
import { useState } from 'react';

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import { AnimatedSection, SectionHeader } from '@/entities/invitation';
import { SoftButton } from '@/shared/ui';
import { AttendanceConfirmationModal } from './attendance-confirmation.tsx';

export function AttendanceSection() {
  const [isAttendanceConfirmationOpen, setIsAttendanceConfirmationOpen] = useState(false);
  const toggleAttendanceConfirmation = () => {
    setIsAttendanceConfirmationOpen(!isAttendanceConfirmationOpen);
  };

  const openAttendanceConfirmation = () => {
    toggleAttendanceConfirmation();
  };

  const closeAttendanceConfirmation = () => {
    toggleAttendanceConfirmation();
  };

  return (
    <AnimatedSection>
      <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
        <SectionHeader engTitle={'R.S.V.P.'} korTitle={'참석의사 전달'} />
        <Stack sx={{ width: '100%', alignItems: 'center' }}>
          <Typography
            sx={{
              color: '#666666',
              fontSize: '0.9rem',
              fontWeight: 700,
              width: '100%',
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            특별한 날에 함께해 주실 분들을
            <br />
            정성껏 모시고자 합니다.
            <br />
            <br />
            참석의사를 미리 전달해 주시면
            <br />
            정말 감사하겠습니다.
          </Typography>
        </Stack>
        <Box
          sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <SoftButton
            onClick={openAttendanceConfirmation}
            sx={{
              width: '60%',
              height: 45,
              borderRadius: 25,
              color: '#666666',
              border: '1px solid #dadada',
            }}
            buttonColor={'#ffffff'}
            startDecorator={<AssignmentTurnedInIcon style={{ color: '#999999' }} />}
          >
            참석의사 전달하기
          </SoftButton>
        </Box>
        <AttendanceConfirmationModal
          isAttendanceConfirmationOpen={isAttendanceConfirmationOpen}
          onClose={closeAttendanceConfirmation}
        />
      </Stack>
    </AnimatedSection>
  );
}
