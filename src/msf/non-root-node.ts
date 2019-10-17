import {
    type,
    array,
    recursion,
    intersection,
    Type,
    TypeOf,
    OutputOf,
} from 'io-ts';
import { Variation } from './variation';
import { Options } from './options';
import { Move } from '../move';
import { State } from '../state';

type Codec = Type<
    TypeOf<typeof Options> & {
        ov: TypeOf<typeof Move>;
        slax: TypeOf<typeof State>;
        mit: TypeOf<typeof Variation>[];
    },
    OutputOf<typeof Options> & {
        ov: OutputOf<typeof Move>;
        slax: OutputOf<typeof State>;
        mit: OutputOf<typeof Variation>[];
    }
>;

export const NonRootNode: Codec = recursion(
    'NonRootNode',
    (): Codec =>
        intersection([
            Options,
            type({
                ov: Move,
                slax: State,
                mit: array(Variation),
            }),
        ]),
);
