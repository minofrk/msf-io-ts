import { type, array, recursion, Type, TypeOf, OutputOf } from 'io-ts';
import { Result } from './result';
import { NonRootNode } from './non-root-node';

type Codec = Type<
    {
        fixt: TypeOf<typeof Result>;
        seslax: TypeOf<typeof NonRootNode>[];
    },
    {
        fixt: OutputOf<typeof Result>;
        seslax: OutputOf<typeof NonRootNode>[];
    }
>;

export const Variation: Codec = recursion(
    'Variation',
    (): Codec =>
        type({
            fixt: Result,
            seslax: array(NonRootNode),
        }),
);
