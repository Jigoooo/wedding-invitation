import { Box, Divider, Stack, Typography } from '@mui/joy';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  getDate,
} from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect, useState } from 'react';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const calendarData = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, null, null, null, null],
];

export function WeddingCalendar({ weddingDate }: { weddingDate: Date }) {
  const weddingDay = getDate(weddingDate);

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: 400,
        margin: 'auto',
        backgroundColor: 'transparent',
        borderRadius: 2,
        px: 4,
        py: 6,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography sx={{ fontSize: '1.3rem', letterSpacing: 1.8, fontWeight: 'bold' }}>
          {format(weddingDate, 'yyyy. MM. dd.')}
        </Typography>
        <Typography sx={{ fontSize: '0.9rem', letterSpacing: 1.8, marginTop: 1 }}>
          {`${format(weddingDate, 'EEEE', { locale: ko })} 오후 1시`}
        </Typography>
      </Box>
      <Divider />
      <Stack
        sx={{
          width: '100%',
          py: 2,
        }}
      >
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          {daysOfWeek.map((day) => (
            <Typography
              key={day}
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 32,
                height: 32,
                color: day === '일' ? 'crimson' : 'inherit',
              }}
            >
              {day}
            </Typography>
          ))}
        </Box>

        {calendarData.map((week, index) => (
          <Box
            key={index}
            sx={{ mt: 1, display: 'flex', width: '100%', justifyContent: 'space-between' }}
          >
            {week.map((day, dayIndex) =>
              day ? (
                <Box
                  key={dayIndex}
                  sx={{
                    pl: 0.3,
                    width: 32,
                    height: 32,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '50%',
                    backgroundColor: day === weddingDay ? '#f79e9e' : 'transparent',
                    color: dayIndex === 0 ? 'crimson' : day === weddingDay ? 'white' : 'inherit',
                    fontWeight: day === weddingDay ? 'bold' : 'normal',
                    letterSpacing: 1.2,
                  }}
                >
                  {day}
                </Box>
              ) : (
                <Box key={dayIndex} sx={{ pl: 0.3, width: 32, height: 32, letterSpacing: 1.2 }} />
              ),
            )}
          </Box>
        ))}
      </Stack>
      <Divider />

      <WeddingCountdownTimer weddingDate={weddingDate} />
    </Stack>
  );
}

function WeddingCountdownTimer({ weddingDate }: { weddingDate: Date }) {
  const { days, hours, minutes, seconds } = useCountdown(weddingDate);

  const timeUnits = [
    { label: '일', value: days },
    { label: '시', value: hours },
    { label: '분', value: minutes },
    { label: '초', value: seconds },
  ];

  return (
    <Stack sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
        }}
      >
        {timeUnits.map((unit, index) => (
          <Box key={unit.label} sx={{ display: 'flex', alignItems: 'center' }}>
            <Stack
              sx={{
                alignItems: 'center',
                width: 60,
                py: 1,
                backgroundColor: '#faeeee',
                borderRadius: 12,
                gap: 0.5,
              }}
            >
              <Typography sx={{ fontSize: '0.8rem', color: '#666666', fontWeight: 600 }}>
                {unit.label}
              </Typography>
              <Typography sx={{ fontSize: '1rem', color: '#666666', fontWeight: 800 }}>
                {unit.value}
              </Typography>
            </Stack>
            {index < timeUnits.length - 1 && <Typography sx={{ pt: 2.2, mx: 1 }}>:</Typography>}
          </Box>
        ))}
      </Box>
      <Typography>
        지우 <Typography sx={{ color: '#ec6e6e', fontWeight: 800 }}>&hearts;</Typography> 지영의
        결혼식이 <Typography sx={{ color: '#ec6e6e', fontWeight: 800 }}>{days + 1}</Typography>일
        남았습니다.
      </Typography>
    </Stack>
  );
}

function useCountdown(targetDate: Date) {
  const calculateTimeLeft = () => {
    const now = new Date();

    return {
      days: differenceInDays(targetDate, now),
      hours: differenceInHours(targetDate, now) % 24,
      minutes: differenceInMinutes(targetDate, now) % 60,
      seconds: differenceInSeconds(targetDate, now) % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
