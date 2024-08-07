import { useVirtualizer } from '@tanstack/react-virtual';

interface RowVirtualizerParams {
  count: number;
  estimateSize: number;
  getScrollElement: () => Element | null;
  overscan: number;
}

export function useRowVirtualizer({ count, estimateSize, getScrollElement, overscan }: RowVirtualizerParams) {
  return useVirtualizer({
    count,
    estimateSize: () => estimateSize,
    getScrollElement: getScrollElement,
    measureElement:
      typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan,
  });
}
