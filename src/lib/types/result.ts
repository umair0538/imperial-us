export type Result<T = void> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      message: string;
    };