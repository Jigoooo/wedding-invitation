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
import gallery_11 from '@/shared/assets/images/gallery/gallery_11.webp';
import gallery_12 from '@/shared/assets/images/gallery/gallery_12.webp';
import gallery_13 from '@/shared/assets/images/gallery/gallery_13.webp';
import gallery_14 from '@/shared/assets/images/gallery/gallery_14.webp';
import gallery_15 from '@/shared/assets/images/gallery/gallery_15.webp';
import gallery_16 from '@/shared/assets/images/gallery/gallery_16.webp';
import gallery_17 from '@/shared/assets/images/gallery/gallery_17.webp';
import gallery_18 from '@/shared/assets/images/gallery/gallery_18.webp';
import gallery_19 from '@/shared/assets/images/gallery/gallery_19.webp';
import gallery_20 from '@/shared/assets/images/gallery/gallery_20.webp';
import gallery_21 from '@/shared/assets/images/gallery/gallery_21.webp';
import gallery_22 from '@/shared/assets/images/gallery/gallery_22.webp';
import gallery_23 from '@/shared/assets/images/gallery/gallery_23.webp';
import gallery_24 from '@/shared/assets/images/gallery/gallery_24.webp';
import gallery_25 from '@/shared/assets/images/gallery/gallery_25.webp';
import gallery_26 from '@/shared/assets/images/gallery/gallery_26.webp';
import gallery_27 from '@/shared/assets/images/gallery/gallery_27.webp';
import gallery_28 from '@/shared/assets/images/gallery/gallery_28.webp';
import gallery_29 from '@/shared/assets/images/gallery/gallery_29.webp';
import gallery_30 from '@/shared/assets/images/gallery/gallery_30.webp';
import gallery_31 from '@/shared/assets/images/gallery/gallery_31.webp';
import gallery_32 from '@/shared/assets/images/gallery/gallery_32.webp';
import gallery_33 from '@/shared/assets/images/gallery/gallery_33.webp';
import gallery_34 from '@/shared/assets/images/gallery/gallery_34.webp';
import gallery_35 from '@/shared/assets/images/gallery/gallery_35.webp';
import gallery_36 from '@/shared/assets/images/gallery/gallery_36.webp';
import gallery_37 from '@/shared/assets/images/gallery/gallery_37.webp';
import gallery_38 from '@/shared/assets/images/gallery/gallery_38.webp';
import gallery_39 from '@/shared/assets/images/gallery/gallery_39.webp';
import gallery_40 from '@/shared/assets/images/gallery/gallery_40.webp';
import gallery_41 from '@/shared/assets/images/gallery/gallery_41.webp';
import gallery_42 from '@/shared/assets/images/gallery/gallery_42.webp';
import gallery_43 from '@/shared/assets/images/gallery/gallery_43.webp';
import gallery_44 from '@/shared/assets/images/gallery/gallery_44.webp';
import gallery_45 from '@/shared/assets/images/gallery/gallery_45.webp';
import gallery_46 from '@/shared/assets/images/gallery/gallery_46.webp';
import gallery_47 from '@/shared/assets/images/gallery/gallery_47.webp';
import gallery_48 from '@/shared/assets/images/gallery/gallery_48.webp';
import gallery_49 from '@/shared/assets/images/gallery/gallery_49.webp';
import gallery_50 from '@/shared/assets/images/gallery/gallery_50.webp';

export const getWeddingImageSrc = (imageName: string) => {
  return `${import.meta.env.VITE_INVITATION_IMAGE_SERVER_URL}/wedding-image/${imageName}`;
};

export const getReplaceWeddingImageSrc = (imageName: string) => {
  return `${import.meta.env.VITE_INVITATION_SERVER_URL}/images/wedding-image/${imageName}`;
};

const galleryImages = [
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
  gallery_6,
  gallery_7,
  gallery_8,
  gallery_9,
  gallery_10,
  gallery_11,
  gallery_12,
  gallery_13,
  gallery_14,
  gallery_15,
  gallery_16,
  gallery_17,
  gallery_18,
  gallery_19,
  gallery_20,
  gallery_21,
  gallery_22,
  gallery_23,
  gallery_24,
  gallery_25,
  gallery_26,
  gallery_27,
  gallery_28,
  gallery_29,
  gallery_30,
  gallery_31,
  gallery_32,
  gallery_33,
  gallery_34,
  gallery_35,
  gallery_36,
  gallery_37,
  gallery_38,
  gallery_39,
  gallery_40,
  gallery_41,
  gallery_42,
  gallery_43,
  gallery_44,
  gallery_45,
  gallery_46,
  gallery_47,
  gallery_48,
  gallery_49,
  gallery_50,
];

const rowsPattern = [1, 2, 1, 2, 1];

export const galleryItems = galleryImages.map((image, index) => ({
  id: index + 1,
  src: image,
  cols: 1,
  rows: rowsPattern[index % rowsPattern.length],
}));
