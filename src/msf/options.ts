import * as t from 'io-ts';
import { DateTimeString } from './date-time-string';

export const Options = t.partial({
    im: DateTimeString,
    oprens: t.string,
});
