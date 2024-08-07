import { Stack } from '@mui/joy';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { RouterName } from '@/shared/enum';

export function MainLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(RouterName.INVITATION);
  }, [navigate]);

  return (
    <Stack
      sx={{
        minHeight: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
      }}
    >
      <Outlet />
    </Stack>
  );
}
