import { Scatter } from 'react-chartjs-2';

import { FuturScatterChartProps } from '@/shared/components/chart';

export function ScatterChart({ options, data, height, width }: FuturScatterChartProps) {
  return (
    <div style={{ height: height }}>
      <Scatter height={'100%'} width={width} options={options} data={data} />
    </div>
  );
}
