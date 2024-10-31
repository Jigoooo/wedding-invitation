export type ApiResponseType<T> = {
  status: number;
  statusText: string;
  data?: T;
  success: boolean;
};

export class ResponseAdapter<T> {
  private value: ApiResponseType<T>;

  constructor(obj: ApiResponseType<T>) {
    this.value = obj;
  }

  adapt() {
    return {
      code: this.value.status,
      msg: this.value.statusText,
      data: this.value.data,
      success: this.value.success,
    };
  }
}
