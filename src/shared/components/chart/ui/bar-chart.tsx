import { Bar } from 'react-chartjs-2';

import { FuturBarChartProps } from '@/shared/components/chart';

export function BarChart({ options, data, height, width }: FuturBarChartProps) {
  return (
    <div style={{ height, width }}>
      <Bar height={'100%'} width={'100%'} options={options} data={data} />
    </div>
  );
}
