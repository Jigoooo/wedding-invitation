import { useEffect, useMemo, useState } from 'react';
import { Box, Stack, Typography, Card } from '@mui/joy';
import { AnimatePresence, motion } from 'framer-motion';

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { AnimatedSection, SectionHeader, useFetchGuestbook } from '@/entities/invitation';
import { SoftButton } from '@/shared/ui';
import { GuestbookModal } from './guestbook-modal.tsx';
import { GuestbookPasswordConfirmModal } from '@/widgets/invitation';

const defaultDisplayCount = 3;

export function Guestbook() {
  const guestbookResponse = useFetchGuestbook();
  const guestbooks = useMemo(() => {
    return guestbookResponse.data?.data || [];
  }, [guestbookResponse.data?.data]);

  const [displayCount, setDisplayCount] = useState(defaultDisplayCount);
  const [isGuestbookOpen, setIsGuestbookOpen] = useState(false);
  const [isGuestbookPasswordConfirmOpen, setIsGuestbookPasswordConfirmOpen] = useState(false);
  const [targetUserIdx, setTargetUserIdx] = useState(0);

  const [initialExpandable, setInitialExpandable] = useState(false);

  useEffect(() => {
    if (initialExpandable) {
      setDisplayCount(guestbooks.length);
    }
  }, [guestbooks, initialExpandable]);

  const isExpanded = guestbooks.length > displayCount;

  const openGuestbook = () => {
    setIsGuestbookOpen(true);
  };
  const closeGuestbook = () => {
    setIsGuestbookOpen(false);
  };

  const openGuestbookPasswordConfirm = (targetUserIdx: number) => {
    setTargetUserIdx(targetUserIdx);
    setIsGuestbookPasswordConfirmOpen(true);
  };
  const closeGuestbookPasswordConfirm = () => {
    setTargetUserIdx(0);
    setIsGuestbookPasswordConfirmOpen(false);
  };

  const initialDisplayCount = () => {
    setDisplayCount(defaultDisplayCount);
  };

  const handleShowMore = () => {
    setInitialExpandable(true);
    setDisplayCount(guestbooks.length);
  };

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'GUESTBOOK'} korTitle={'방명록'} />
      </AnimatedSection>
      <Stack sx={{ width: '100%', px: 2, gap: 2 }}>
        <AnimatedSection>
          <motion.div
            transition={{ duration: 0.6 }}
            layout
            style={{
              padding: 8,
              width: '100%',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <AnimatePresence>
              {guestbooks.slice(0, displayCount).map((guestbook) => {
                return (
                  <motion.div
                    key={guestbook.userIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    layout
                  >
                    <Card
                      sx={{
                        position: 'relative',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: 8,
                      }}
                      variant={'plain'}
                    >
                      <Stack sx={{ width: '100%', gap: 0.8 }}>
                        <Typography sx={{ width: '70%', fontSize: '0.9rem', fontWeight: 900 }}>
                          {guestbook.userName}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.86rem',
                            fontWeight: 700,
                            color: '#666666',
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {guestbook.content}
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
                        onClick={() => openGuestbookPasswordConfirm(guestbook.userIdx)}
                      >
                        <Typography sx={{ fontSize: '0.76rem', fontWeight: 700, color: '#999999' }}>
                          {guestbook.insertDt}
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
          </motion.div>
        </AnimatedSection>
        <AnimatedSection>
          <AnimatePresence>
            {isExpanded && (
              <Box
                component={motion.div}
                initial={{ opacity: 0, height: 'auto' }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                layout
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'center',
                  gap: 0.4,
                  px: 1,
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
            )}
          </AnimatePresence>
        </AnimatedSection>
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
      <GuestbookPasswordConfirmModal
        targetUserIdx={targetUserIdx}
        isGuestbookPasswordConfirmOpen={isGuestbookPasswordConfirmOpen}
        onClose={closeGuestbookPasswordConfirm}
      />
    </Stack>
  );
}
