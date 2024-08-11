import { Box, Stack, Typography } from '@mui/joy';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const calendarData = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, null, null, null, null],
];

export function WeddingCalendar() {
  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
        backgroundColor: '#f4f4f4',
        borderRadius: 2,
      }}
    >
      <Stack sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>2024.10.19</Typography>
        <Typography sx={{ fontSize: '16px', marginTop: 1 }}>
          토요일
          <br />
          오전 11시 30분
        </Typography>
      </Stack>

      <Stack direction='row' justifyContent='space-between'>
        {daysOfWeek.map((day) => (
          <Typography key={day} sx={{ fontWeight: 'bold' }}>
            {day}
          </Typography>
        ))}
      </Stack>

      {calendarData.map((week, index) => (
        <Stack direction='row' justifyContent='space-between' key={index} sx={{ marginTop: 1 }}>
          {week.map((day, dayIndex) =>
            day ? (
              <Box
                key={dayIndex}
                sx={{
                  width: 36,
                  height: 36,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  backgroundColor: day === 14 ? 'primary.main' : 'transparent',
                  color: day === 14 ? 'white' : 'inherit',
                  fontWeight: day === 14 ? 'bold' : 'normal',
                }}
              >
                {day}
              </Box>
            ) : (
              <Box key={dayIndex} sx={{ width: 36, height: 36 }} />
            ),
          )}
        </Stack>
      ))}
    </Stack>
  );
}
