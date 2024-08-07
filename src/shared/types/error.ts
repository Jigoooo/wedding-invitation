export type ErrorType = {
  error: boolean;
  errorMessage: string;
};

export interface ErrorInfoType<T> {
  errorKey: keyof T;
  isError: boolean;
  errorContents: string;
}
