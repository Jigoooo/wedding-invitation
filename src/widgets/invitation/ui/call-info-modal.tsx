import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/joy';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Face6Icon from '@mui/icons-material/Face6';
import Face3Icon from '@mui/icons-material/Face3';

import { openPhoneApp, openSmsApp } from '@/shared/lib';
import { CallInfo, useMarriedPersons } from '@/entities/invitation';
import { TranslucentMobileModal } from '@/shared/components';

export type CallInfoSectionProps = {
  title: string;
  icon: React.ElementType;
  color: string;
  callInfo: CallInfo[];
};

function CallInfoSection({ title, icon: Icon, color, callInfo }: CallInfoSectionProps) {
  return (
    <Stack sx={{ width: '100%', px: 4, gap: 3 }}>
      <Stack sx={{ width: '100%', gap: 1 }}>
        <Typography sx={{ color, fontSize: '0.9rem', fontWeight: 800 }}>{title}</Typography>
        <Divider sx={{ backgroundColor: color }} />
      </Stack>
      {callInfo.map((info) => (
        <Box
          key={info.phoneNumber}
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '30%',
              gap: 0.5,
            }}
          >
            {info.role === title.slice(0, 2) && <Icon style={{ fontSize: '1.2rem', color }} />}
            <Typography sx={{ color: '#f1f1f1', fontSize: '0.9rem', fontWeight: 600 }}>
              {info.role}
            </Typography>
          </Box>
          <Typography sx={{ color: '#f1f1f1', fontSize: '1rem', fontWeight: 800 }}>
            {info.name}
            {info.subName !== '' && (
              <Typography sx={{ color: '#f1f1f1', fontSize: '0.8rem', fontWeight: 800 }}>
                ({info.subName})
              </Typography>
            )}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <CallIcon onClick={() => openPhoneApp(info.phoneNumber)} style={{ color: '#f1f1f1' }} />
            <EmailIcon onClick={() => openSmsApp(info.phoneNumber)} style={{ color: '#f1f1f1' }} />
          </Box>
        </Box>
      ))}
    </Stack>
  );
}

export function CallInfoModal({
  isCallInfoOpen,
  onClose,
}: {
  isCallInfoOpen: boolean;
  onClose: () => void;
}) {
  const marriedPersons = useMarriedPersons();

  const callInfoGroom: CallInfo[] = [
    {
      role: marriedPersons.groom.role,
      name: marriedPersons.groom.name,
      subName: marriedPersons.groom.subName,
      phoneNumber: marriedPersons.groom.phoneNumber,
    },
    {
      role: marriedPersons.groomsFather.role,
      name: marriedPersons.groomsFather.name,
      subName: marriedPersons.groomsFather.subName,
      phoneNumber: marriedPersons.groomsFather.phoneNumber,
    },
    {
      role: marriedPersons.groomsMother.role,
      name: marriedPersons.groomsMother.name,
      subName: marriedPersons.groomsMother.subName,
      phoneNumber: marriedPersons.groomsMother.phoneNumber,
    },
  ];

  const callInfoBride: CallInfo[] = [
    {
      role: marriedPersons.bride.role,
      name: marriedPersons.bride.name,
      subName: marriedPersons.bride.subName,
      phoneNumber: marriedPersons.bride.phoneNumber,
    },
    {
      role: marriedPersons.bridesFather.role,
      name: marriedPersons.bridesFather.name,
      subName: marriedPersons.bridesFather.subName,
      phoneNumber: marriedPersons.bridesFather.phoneNumber,
    },
    {
      role: marriedPersons.bridesMother.role,
      name: marriedPersons.bridesMother.name,
      subName: marriedPersons.bridesMother.subName,
      phoneNumber: marriedPersons.bridesMother.phoneNumber,
    },
  ];

  return (
    <TranslucentMobileModal
      title={
        <Stack>
          <Typography sx={{ color: '#bbbbbb', fontFamily: 'Crimson Pro', fontSize: '1rem' }}>
            Contact
          </Typography>
          <Typography sx={{ color: '#eeeeee', fontSize: '1.1rem' }}>연락처 정보</Typography>
        </Stack>
      }
      isOpen={isCallInfoOpen}
      onClose={onClose}
      sx={{ backgroundColor: 'rgba(128,128,128,0.5)', backdropFilter: 'blur(10px)' }}
    >
      <Stack sx={{ width: '100%', height: '100%', alignItems: 'center', pt: 14, gap: 10 }}>
        <CallInfoSection
          title='신랑측'
          icon={Face6Icon}
          color={'#5ba2ed'}
          callInfo={callInfoGroom}
        />
        <CallInfoSection
          title='신부측'
          icon={Face3Icon}
          color={'#e392b8'}
          callInfo={callInfoBride}
        />
      </Stack>
    </TranslucentMobileModal>
  );
}
