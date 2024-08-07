import { StateCreator } from 'zustand';

export interface ValidationErrorInterface {
  validationFn: (validationFnParams: any) => string;
  error: boolean;
  errorMsg: string;
}

interface SetValidationStateParams {
  validationFn: (validationFnParams: any) => string;
  validationValues?: any;
}

export interface ValidationResultInterface<TValue> extends ValidationErrorInterface {
  validationFn: (validationFnParams: TValue) => string;
}

interface ValidationStateSliceActions {
  setValidationState: ({ validationFn, validationValues }: SetValidationStateParams) => ValidationErrorInterface;
}

export interface ValidationStateSliceInterface {
  actions: ValidationStateSliceActions;
}

export const createValidationStateSlice: StateCreator<
  ValidationStateSliceInterface,
  [],
  [],
  ValidationStateSliceInterface
> = () => {
  return {
    actions: {
      setValidationState: ({ validationFn, validationValues }) => {
        const validationResult = validationFn(validationValues);

        return {
          validationFn,
          error: validationResult !== '',
          errorMsg: validationResult,
        };
      },
    },
  };
};
