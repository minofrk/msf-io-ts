import { union, literal, type, tuple, TypeOf } from 'io-ts';
import { Arxe, Sorn } from './piece';
import { DeepReadonly } from './deep-readonly';

const PositionInt = union([
    literal(0),
    literal(1),
    literal(2),
    literal(3),
    literal(4),
    literal(5),
    literal(6),
]);

const Position = type({
    alsia: PositionInt,
    soom: PositionInt,
});

const FromTo = type({
    i: Position,
    a: Position,
});

export const Move = union([
    type({
        pit: literal('leim'),
        luul: tuple([FromTo]),
    }),
    type({
        pit: literal('okke'),
        luul: tuple([FromTo, FromTo]),
    }),
    type({
        pit: literal('kor'),
        ka: Position,
    }),
    type({
        pit: literal('ev'),
        evol: union([Arxe, Sorn]),
    }),
    type({
        pit: literal('sed'),
    }),
]);

export type Move = TypeOf<typeof Move>;
export type ReadonlyMove = DeepReadonly<Move>;
