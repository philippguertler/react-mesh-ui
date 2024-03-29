import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";

export const LOADING = Symbol("LOADING");

export function usePromise<T>(promiseSupplier: () => Promise<T>): T | typeof LOADING {
  const [state, setState] = useState<T | typeof LOADING>(LOADING);

  useEffect(() => {
    promiseSupplier().then(setState);
  }, [promiseSupplier]);

  return state;
}

export function useRedirect(path: string, push = true): [React.ComponentType, () => void] {
  const [state, setState] = useState(false);

  return [
    () => state ? <Redirect push={push} to={path} /> : null,
    () => setState(true)
  ];
}