import * as t from 'io-ts';
import { Result } from './result';
import { NonRootNode } from './non-root-node';

type Codec = t.Type<
    {
        fixt: t.TypeOf<typeof Result>;
        seslax: t.TypeOf<typeof NonRootNode>[];
    },
    {
        fixt: t.OutputOf<typeof Result>;
        seslax: t.OutputOf<typeof NonRootNode>[];
    }
>;

export const Variation: Codec = t.recursion(
    'Variation',
    (): Codec =>
        t.type({
            fixt: Result,
            seslax: t.array(NonRootNode),
        }),
);
