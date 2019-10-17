import { brand, Branded, TypeOf, string as tString } from 'io-ts';
import isRFC3339 from '../is-rfc3339';

export interface DateTimeStringBrand {
    readonly DateTimeString: unique symbol;
}

export const DateTimeString = brand(
    tString,
    (x): x is Branded<string, DateTimeStringBrand> => isRFC3339(x),
    'DateTimeString',
);

export type DateTimeString = TypeOf<typeof DateTimeString>;
