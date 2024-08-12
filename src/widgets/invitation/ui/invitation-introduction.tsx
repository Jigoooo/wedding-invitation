import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/joy';

import CallIcon from '@mui/icons-material/Call';

import { SoftButton } from '@/shared/ui';
import { RouterName } from '@/shared/enum';
import { AnimatedSection, getWeddingImageSrc, SectionHeader } from '@/entities/invitation';
import { TranslucentMobileModal } from '@/shared/components';

export function InvitationIntroduction() {
  const navigate = useNavigate();

  const [isCallInfoOpen, setIsCallInfoOpen] = useState(false);
  const toggleCallInfo = () => {
    setIsCallInfoOpen(!isCallInfoOpen);
  };

  const openCallInfo = () => {
    toggleCallInfo();
    navigate(RouterName.CALL_INFO);
  };

  const closeCallInfo = () => {
    toggleCallInfo();
    navigate(RouterName.INVITATION);
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
            김광태 &middot; 최정남
            <Typography
              sx={{
                fontSize: '0.9rem',
                fontWeight: 500,
              }}
            >
              &nbsp;의 장남&nbsp;
            </Typography>
            김지우
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: 1.4,
            }}
          >
            김상돈 &middot; 박지효
            <Typography
              sx={{
                fontSize: '0.9rem',
                fontWeight: 500,
              }}
            >
              &nbsp;의 장녀&nbsp;
            </Typography>
            김지영
          </Typography>
        </Stack>
      </AnimatedSection>
      <AnimatedSection>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SoftButton
            onClick={openCallInfo}
            sx={{ width: '90%', height: 45, color: '#666666', border: '1px solid #dadada' }}
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

function CallInfoModal({
  isCallInfoOpen,
  onClose,
}: {
  isCallInfoOpen: boolean;
  onClose: () => void;
}) {
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
      <Outlet />
    </TranslucentMobileModal>
  );
}
