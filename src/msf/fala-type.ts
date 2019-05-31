import * as t from 'io-ts';

export interface FalaTypeBrand {
    readonly FalaType: unique symbol;
}

export const FalaType = t.union([
    t.literal(0),
    t.brand(t.Int, (x): x is t.Branded<t.Int, FalaTypeBrand> => {
        return 0 <= x && x <= 2147483647;
    }, 'FalaType'),
]);

export type FalaType = t.TypeOf<typeof FalaType>;
