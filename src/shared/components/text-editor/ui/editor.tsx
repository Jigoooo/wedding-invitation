import { Box } from '@mui/joy';

import { useCustomedQuill } from '@/shared/hooks';

export function Editor({
  containerId,
  placeholder,
  minHeight = 200,
  height = 200,
  onChange,
}: {
  containerId: string;
  placeholder?: string;
  minHeight?: number | string;
  height?: number | string;
  onChange?: (innerHTML: string) => void;
}) {
  const { quillRef } = useCustomedQuill({ containerId, placeholder, onChange });

  return <Box ref={quillRef} sx={{ minHeight, height }} />;
}
