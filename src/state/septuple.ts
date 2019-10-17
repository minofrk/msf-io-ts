import { tuple, Type, TypeOf, OutputOf, Mixed } from 'io-ts';

export type Septuple<T> = [T, T, T, T, T, T, T];
export type ReadonlySeptuple<T> = readonly [T, T, T, T, T, T, T];

export function septuple<CS extends Mixed>(
    codec: CS,
): Type<Septuple<TypeOf<CS>>, Septuple<OutputOf<CS>>> {
    return tuple([
        codec,
        codec,
        codec,
        codec,
        codec,
        codec,
        codec,
    ] as any) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function readonlySeptuple<CS extends Mixed>(
    codec: CS,
): Type<ReadonlySeptuple<TypeOf<CS>>, ReadonlySeptuple<OutputOf<CS>>> {
    return tuple([
        codec,
        codec,
        codec,
        codec,
        codec,
        codec,
        codec,
    ] as any) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
}
