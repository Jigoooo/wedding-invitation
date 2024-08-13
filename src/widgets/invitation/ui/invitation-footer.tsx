import { Box, Stack, Typography } from '@mui/joy';

import KakaoTalkIcon from '@/shared/assets/images/kakao-talk-icon.png';
import FuturIcon from '@/shared/assets/images/futur_logo.svg?react';
import LinkIcon from '@mui/icons-material/Link';
import { copyToClipboard } from '@/shared/lib';
import { showSnackBar } from '@/shared/components';

export function InvitationFooter({ linkUrl }: { linkUrl: string }) {
  return (
    <Stack sx={{ width: '100%', alignItems: 'center', gap: 3, py: 2 }}>
      <Stack sx={{ width: '100%', alignItems: 'center', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={KakaoTalkIcon} style={{ width: 16 }} alt={''} />
          <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
            카카오톡으로 초대장 공유하기
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          onClick={() =>
            copyToClipboard(linkUrl, () => {
              showSnackBar({
                message: '링크 주소가 복사되었습니다.',
                variant: 'plain',
                duration: 1500,
              });
            })
          }
        >
          <LinkIcon />
          <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>링크주소 복사하기</Typography>
        </Box>
      </Stack>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontSize: '0.7rem',
            fontWeight: 600,
            color: '#666666',
          }}
        >
          ⓒ 2024. CopyRight <FuturIcon width={16} height={16} /> Futur All Rights Reserved.
        </Typography>
      </Box>
    </Stack>
  );
}
