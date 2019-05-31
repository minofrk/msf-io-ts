import * as t from 'io-ts';

export type DeepReadonly<T>
= T extends t.Branded<unknown, any> // eslint-disable-line @typescript-eslint/no-explicit-any
    ? T
    : T extends object
        ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
        : T;
