import { union, literal, brand, Int, TypeOf, Branded } from 'io-ts';

export interface FalaTypeBrand {
    readonly FalaType: unique symbol;
}

export const FalaType = union([
    literal(0),
    brand(
        Int,
        (x): x is Branded<Int, FalaTypeBrand> => {
            return 0 <= x && x <= 2147483647;
        },
        'FalaType',
    ),
]);

export type FalaType = TypeOf<typeof FalaType>;
