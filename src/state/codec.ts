import { type, array, union, null as tNull, TypeOf } from 'io-ts';
import { Player } from '../player';
import { Sorn, Arxe, Piece, TurnablePiece } from '../piece';
import { septuple } from './septuple';
import { DeepReadonly } from '../deep-readonly';

export const State = type({
    sast: Player,
    arxe: type({
        txifol: array(Sorn),
        evol: union([tNull, Sorn]),
    }),
    sorn: type({
        txifol: array(Arxe),
        evol: union([tNull, Arxe]),
    }),
    ele: septuple(septuple(union([tNull, Piece]))),
    korol: array(TurnablePiece),
});

export type State = TypeOf<typeof State>;
export type ReadonlyState = DeepReadonly<State>;
