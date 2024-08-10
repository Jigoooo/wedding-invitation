import Snowfall from 'react-snowfall';
import { useEffect, useState } from 'react';
import { timeoutAction } from '@/shared/lib';

export function FallingAnimation() {
  const [snowSpeed, setSnowSpeed] = useState<[number, number]>([5.0, 6.0]);

  useEffect(() => {
    timeoutAction(() => setSnowSpeed([1.0, 2.0]), 300);
  }, []);

  return (
    <Snowfall
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999,
        height: '100%',
        width: '100%',
        background: 'transparent',
      }}
      radius={[1, 2]}
      rotationSpeed={[-1.0, 1.0]}
      speed={snowSpeed}
      wind={[-0.5, 1.0]}
      snowflakeCount={100}
      color={'#cad3f4'}
    />
  );
}
