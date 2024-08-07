import { StateCreator } from 'zustand';
import { functionalUpdate } from '@tanstack/react-table';
import { PaginationState } from '@tanstack/table-core';
import { OnChangeFn } from '@tanstack/react-table';

interface PaginationSliceState {
  paginationOptions: PaginationState;
}
interface PaginationSliceActions {
  handlePaginationOptions: OnChangeFn<PaginationState>;
  onPaginationChange: (newState: any) => void;
}
export interface PaginationSliceInterface extends PaginationSliceState {
  actions: PaginationSliceActions;
}

const paginationInitialState: PaginationSliceState = {
  paginationOptions: {
    pageIndex: 0,
    pageSize: 10,
  },
};

export const createPaginationSlice: StateCreator<PaginationSliceInterface, [], [], PaginationSliceInterface> = (
  setState,
  getState,
) => {
  return {
    ...paginationInitialState,
    actions: {
      handlePaginationOptions: (paginationOptionsUpdater) => {
        setState((state) => {
          const newPaginationOptions =
            typeof paginationOptionsUpdater === 'function'
              ? paginationOptionsUpdater(state.paginationOptions)
              : paginationOptionsUpdater;

          return { ...state, paginationOptions: newPaginationOptions };
        });
      },
      onPaginationChange: (newState) => {
        getState().actions.handlePaginationOptions(functionalUpdate(newState, getState().paginationOptions));
      },
    },
  };
};
