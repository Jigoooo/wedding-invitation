import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/joy';
import { motion, AnimatePresence } from 'framer-motion';

export function ToggleButtonGroup({
  label,
  options,
  groupKey,
  onChange,
  buttonWidth = 100,
}: {
  label: string;
  options: { key: string | number; value: string | number }[];
  groupKey: string | number;
  onChange?: (value: string | number) => void;
  buttonWidth?: number;
}) {
  const [selectedKey, setSelectedKey] = useState<string | number>(groupKey);
  const [bgPosition, setBgPosition] = useState(0);

  useEffect(() => {
    const selectedIndex = options.findIndex((option) => option.key === selectedKey);
    if (selectedIndex !== -1) {
      setBgPosition(selectedIndex * buttonWidth);
    }
  }, [selectedKey, options, buttonWidth]);

  const handleChange = (newValue: string | number) => {
    setSelectedKey(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Stack className={'selection-none'}>
      <Typography sx={{ fontSize: '0.8rem', color: '#888888', fontWeight: 700 }}>{label}</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#efefef',
          borderRadius: 6,
          position: 'relative',
        }}
      >
        <AnimatePresence>
          <motion.div
            key={selectedKey}
            initial={{ x: bgPosition }}
            animate={{ x: bgPosition }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'absolute',
              left: 0,
              width: buttonWidth,
              height: '100%',
              backgroundColor: '#1976d2',
              borderRadius: 6,
            }}
          />
        </AnimatePresence>
        {options.map((option) => (
          <Box
            key={option.key}
            onClick={() => handleChange(option.key)}
            sx={{
              position: 'relative',
              zIndex: 1,
              py: 0.6,
              borderRadius: 4,
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '0.9rem',
              color: selectedKey === option.key ? '#ffffff' : '#000000',
              width: buttonWidth,
              textAlign: 'center',
              transition: 'color 0.3s ease-in-out',
            }}
          >
            {option.value}
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
