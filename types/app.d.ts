declare global {
  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  declare type RootState = import('@app/appStore').RootState;
  declare type AppDispatch = import('@app/appStore').AppDispatch;
}

export {};
