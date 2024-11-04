import { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/joy';
import { Carousel } from 'react-responsive-carousel';

import { TranslucentMobileModal } from '@/shared/components';
import { galleryItems } from '@/entities/invitation';
import { timeoutAction } from '@/shared/lib';
import { AnimatePresence, motion } from 'framer-motion';

function RenderDots({ currentIndex }: { currentIndex: number }) {
  const totalDotCount = galleryItems.length;
  const dotSize = 10;
  const activeDotSize = 12;
  const dotSpacing = 8;

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        width: 90,
        left: '50%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        transition: 'transform 0.3s ease-in-out',
        transform: 'translateX(-50%)',
      }}
    >
      {Array.from({ length: totalDotCount }, (_, dotIndex) => (
        <Box
          key={dotIndex}
          sx={{
            display: 'inline-block',
            position: 'relative',
            width: dotIndex === currentIndex ? activeDotSize : dotSize,
            height: dotIndex === currentIndex ? activeDotSize : dotSize,
            left: -(currentIndex * (dotSize + dotSpacing)) + 35,
            borderRadius: '50%',
            margin: `0 ${dotSpacing / 2}px`,
            backgroundColor: dotIndex === currentIndex ? '#333' : '#ccc',
            transition: 'left 0.2s ease-in-out, width 0.2s, height 0.2s, background-color 0.2s',
          }}
        />
      ))}
    </Box>
  );
}

export function GalleryPreviewModal({
  targetGalleryIndex,
  isGalleryPreviewOpen,
  onClose,
}: {
  targetGalleryIndex: number;
  isGalleryPreviewOpen: boolean;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionTime, setTransitionTime] = useState(0);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);

  useEffect(() => {
    if (isGalleryPreviewOpen) {
      setCurrentIndex(targetGalleryIndex);
      timeoutAction(() => {
        setTransitionTime(300);
      }, 600);
      timeoutAction(() => {
        setIsBackgroundVisible(false);
      }, 200);
    }
  }, [isGalleryPreviewOpen, targetGalleryIndex]);

  const closeModal = () => {
    onClose();
    setTransitionTime(0);
    setCurrentIndex(0);
    setIsBackgroundVisible(true);
  };

  return (
    <TranslucentMobileModal
      title={''}
      isOpen={isGalleryPreviewOpen}
      onClose={closeModal}
      sx={{ position: 'relative', backgroundColor: '#ffffff', width: '100%', height: '100%' }}
      closeIconColor={'#999999'}
      isCloseButtonVisible={false}
    >
      <AnimatePresence initial={false}>
        {isBackgroundVisible && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 99999,
              backgroundColor: '#ffffff',
            }}
          />
        )}
      </AnimatePresence>
      <Stack
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Carousel
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          swipeScrollTolerance={4}
          selectedItem={currentIndex}
          transitionTime={transitionTime}
          dynamicHeight={true}
          onChange={(index) => setCurrentIndex(index)}
        >
          {galleryItems.map((galleryItem) => {
            return (
              <img
                key={galleryItem.id}
                src={galleryItem.src}
                alt={`gallery-item-${galleryItem.id}`}
                style={{
                  width: '100%',
                  height: '90%',
                  objectFit: 'cover',
                }}
              />
            );
          })}
        </Carousel>
        <RenderDots currentIndex={currentIndex} />
      </Stack>
    </TranslucentMobileModal>
  );
}
