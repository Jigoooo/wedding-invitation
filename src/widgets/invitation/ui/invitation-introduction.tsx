import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/joy';

import CallIcon from '@mui/icons-material/Call';

import { SoftButton } from '@/shared/ui';
import {
  AnimatedSection,
  getWeddingImageSrc,
  SectionHeader,
  useMarriedPersons,
} from '@/entities/invitation';
import { CallInfoModal } from './call-info-modal.tsx';

export function InvitationIntroduction() {
  const marriedPersons = useMarriedPersons();

  const [isCallInfoOpen, setIsCallInfoOpen] = useState(false);
  const toggleCallInfo = () => {
    setIsCallInfoOpen(!isCallInfoOpen);
  };

  const openCallInfo = () => {
    toggleCallInfo();
  };

  const closeCallInfo = () => {
    toggleCallInfo();
  };

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 4 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'INVITATION'} korTitle={'소중한 분들을 초대합니다'} />
      </AnimatedSection>
      <AnimatedSection>
        <Stack sx={{ gap: 6 }}>
          <Typography
            sx={{
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: 1.4,
              textAlign: 'center',
              lineHeight: 2,
              color: '#666666',
            }}
          >
            인연의 소중함을 깊이새기고
            <br />
            사랑의 신의를 다짐하며
            <br />
            저희들 이제 인생의 길을 함께 가려 합니다.
          </Typography>
          <Typography
            sx={{
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: 1.4,
              textAlign: 'center',
              lineHeight: 2,
              color: '#666666',
            }}
          >
            설레는 새로운 시작의 날
            <br />
            함께 축복해 주시면
            <br />
            더없는 기쁨으로 간직하겠습니다.
          </Typography>
        </Stack>
      </AnimatedSection>
      <AnimatedSection>
        <Box sx={{ width: '100%', px: 2 }}>
          <img
            style={{ width: '100%', borderRadius: 6 }}
            src={getWeddingImageSrc('info-image-origin.webp')}
            alt={'Info'}
          />
        </Box>
        <Stack sx={{ width: '100%', alignItems: 'center', gap: 1, pt: 2 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: 1.4,
            }}
          >
            {marriedPersons.groomsFather.name}
            {marriedPersons.groomsFather.subName !== '' && (
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: 1.4,
                }}
              >
                ({marriedPersons.groomsFather.subName})
              </Typography>
            )}
            &nbsp;&middot;&nbsp;
            {marriedPersons.groomsMother.name}
            {marriedPersons.groomsMother.subName !== '' && (
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: 1.4,
                }}
              >
                ({marriedPersons.groomsMother.subName})
              </Typography>
            )}
            <Typography
              sx={{
                fontSize: '0.9rem',
                fontWeight: 500,
              }}
            >
              &nbsp;의 장남&nbsp;
            </Typography>
            {marriedPersons.groom.name}
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: 1.4,
            }}
          >
            {marriedPersons.bridesFather.name}
            {marriedPersons.bridesFather.subName !== '' && (
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: 1.4,
                }}
              >
                ({marriedPersons.bridesFather.subName})
              </Typography>
            )}
            &nbsp;&middot;&nbsp;
            {marriedPersons.bridesMother.name}
            {marriedPersons.bridesMother.subName !== '' && (
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: 1.4,
                }}
              >
                ({marriedPersons.bridesMother.subName})
              </Typography>
            )}
            <Typography
              sx={{
                fontSize: '0.9rem',
                fontWeight: 500,
              }}
            >
              &nbsp;의 장녀&nbsp;
            </Typography>
            {marriedPersons.bride.name}
          </Typography>
        </Stack>
      </AnimatedSection>
      <AnimatedSection>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SoftButton
            onClick={openCallInfo}
            sx={{
              width: '60%',
              height: 45,
              borderRadius: 25,
              color: '#666666',
              border: '1px solid #dadada',
            }}
            buttonColor={'#ffffff'}
            startDecorator={<CallIcon />}
          >
            연락하기
          </SoftButton>
        </Box>
      </AnimatedSection>
      <CallInfoModal isCallInfoOpen={isCallInfoOpen} onClose={closeCallInfo} />
    </Stack>
  );
}
