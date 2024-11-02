export const getWeddingImageSrc = (imageName: string) => {
  return `${import.meta.env.VITE_INVITATION_IMAGE_SERVER_URL}/wedding-image/${imageName}`;
};
