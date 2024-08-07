export const AttachmentType = {
  IMG: 'IMG',
  ATTACHMENT: 'ATTACHMENT',
} as const;

export type AttachmentTypeBase = (typeof AttachmentType)[keyof typeof AttachmentType];
