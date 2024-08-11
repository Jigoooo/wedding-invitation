import { ReactNode } from 'react';
import { Box, Divider, IconButton, Tooltip } from '@mui/joy';
import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

import { MODAL_Z_INDEX } from '@/shared/constants';
import { SxProps } from '@mui/joy/styles/types';

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  defaultSize?: {
    width?: number | string;
    height?: number | string;
  };
  minSize?: {
    width?: number | string;
    height?: number | string;
  };
  maxSize?: {
    width?: number | string;
    height?: number | string;
  };
  sx?: SxProps;
  children: ReactNode;
};

const modalHeaderHeight = 80;

export function TranslucentMobileModal({ isOpen, onClose, title, sx, children }: ModalType) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: MODAL_Z_INDEX - 1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: MODAL_Z_INDEX,
            }}
            initial={{ opacity: 0.5, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Box
              sx={[
                {
                  px: 3,
                  pb: 3,
                  width: '100%',
                  height: '100%',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
              ]}
            >
              <ModalHeader title={title} onClose={onClose} />
              <Divider />
              <Box
                sx={{
                  overflow: 'auto',
                  height: `calc(100% - ${modalHeaderHeight}px)`,
                }}
              >
                {children}
              </Box>
            </Box>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ModalHeader({ title, onClose }: { title: ReactNode; onClose: () => void }) {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        pt: 3,
        pb: 1.4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: modalHeaderHeight,
      }}
    >
      {title}
      <Tooltip title={'닫기'} placement={'top'}>
        <IconButton onClick={onClose} color={'neutral'}>
          <CloseIcon style={{ fontSize: 32 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
