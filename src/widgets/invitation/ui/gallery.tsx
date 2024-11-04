import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/joy';
import { AnimatePresence, motion } from 'framer-motion';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { AnimatedSection, galleryItems, SectionHeader } from '@/entities/invitation';
import { GalleryPreviewModal } from '@/widgets/invitation';
import { timeoutAction } from '@/shared/lib';
import { SolidButton } from '@/shared/ui';

const GalleryItems = memo(
  ({ openGalleryPreview }: { openGalleryPreview: (galleryIndex: number) => void }) => {
    const renderedGalleryItems = useMemo(() => {
      return galleryItems.map((galleryItem, index) => {
        return (
          <Box
            key={galleryItem.id}
            sx={{
              gridColumn: `span ${galleryItem.cols}`,
              gridRow: `span ${galleryItem.rows}`,
              overflow: 'hidden',
              borderRadius: 6,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => openGalleryPreview(index)}
          >
            <img
              src={galleryItem.src}
              alt={`gallery-item-${galleryItem.id}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        );
      });
    }, []);

    return (
      <Grid
        container
        sx={{
          display: 'grid',
          px: 2,
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridAutoRows: '150px',
          gap: '8px',
        }}
      >
        {renderedGalleryItems}
      </Grid>
    );
  },
);

export function Gallery() {
  const defaultMaxHeight = '625px';

  const [isExpanded, setIsExpanded] = useState(false);
  const [wasExpanded, setWasExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(defaultMaxHeight);
  const [isGalleryPreviewOpen, setIsGalleryPreviewOpen] = useState(false);
  const [targetGalleryIndex, setTargetGalleryIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHideButtonVisible, setIsHideButtonVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const fullHeight = containerRef.current.scrollHeight;
      setMaxHeight(`${fullHeight}px`);
    }
  }, []);

  useEffect(() => {
    if (wasExpanded && !isExpanded && headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.scrollBy(0, -50);
    }
    setWasExpanded(isExpanded);
  }, [isExpanded, wasExpanded]);

  const handleIsExpanded = (state: boolean) => {
    setIsExpanded(state);
  };

  const openGalleryPreview = useCallback((galleryIndex: number) => {
    setScrollPosition(window.scrollY);
    setTargetGalleryIndex(galleryIndex);
    setIsGalleryPreviewOpen((prevState) => !prevState);
  }, []);

  const closeGalleryPreview = useCallback(() => {
    setIsGalleryPreviewOpen(false);
    timeoutAction(() => {
      window.scrollTo(0, scrollPosition);
    }, 10);
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top;
        const headerBottom = headerRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        setIsHideButtonVisible(headerBottom > viewportHeight && headerTop < viewportHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Stack
      ref={headerRef}
      component={'section'}
      sx={{ width: '100%', alignItems: 'center', gap: 3 }}
    >
      <AnimatedSection>
        <SectionHeader engTitle={'GALLERY'} korTitle={'갤러리'} />
      </AnimatedSection>

      <motion.div
        layout
        initial={{ height: defaultMaxHeight }}
        animate={{ height: isExpanded ? maxHeight : defaultMaxHeight }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        ref={containerRef}
        style={{ width: '100%', overflow: 'hidden', willChange: 'height' }}
      >
        <GalleryItems openGalleryPreview={openGalleryPreview} />
      </motion.div>
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
          onClick={isExpanded ? () => handleIsExpanded(false) : () => handleIsExpanded(true)}
        >
          <Typography sx={{ fontSize: '0.84rem' }}>{isExpanded ? '숨기기' : '전체보기'}</Typography>
          {isExpanded ? (
            <ExpandLessIcon style={{ fontSize: '1rem' }} />
          ) : (
            <ExpandMoreIcon style={{ fontSize: '1rem' }} />
          )}
        </Box>
      </AnimatedSection>

      <GalleryPreviewModal
        targetGalleryIndex={targetGalleryIndex}
        isGalleryPreviewOpen={isGalleryPreviewOpen}
        onClose={closeGalleryPreview}
      />

      <AnimatePresence initial={false}>
        {isExpanded && isHideButtonVisible && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
              position: 'fixed',
              bottom: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <SolidButton
              sx={{ width: 150, borderRadius: 24, fontWeight: 900 }}
              buttonColor={'#f38585'}
              onClick={() => handleIsExpanded(false)}
            >
              숨기기
            </SolidButton>
          </Box>
        )}
      </AnimatePresence>
    </Stack>
  );
}

GalleryItems.displayName = 'GalleryItems';
