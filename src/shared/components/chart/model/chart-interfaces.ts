import type { ChartData, ChartDataset, ChartOptions, ChartTypeRegistry } from 'chart.js';

export type ChartOptionsType<T extends keyof ChartTypeRegistry> = ChartOptions<T>;
export type ChartDataType<T extends keyof ChartTypeRegistry> = ChartData<T, any, any>;
export type ChartDataSetType<T extends keyof ChartTypeRegistry> = ChartDataset<T, any>;

export interface FuturBarChartProps {
  options?: ChartOptionsType<'bar'>;
  data: ChartDataType<'bar'>;
  height?: number | string | undefined;
  width?: number | string | undefined;
}

export interface FuturScatterChartProps {
  options?: ChartOptionsType<'scatter'>;
  data: ChartDataType<'scatter'>;
  height?: number | string | undefined;
  width?: number | string | undefined;
}

export interface LimitValuesOptions {
  x?: { min: number; max: number; minRange: number };
  y: { min: number; max: number; minRange: number };
}

export interface BarChartOptionInterface {
  title?: string;
  verticalTitle?: string;
  isStacked?: boolean;
  limitValues: LimitValuesOptions;
}

export interface ScatterChartOptionInterface extends Omit<BarChartOptionInterface, 'isStacked'> {}
