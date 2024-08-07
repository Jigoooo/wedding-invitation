export const mobileContentVariants = {
  // hidden: { x: 0 },
  // visible: { x: 0 },
  // exit: { x: 0 },
  hidden: { x: '-100vw' },
  visible: { x: 0, transition: { type: 'spring', duration: 0.5 } },
  exit: { x: '-100vw', transition: { type: 'spring', duration: 0.5 } },
};

export const mobileOneDepthVariants = {
  hidden: { x: '100vw' },
  visible: { x: 0, transition: { type: 'spring', duration: 0.5 } },
  exit: { x: '100vw', transition: { type: 'spring', duration: 0.5 } },
};

export const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};
