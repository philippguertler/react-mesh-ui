import { useEffect, useState } from "react";

export const LOADING = Symbol("LOADING");

export function usePromise<T>(promiseSupplier: () => Promise<T>): T | typeof LOADING {
  const [state, setState] = useState<T | typeof LOADING>(LOADING);

  useEffect(() => {
    promiseSupplier().then(setState);
  }, []);

  return state;
}
