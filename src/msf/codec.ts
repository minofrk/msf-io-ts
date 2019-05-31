import * as t from 'io-ts';
import { RootNode } from './root-node';
import { Result } from './result';
import { NonRootNode } from './non-root-node';
import { DeepReadonly } from '../deep-readonly';

export const MSFType = t.type({
    aptex: t.dictionary(t.string, t.union([t.string, t.undefined])),
    kit: RootNode,
    fixt: Result,
    seslax: t.array(NonRootNode),
});

export type MSFType = t.TypeOf<typeof MSFType>;
export type ReadonlyMSFType = DeepReadonly<MSFType>;
