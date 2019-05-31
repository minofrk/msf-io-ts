import * as t from 'io-ts';
import isRFC3339 from '../is-rfc3339';

export interface DateTimeStringBrand {
    readonly DateTimeString: unique symbol;
}

export const DateTimeString = t.brand(
    t.string,
    (x): x is t.Branded<string, DateTimeStringBrand> => isRFC3339(x),
    'DateTimeString',
);

export type DateTimeString = t.TypeOf<typeof DateTimeString>;
