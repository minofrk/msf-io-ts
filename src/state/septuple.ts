import * as t from 'io-ts';

export type Septuple<T> = [T, T, T, T, T, T, T];
export type ReadonlySeptuple<T> = readonly [T, T, T, T, T, T, T];

export function septuple<CS extends t.Mixed>(
    codec: CS,
): t.Type<Septuple<t.TypeOf<CS>>, Septuple<t.OutputOf<CS>>> {
    return t.tuple([
        codec,
        codec,
        codec,
        codec,
        codec,
        codec,
        codec,
    ] as any) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function readonlySeptuple<CS extends t.Mixed>(
    codec: CS,
): t.Type<ReadonlySeptuple<t.TypeOf<CS>>, ReadonlySeptuple<t.OutputOf<CS>>> {
    return t.tuple([
        codec,
        codec,
        codec,
        codec,
        codec,
        codec,
        codec,
    ] as any) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
}
