import gallery_1 from '@/shared/assets/images/gallery/gallery_1.webp';
import gallery_2 from '@/shared/assets/images/gallery/gallery_2.webp';
import gallery_3 from '@/shared/assets/images/gallery/gallery_3.webp';
import gallery_4 from '@/shared/assets/images/gallery/gallery_4.webp';
import gallery_5 from '@/shared/assets/images/gallery/gallery_5.webp';
import gallery_6 from '@/shared/assets/images/gallery/gallery_6.webp';
import gallery_7 from '@/shared/assets/images/gallery/gallery_7.webp';
import gallery_8 from '@/shared/assets/images/gallery/gallery_8.webp';
import gallery_9 from '@/shared/assets/images/gallery/gallery_9.webp';
import gallery_10 from '@/shared/assets/images/gallery/gallery_10.webp';

export const getWeddingImageSrc = (imageName: string) => {
  return `${import.meta.env.VITE_INVITATION_IMAGE_SERVER_URL}/wedding-image/${imageName}`;
};

export const galleryItems = [
  { id: 1, src: gallery_1, cols: 1, rows: 1 },
  { id: 2, src: gallery_2, cols: 1, rows: 2 },
  { id: 3, src: gallery_3, cols: 1, rows: 2 },
  { id: 4, src: gallery_4, cols: 1, rows: 1 },
  { id: 5, src: gallery_5, cols: 1, rows: 1 },
  { id: 6, src: gallery_6, cols: 1, rows: 1 },
  { id: 7, src: gallery_7, cols: 1, rows: 1 },
  { id: 8, src: gallery_8, cols: 1, rows: 1 },
  { id: 9, src: gallery_9, cols: 1, rows: 1 },
  { id: 10, src: gallery_10, cols: 1, rows: 1 },
];
