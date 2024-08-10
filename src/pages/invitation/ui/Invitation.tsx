import 'react-lazy-load-image-component/src/effects/blur.css';

import { useEffect, useRef, useState } from 'react';
import { Stack } from '@mui/joy';

import { FallingAnimation, InvitationHeader, InvitationIntroduction } from '@/widgets/invitation';

const WEDDING_DATE = '2024.12.14';
const WEDDING_DAY = 'SATURDAY';

const MAX_WIDTH = 470;

export function Invitation() {
  const { outerRef, headerImageHeight, infoImageHeight } = useImageHeights(MAX_WIDTH);

  return (
    <Stack
      className={'selection-none'}
      ref={outerRef}
      sx={{
        minWidth: 360,
        maxWidth: MAX_WIDTH,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
        position: 'relative',
        px: 1,
        gap: 14,
      }}
    >
      <FallingAnimation />
      <InvitationHeader
        weddingDate={WEDDING_DATE}
        weddingDay={WEDDING_DAY}
        headerImageHeight={headerImageHeight}
      />
      <Stack component={'main'} sx={{ width: '100%', alignItems: 'center', gap: 14 }}>
        <InvitationIntroduction infoImageHeight={infoImageHeight} />
        <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
          DateInfo - 결혼식 날짜 정보
        </Stack>
        <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
          Photos - 신랑, 신부 사진
        </Stack>
        <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
          Directions - 오시는길, 주차, 대중교통 정보 등
        </Stack>
        <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
          Information - 안내사항, 기타 정보
        </Stack>
        <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
          AccountInfo - 계좌정보
        </Stack>
        <Stack component={'section'} sx={{ width: '100%', height: 300, alignItems: 'center' }}>
          Guestbook - 방명록
        </Stack>
      </Stack>
      <Stack component={'footer'} sx={{ width: '100%', height: 150, alignItems: 'center' }}>
        Footer - 카톡공유, 링크주소 복사 등
      </Stack>
    </Stack>
  );
}

const useImageHeights = (maxWidth: number) => {
  const defaultHeaderImageHeight = 670;
  const defaultInfoImageHeight = 350;

  const outerRef = useRef<HTMLDivElement>(null);
  const [headerImageHeight, setHeaderImageHeight] = useState(defaultHeaderImageHeight);
  const [infoImageHeight, setInfoImageHeight] = useState(defaultInfoImageHeight);

  useEffect(() => {
    if (!outerRef.current) return;

    const handleResize = () => {
      if (outerRef.current) {
        const width = outerRef.current.offsetWidth;
        const newHeaderImageHeight = (width / maxWidth) * defaultHeaderImageHeight;
        setHeaderImageHeight(newHeaderImageHeight);
        const newInfoImageHeight = (width / maxWidth) * defaultInfoImageHeight;
        setInfoImageHeight(newInfoImageHeight);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(outerRef.current);

    handleResize();

    return () => {
      if (outerRef.current) {
        resizeObserver.unobserve(outerRef.current);
      }
    };
  }, []);

  return { outerRef, headerImageHeight, infoImageHeight };
};
