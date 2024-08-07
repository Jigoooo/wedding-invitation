import { ZoomPluginOptions } from 'chartjs-plugin-zoom/types/options';

import {
  BarChartOptionInterface,
  ChartOptionsType,
  LimitValuesOptions,
  ScatterChartOptionInterface,
} from '@/shared/components/chart';

export const getBarChartOptions = ({
  isStacked = false,
  verticalTitle = '',
  limitValues,
  title = '',
}: BarChartOptionInterface): ChartOptionsType<'bar'> => {
  return {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        stacked: isStacked,
      },
      y: {
        stacked: isStacked,
        beginAtZero: true,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: verticalTitle,
          font: {
            size: 13,
            family: 'Pretendard',
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      zoom: getZoomOptions(limitValues),
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'Pretendard',
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 14,
          family: 'Pretendard',
          weight: 'bold',
        },
      },
    },
    transitions: {
      zoom: {
        animation: {
          duration: 1000,
          easing: 'easeOutCubic',
        },
      },
    },
  };
};

export const getScatterChartOptions = ({
  verticalTitle = '',
  limitValues,
  title = '',
}: ScatterChartOptionInterface): ChartOptionsType<'scatter'> => {
  return {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: verticalTitle,
          font: {
            size: 13,
            family: 'Pretendard',
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      zoom: getZoomOptions(limitValues),
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'Pretendard',
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 14,
          family: 'Pretendard',
          weight: 'bold',
        },
      },
    },
    transitions: {
      zoom: {
        animation: {
          duration: 1000,
          easing: 'easeOutCubic',
        },
      },
    },
  };
};

export const getZoomOptions = (limitValues: LimitValuesOptions): ZoomPluginOptions => {
  return {
    limits: {
      // x: { min: limitValues.x.min, max: limitValues.x.max, minRange: limitValues.x.max / 4 },
      y: { min: limitValues.y.min, max: limitValues.y.max, minRange: limitValues.y?.minRange ?? limitValues.y.max / 4 },
    },
    pan: {
      enabled: true,
      mode: 'xy',
    },
    zoom: {
      wheel: {
        enabled: true,
      },
      pinch: {
        enabled: true,
      },
      mode: 'xy',
      onZoomComplete({ chart }) {
        chart.update('none');
      },
    },
  };
};
