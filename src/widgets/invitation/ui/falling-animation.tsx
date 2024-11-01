import Snowfall from 'react-snowfall';
import { memo, useEffect, useState } from 'react';

import { timeoutAction } from '@/shared/lib';

export const FallingAnimation = memo(() => {
  const [snowSpeed, setSnowSpeed] = useState<[number, number]>([6.0, 7.0]);

  useEffect(() => {
    timeoutAction(() => setSnowSpeed([1.0, 2.0]), 300);
  }, []);

  return (
    <Snowfall
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 300,
        height: 6600,
        width: '100%',
        background: 'transparent',
      }}
      radius={[1, 2.5]}
      rotationSpeed={[-1.0, 1.0]}
      speed={snowSpeed}
      wind={[-0.5, 1.5]}
      snowflakeCount={100}
      color={'#d1d7f3'}
    />
  );
});

FallingAnimation.displayName = 'FallingAnimation';
