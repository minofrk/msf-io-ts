import { type, array, intersection } from 'io-ts';
import { State } from '../state';
import { Variation } from './variation';
import { Options } from './options';
import { FalaType } from './fala-type';

export const RootNode = intersection([
    Options,
    type({
        fala: FalaType,
        slax: State,
        mit: array(Variation),
    }),
]);
