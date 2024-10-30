export const getWeddingImageSrc = (imageName: string) => {
  return `${import.meta.env.VITE_INVITATION_SERVER_URL}/images/wedding-image/${imageName}`;
};
