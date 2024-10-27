import { Box, Stack, Typography } from '@mui/joy';
import { AnimatedSection, SectionHeader } from '@/entities/invitation';
import { useEffect, useRef, useState } from 'react';

export function WeddingInformationAndInstructions() {
  const [activeTab, setActiveTab] = useState(0);

  const [contentHeight, setContentHeight] = useState('auto');

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    if (contentRefs.current[activeTab]) {
      setContentHeight(`${contentRefs.current[activeTab]?.offsetHeight}px`);
    }
  }, [activeTab]);

  const tabContents = [
    {
      label: '주차안내',
      content: (
        <Typography
          sx={{
            fontSize: '0.9rem',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 2,
          }}
        >
          주차비는 무료이므로
          <br />
          따로 주차권이 필요하지 않습니다.
          <br />
          예식장과 가까운쪽인 루체오빌에 주차하시면
          <br />
          더욱 편하게 이동하실 수 있습니다.
          <br />
          <br />
          주차장 진입로가 막힐 수 있으니
          <br />
          여유롭게 와주시면 감사하겠습니다.
        </Typography>
      ),
    },
    {
      label: '식사안내',
      content: (
        <Typography
          sx={{
            fontSize: '0.9rem',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 2,
          }}
        >
          식사는 결혼식 및 사진촬영이 끝난 후
          <br />
          웨딩홀 2층에서 뷔페식으로 진행됩니다.
          <br />
          <br />
          부족함 없이 즐기실 수 있도록
          <br />
          한식을 비롯해 중식, 양식, 일식 등
          <br />
          다양한 메뉴가 준비되어 있습니다.
        </Typography>
      ),
    },
  ];

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'INFORMATION'} korTitle={'예식정보 및 안내사항'} />
      </AnimatedSection>
      <AnimatedSection>
        <Stack sx={{ width: '100%', px: 4, alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 0.5,
              border: '1px solid #dadada',
              borderBottom: 'none',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            {tabContents.map((tab, index) => (
              <Box
                key={index}
                sx={[
                  {
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    padding: 1,
                    backgroundColor: activeTab === index ? 'transparent' : '#eeeeee',
                    width: '50%',
                  },
                  index === 0 && {
                    borderTopLeftRadius: 8,
                  },
                  index === tabContents.length - 1 && {
                    borderTopRightRadius: 8,
                  },
                ]}
                onClick={() => handleTabClick(index)}
              >
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 900,
                    color: activeTab === index ? '#000000' : '#999999',
                  }}
                >
                  {tab.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              height: contentHeight,
              border: '1px solid #dadada',
              borderTop: 'none',
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              transition: 'height 0.5s ease',
            }}
          >
            {tabContents.map((tab, index) => (
              <Box
                key={index}
                ref={(el) => {
                  if (el instanceof HTMLDivElement) {
                    contentRefs.current[index] = el;
                  }
                }}
                sx={{
                  width: '100%',
                  position: 'absolute',
                  paddingBlock: 4,
                  top: 0,
                  left: `${index === activeTab ? 0 : index < activeTab ? '-100%' : '100%'}`,
                  transition: 'left 0.5s ease',
                }}
              >
                {activeTab === index && tab.content}
              </Box>
            ))}
          </Box>
        </Stack>
      </AnimatedSection>
    </Stack>
  );
}
