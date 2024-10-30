import { useState } from 'react';
import { Box, Stack, Typography, Card } from '@mui/joy';
import { Outlet, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { RouterName } from '@/shared/enum';
import { AnimatedSection, SectionHeader, useFetchGuestbook } from '@/entities/invitation';
import { TranslucentMobileModal } from '@/shared/components';
import { SoftButton } from '@/shared/ui';

const defaultDisplayCount = 3;

export function Guestbook() {
  const navigate = useNavigate();
  const guestbooks = useFetchGuestbook();
  console.log(guestbooks.data?.data);

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
    {
      id: 3,
      name: '이름',
      content: '내용',
      date: '2024.12.14',
    },
    {
      id: 4,
      name: '이름',
      content: '내용',
      date: '2024.12.14',
    },
    {
      id: 5,
      name: '이름',
      content: '내용',
      date: '2024.12.14',
    },
  ]);
  const [displayCount, setDisplayCount] = useState(defaultDisplayCount);
  const [isGuestbookOpen, setIsGuestbookOpen] = useState(false);

  const isExpanded = guestbookItems.length > displayCount;

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

  const initialDisplayCount = () => {
    setDisplayCount(defaultDisplayCount);
  };

  const handleShowMore = () => {
    setDisplayCount(guestbookItems.length);
  };

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'GUESTBOOK'} korTitle={'방명록'} />
      </AnimatedSection>
      <Stack sx={{ width: '100%', px: 3, gap: 2 }}>
        <AnimatedSection>
          <Stack sx={{ width: '100%', gap: 1.4 }}>
            <AnimatePresence initial={false}>
              {guestbookItems.slice(0, displayCount).map((guestbookItem, index) => {
                return (
                  <motion.div
                    key={guestbookItem.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    layout
                    style={{
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      borderRadius: 8,
                    }}
                  >
                    <Card sx={{ position: 'relative' }} variant={'plain'}>
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
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </Stack>
        </AnimatedSection>
        {isExpanded && (
          <AnimatedSection>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center',
                gap: 0.4,
                py: 1,
              }}
              onClick={isExpanded ? handleShowMore : initialDisplayCount}
            >
              <Typography sx={{ fontSize: '0.84rem' }}>
                {isExpanded ? '전체보기' : '숨기기'}
              </Typography>
              {isExpanded ? (
                <ExpandMoreIcon style={{ fontSize: '1rem' }} />
              ) : (
                <ExpandLessIcon style={{ fontSize: '1rem' }} />
              )}
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