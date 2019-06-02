import * as t from 'io-ts';
import { State } from '../state';
import { Variation } from './variation';
import { Options } from './options';
import { FalaType } from './fala-type';

export const RootNode = t.intersection([
    Options,
    t.type({
        fala: FalaType,
        slax: State,
        mit: t.array(Variation),
    }),
]);
