import * as t from 'io-ts';
import { Variation } from './variation';
import { Options } from './options';
import { Move } from '../move';
import { State } from '../state';

type Codec = t.Type<
t.TypeOf<typeof Options> & {
    ov: t.TypeOf<typeof Move>;
    slax: t.TypeOf<typeof State>;
    mit: t.TypeOf<typeof Variation>[];
},
t.OutputOf<typeof Options> & {
    ov: t.OutputOf<typeof Move>;
    slax: t.OutputOf<typeof State>;
    mit: t.OutputOf<typeof Variation>[];
}
>;

export const NonRootNode: Codec = t.recursion(
    'NonRootNode',
    (): Codec => t.intersection([Options, t.type({
        ov: Move,
        slax: State,
        mit: t.array(Variation),
    })]),
);
