import { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/joy';
import { Carousel } from 'react-responsive-carousel';

import { TranslucentMobileModal } from '@/shared/components';
import { galleryItems } from '@/entities/invitation';
import { timeoutAction } from '@/shared/lib';

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

  useEffect(() => {
    setCurrentIndex(targetGalleryIndex);
    timeoutAction(() => {
      setTransitionTime(300);
    }, 300);
  }, [targetGalleryIndex]);

  const closeModal = () => {
    onClose();
    setTransitionTime(0);
  };

  return (
    <TranslucentMobileModal
      title={''}
      isOpen={isGalleryPreviewOpen}
      onClose={closeModal}
      sx={{ backgroundColor: '#ffffff', width: '100%', height: '100%' }}
      closeIconColor={'#999999'}
    >
      <Stack sx={{ position: 'relative', width: '100%', height: '100%' }}>
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
