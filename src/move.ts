import * as t from 'io-ts';
import { Arxe, Sorn } from './piece';
import { DeepReadonly } from './deep-readonly';

const PositionInt = t.union([
    t.literal(0),
    t.literal(1),
    t.literal(2),
    t.literal(3),
    t.literal(4),
    t.literal(5),
    t.literal(6),
]);

const Position = t.type({
    alsia: PositionInt,
    soom: PositionInt,
});

const FromTo = t.type({
    i: Position,
    a: Position,
});

export const Move = t.union([
    t.type({
        pit: t.literal('leim'),
        luul: t.tuple([FromTo]),
    }),
    t.type({
        pit: t.literal('okke'),
        luul: t.tuple([FromTo, FromTo]),
    }),
    t.type({
        pit: t.literal('kor'),
        ka: Position,
    }),
    t.type({
        pit: t.literal('ev'),
        evol: t.union([Arxe, Sorn]),
    }),
    t.type({
        pit: t.literal('sed'),
    }),
]);

export type Move = t.TypeOf<typeof Move>;
export type ReadonlyMove = DeepReadonly<Move>;
