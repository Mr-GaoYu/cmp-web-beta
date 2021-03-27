declare type Recordable<T extends any = any> = Record<string, T>;

declare type ReadonlyRecordable<T extends any = any> = {
    readonly [key: string]: T;
  };