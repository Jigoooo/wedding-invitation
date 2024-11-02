import { Stack } from '@mui/joy';
import { TranslucentMobileModal } from '@/shared/components';
import { galleryItems } from '@/entities/invitation';

export function GalleryPreviewModal({
  targetGalleryIndex,
  isGalleryPreviewOpen,
  onClose,
}: {
  targetGalleryIndex: number;
  isGalleryPreviewOpen: boolean;
  onClose: () => void;
}) {
  console.log(targetGalleryIndex);
  console.log(galleryItems);
  const closeModal = () => {
    onClose();
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
        <img
          src={galleryItems[targetGalleryIndex].src}
          alt={`gallery-item-${galleryItems[targetGalleryIndex].id}`}
          style={{
            width: '100%',
            height: '80%',
            objectFit: 'cover',
          }}
        />
      </Stack>
    </TranslucentMobileModal>
  );
}
