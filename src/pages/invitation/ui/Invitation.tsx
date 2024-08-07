import { Stack } from '@mui/joy';

export function Invitation() {
  return (
    <Stack
      sx={{
        minHeight: 660,
        maxHeight: 920,
        minWidth: 360,
        maxWidth: 420,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
      }}
    >
      <Stack component={'section'} sx={{ height: '100%', width: '100%', alignItems: 'center' }}>
        <Stack component={'header'} sx={{ width: '100%', height: 660, alignItems: 'center' }}>
          Header - 메인 사진, 신랑, 신부 정보, 날짜 정보 간략 등
        </Stack>
        <Stack component={'main'} sx={{ width: '100%' }}>
          <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
            Greeting - 소개
          </Stack>
          <Stack component={'section'}>CoupleInfo - 부모님 기준 신랑, 신부 정보</Stack>
          <Stack component={'section'}>DateInfo - 결혼식 날짜 정보</Stack>
          <Stack component={'section'}>Photos - 신랑, 신부 사진</Stack>
          <Stack component={'section'}>Directions - 오시는길, 주차, 대중교통 정보 등</Stack>
          <Stack component={'section'}>Information - 안내사항, 기타 정보</Stack>
          <Stack component={'section'}>AccountInfo - 계좌정보</Stack>
          <Stack component={'section'}>Guestbook - 방명록</Stack>
        </Stack>
        <Stack component={'footer'} sx={{ width: '100%', height: 150, alignItems: 'center' }}>
          Footer - 카톡공유, 링크주소 복사 등
        </Stack>
      </Stack>
    </Stack>
  );
}
