import { Box, Stack, Typography } from '@mui/joy';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationComplete = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <Stack
          component={motion.div}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          onAnimationComplete={handleAnimationComplete}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 0.8,
            }}
          >
            {['지우, ', '지영의 ', '결혼식에 ', '초대합니다.'].map((text, index) => (
              <Typography
                component={motion.span}
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.5, duration: 0.3 }}
                style={{
                  display: 'inline-block',
                  color: '#ffffff',
                  fontSize: '1rem',
                  textAlign: 'center',
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Stack>
      )}
    </>
  );
}
