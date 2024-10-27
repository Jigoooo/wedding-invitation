import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/joy';
import { Outlet, useNavigate } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import { RouterName } from '@/shared/enum';
import { AnimatedSection, SectionHeader } from '@/entities/invitation';
import { TranslucentMobileModal } from '@/shared/components';
import { SoftButton } from '@/shared/ui';
import Card from '@mui/joy/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Guestbook() {
  const navigate = useNavigate();

  const [guestbookItems] = useState([
    {
      id: 1,
      name: '이름',
      content:
        '결혼축하\n결혼축하결혼축하결혼축하결혼축하\n결혼축하결혼축하\n결혼축하결혼축하결혼축하결\n혼축하',
      date: '2024.12.14',
    },
    {
      id: 2,
      name: '이름',
      content: '내용',
      date: '2024.12.14',
    },
  ]);
  const [displayCount, setDisplayCount] = useState(3);
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

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + 3); // 3개씩 더 표시
  };

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'GUESTBOOK'} korTitle={'방명록'} />
      </AnimatedSection>
      <Stack sx={{ width: '100%', px: 3, gap: 2 }}>
        <AnimatedSection>
          <Stack sx={{ width: '100%', gap: 1 }}>
            {guestbookItems.map((guestbookItem) => {
              return (
                <Card key={guestbookItem.id} sx={{ position: 'relative' }}>
                  <Stack sx={{ width: '100%', gap: 0.8 }}>
                    <Typography sx={{ width: '70%', fontSize: '0.84rem', fontWeight: 900 }}>
                      {guestbookItem.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        color: '#666666',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {guestbookItem.content}
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 10,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontSize: 18,
                      color: '#999999',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.76rem', fontWeight: 700, color: '#999999' }}>
                      {guestbookItem.date}
                    </Typography>
                    <CloseIcon
                      sx={{
                        fontSize: 18,
                        color: '#999999',
                      }}
                    />
                  </Box>
                </Card>
              );
            })}
          </Stack>
        </AnimatedSection>
        {guestbookItems.length > displayCount && (
          <AnimatedSection>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
              <SoftButton
                onClick={handleShowMore}
                sx={{
                  height: 45,
                  borderRadius: 25,
                  color: '#666666',
                  border: '1px solid #dadada',
                }}
                buttonColor={'#ffffff'}
                startDecorator={<ExpandMoreIcon style={{ color: '#999999' }} />}
              >
                더보기
              </SoftButton>
            </Box>
          </AnimatedSection>
        )}
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
