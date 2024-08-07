import { useMemo, useState } from 'react';
import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { PaginationState } from '@tanstack/table-core';

type ColumnValueFunction<T> = (row: T) => string;

export type TableColumnConfig<TColumnData> = {
  [key in keyof Partial<TColumnData>]: {
    header: string;
    size: number;
    customRender?: (row: TColumnData) => string;
  };
};

interface UseTableInstanceProps<TColumnData> {
  data: TColumnData[];
  columnConfig: TableColumnConfig<TColumnData>;
  pageCount?: number;
  paginationOptions: PaginationState;
  onPaginationChange: (newState: any) => void;
  columnVisibility?: VisibilityState;
  otherColumnWidth?: number;
}

export function useTableInstance<TColumnData>({
  data,
  columnConfig,
  pageCount,
  paginationOptions,
  onPaginationChange,
  columnVisibility = {},
  otherColumnWidth = 130,
}: UseTableInstanceProps<TColumnData>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<TColumnData, any>[]>(() => {
    const columnHelper = createColumnHelper<TColumnData>();

    return (Object.keys(columnConfig) as (keyof TColumnData)[])
      .map((accessorKey) => {
        const columnKey = accessorKey as keyof TColumnData;

        if (!columnConfig[columnKey]) {
          return null;
        }

        const columnValue: ColumnValueFunction<TColumnData> | keyof TColumnData = columnConfig[columnKey].customRender
          ? (row: TColumnData) => columnConfig[columnKey]?.customRender?.(row) ?? ''
          : accessorKey;

        return columnHelper.accessor(columnValue as any, {
          id: accessorKey as string,
          header: () => <span>{columnConfig[columnKey]!.header}</span>,
          size: columnConfig[columnKey]!.size,
          cell: (info) => info.getValue(),
        });
      })
      .filter((column) => column !== null);
  }, [columnConfig]);

  const tableInstance = useReactTable({
    data,
    columns,
    pageCount: pageCount ?? -1,
    state: {
      sorting,
      pagination: paginationOptions,
      columnVisibility,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange,
    onSortingChange: setSorting,
    manualPagination: true,
    debugTable: true,
    enableMultiSort: true,
    isMultiSortEvent: () => true,
  });

  const paginatedSizeChange = (newPageSize: number) => {
    tableInstance.setPageSize(newPageSize);
  };

  const tableWidth = useMemo(() => {
    return (
      tableInstance
        .getAllColumns()
        .map((column) => column.getSize())
        .reduce((a, b) => a + b, 0) + otherColumnWidth
    );
  }, [tableInstance, otherColumnWidth]);

  const sheetMinWidth = useMemo(() => {
    return tableWidth / 1.5;
  }, [tableWidth]);

  return { tableInstance, paginatedSizeChange, tableWidth, sheetMinWidth };
}
