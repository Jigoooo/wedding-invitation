import { useState } from 'react';
import { Box, Grid, Stack } from '@mui/joy';
import { AnimatedSection, getWeddingImageSrc, SectionHeader } from '@/entities/invitation';

export function Gallery() {
  const [imageData] = useState([
    { id: 1, src: getWeddingImageSrc('header-image-origin.webp'), cols: 1, rows: 1 },
    { id: 2, src: getWeddingImageSrc('header-image-origin.webp'), cols: 1, rows: 2 },
    { id: 3, src: getWeddingImageSrc('header-image-origin.webp'), cols: 1, rows: 2 },
    { id: 4, src: getWeddingImageSrc('header-image-origin.webp'), cols: 1, rows: 1 },
    { id: 5, src: getWeddingImageSrc('header-image-origin.webp'), cols: 1, rows: 1 },
    { id: 6, src: getWeddingImageSrc('header-image-origin.webp'), cols: 1, rows: 1 },
  ]);

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 6 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'GALLERY'} korTitle={'갤러리'} />
      </AnimatedSection>

      <Grid
        container
        spacing={2}
        sx={{
          display: 'grid',
          width: '90%',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridAutoRows: '150px',
          gap: '8px',
        }}
      >
        {imageData.map((item) => (
          <Box
            key={item.id}
            sx={{
              gridColumn: `span ${item.cols}`,
              gridRow: `span ${item.rows}`,
              overflow: 'hidden',
              borderRadius: 6,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={item.src}
              alt={`gallery-item-${item.id}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Grid>
    </Stack>
  );
}
