import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/joy';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Face6Icon from '@mui/icons-material/Face6';
import Face3Icon from '@mui/icons-material/Face3';
import { openPhoneApp, openSmsApp } from '@/shared/lib';

interface CallInfo {
  role: string;
  name: string;
  phoneNumber: string;
}

interface CallInfoSectionProps {
  title: string;
  icon: React.ElementType;
  color: string;
  callInfo: CallInfo[];
}

const callInfoGroom: CallInfo[] = [
  { role: '신랑', name: '김지우', phoneNumber: '010-2355-7934' },
  { role: '신랑 아버지', name: '김광태', phoneNumber: '010-9800-7934' },
  { role: '신랑 어머니', name: '최정남', phoneNumber: '010-2634-7934' },
];

const callInfoBride: CallInfo[] = [
  { role: '신부', name: '김지영', phoneNumber: '010-2355-7934' },
  { role: '신부 아버지', name: '김상돈', phoneNumber: '010-6404-1618' },
  { role: '신부 어머니', name: '박지효', phoneNumber: '010-2856-3567' },
];

function CallInfoSection({ title, icon: Icon, color, callInfo }: CallInfoSectionProps) {
  return (
    <Stack sx={{ width: '100%', px: 2, gap: 3 }}>
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
              width: '25%',
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

export function InvitationCallInfo() {
  return (
    <Stack sx={{ width: '100%', height: '100%', alignItems: 'center', pt: 14, gap: 10 }}>
      <CallInfoSection title='신랑측' icon={Face6Icon} color={'#5ba2ed'} callInfo={callInfoGroom} />
      <CallInfoSection title='신부측' icon={Face3Icon} color={'#e392b8'} callInfo={callInfoBride} />
    </Stack>
  );
}
