export type CallbackFn<T extends any[] = [], R extends any = void> = (...args: T) => R;

const get = <T extends any, R extends any, F extends any>(obj: T, accessor: CallbackFn<[T], R>, fallback: F = null): R | F => {
  if (!obj || typeof accessor !== 'function') {
    return fallback;
  }

  try {
    return accessor(obj);
  } catch (e) {
    return fallback;
  }
};

export default get;