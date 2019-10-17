import {
    type,
    dictionary,
    array,
    union,
    TypeOf,
    string as tString,
    undefined as tUndefined,
} from 'io-ts';
import { RootNode } from './root-node';
import { Result } from './result';
import { NonRootNode } from './non-root-node';
import { DeepReadonly } from '../deep-readonly';

export const MSFType = type({
    aptex: dictionary(tString, union([tString, tUndefined])),
    kit: RootNode,
    fixt: Result,
    seslax: array(NonRootNode),
});

export type MSFType = TypeOf<typeof MSFType>;
export type ReadonlyMSFType = DeepReadonly<MSFType>;
