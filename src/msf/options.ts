import { partial, string as tString } from 'io-ts';
import { DateTimeString } from './date-time-string';

export const Options = partial({
    im: DateTimeString,
    oprens: tString,
});
