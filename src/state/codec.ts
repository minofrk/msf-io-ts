import * as t from 'io-ts';
import { Player } from '../player';
import { Sorn, Arxe, Piece, TurnablePiece } from '../piece';
import { septuple } from './septuple';
import { DeepReadonly } from '../deep-readonly';

export const State = t.type({
    sast: Player,
    arxe: t.type({
        txifol: t.array(Sorn),
        evol: t.union([t.null, Sorn]),
    }),
    sorn: t.type({
        txifol: t.array(Arxe),
        evol: t.union([t.null, Arxe]),
    }),
    ele: septuple(septuple(t.union([t.null, Piece]))),
    korol: t.array(TurnablePiece),
});

export type State = t.TypeOf<typeof State>;
export type ReadonlyState = DeepReadonly<State>;
