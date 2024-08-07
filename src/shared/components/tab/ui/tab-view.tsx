import React from 'react';
import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

type TabIndexType = string | number | null;

interface FuturTabViewProps {
  labels: string[];
  children: React.ReactNode[];
  selectedIndex: TabIndexType;
  onIndexChange: (index: TabIndexType) => void;
}

export function TabView({ labels, children, selectedIndex, onIndexChange }: Readonly<FuturTabViewProps>) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: -2,
        overflowX: 'hidden',
      }}
    >
      <Tabs
        sx={{ width: '100%' }}
        aria-label='Scrollable tabs'
        value={selectedIndex}
        onChange={(_event, value) => onIndexChange(value)}
      >
        <TabList
          sx={{
            overflow: 'auto',
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': { display: 'none' },
            pt: 1,
            [`&& .${tabClasses.root}`]: {
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                '&::after': {
                  height: 2,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          {labels.map((label, index) => (
            <Tab sx={{ flex: 'none', scrollSnapAlign: 'start' }} key={index}>
              {label}
            </Tab>
          ))}
        </TabList>
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.surface,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
          })}
        >
          {children.map((child, index) => (
            <TabPanel key={index} value={index}>
              {child}
            </TabPanel>
          ))}
        </Box>
      </Tabs>
    </Box>
  );
}
