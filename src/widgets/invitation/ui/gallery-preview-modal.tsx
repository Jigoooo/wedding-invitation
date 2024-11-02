import { useEffect, useState } from 'react';
import { Stack } from '@mui/joy';
import { Carousel } from 'react-responsive-carousel';

import { TranslucentMobileModal } from '@/shared/components';
import { galleryItems } from '@/entities/invitation';
import { timeoutAction } from '@/shared/lib';

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
      setTransitionTime(200);
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
      <Stack sx={{ width: '100%', height: '100%' }}>
        <Carousel
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          swipeScrollTolerance={3}
          selectedItem={currentIndex}
          transitionTime={transitionTime}
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
                  height: '80%',
                  objectFit: 'cover',
                }}
              />
            );
          })}
        </Carousel>
      </Stack>
    </TranslucentMobileModal>
  );
}
