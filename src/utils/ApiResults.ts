const FAILED_SYMBOL = Symbol('failed');

export interface ErroredType<T> {
  [FAILED_SYMBOL]: true;
  error: T;
}

export type Result<SuccessResult, ErrorResult> =
  | SuccessResult
  | ErroredType<ErrorResult>;

export function Fail<ErrorResult>(
  error: ErrorResult
): ErroredType<ErrorResult> {
  return {error, [FAILED_SYMBOL]: true};
}

export function Succeeded<SuccessResult, ErrorResult>(
  result: Result<SuccessResult, ErrorResult>
): result is SuccessResult {
  if (result === null) {
    return true;
  }
  if (typeof result === 'object') {
    return !(FAILED_SYMBOL in result);
  }
  return true;
}

export function Failed<SuccessResult, ErrorResult>(
  result: Result<SuccessResult, ErrorResult>
): result is ErroredType<ErrorResult> {
  if (result === null) {
    return false;
  }
  return typeof result === 'object' && FAILED_SYMBOL in result;
}

export function GetError<ErrorResult>(
  result: ErroredType<ErrorResult>
): ErrorResult {
  return result.error;
}
