import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/joy';
import { motion } from 'framer-motion';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { AnimatedSection, galleryItems, SectionHeader } from '@/entities/invitation';
import { GalleryPreviewModal } from '@/widgets/invitation';

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
  const [maxHeight, setMaxHeight] = useState(defaultMaxHeight);
  const [isGalleryPreviewOpen, setIsGalleryPreviewOpen] = useState(false);
  const [targetGalleryIndex, setTargetGalleryIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const fullHeight = containerRef.current.scrollHeight;
      setMaxHeight(`${fullHeight}px`);
    }
  }, []);

  const handleIsExpanded = (state: boolean) => {
    setIsExpanded(state);
  };

  const openGalleryPreview = useCallback((galleryIndex: number) => {
    setTargetGalleryIndex(galleryIndex);
    setIsGalleryPreviewOpen((prevState) => !prevState);
  }, []);

  const closeGalleryPreview = useCallback(() => {
    setIsGalleryPreviewOpen(false);
  }, []);

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
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
    </Stack>
  );
}

GalleryItems.displayName = 'GalleryItems';
