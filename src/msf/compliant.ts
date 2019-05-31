import * as t from 'io-ts';
import { MSFType, ReadonlyMSFType } from './codec';
import { isSpecCompliantState } from '../state/compliant';
import { NonRootNode } from './non-root-node';
import { DeepReadonly } from '../deep-readonly';
import { Variation } from './variation';

function isSpecCompliantNonRootNodes(seslax: DeepReadonly<t.TypeOf<typeof NonRootNode>[]>): boolean {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return seslax.every((x): boolean => isSpecCompliantState(x.slax) && isSpecCompliantVariations(x.mit));
}

function isSpecCompliantVariations(mit: DeepReadonly<t.TypeOf<typeof Variation>[]>): boolean {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return mit.every((x): boolean => isSpecCompliantNonRootNodes(x.seslax));
}

export function isSpecCompliantMSFType(msf: unknown): msf is ReadonlyMSFType {
    if (!MSFType.is(msf)) {
        return false;
    }

    if (!isSpecCompliantState(msf.kit.slax)) {
        return false;
    }

    if (!isSpecCompliantVariations(msf.kit.mit)) {
        return false;
    }

    if (!isSpecCompliantNonRootNodes(msf.seslax)) {
        return false;
    }

    return true;
}
