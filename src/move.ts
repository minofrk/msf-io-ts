import { union, literal, type, tuple, TypeOf } from 'io-ts';
import { Arxe, Sorn } from './piece';
import { DeepReadonly } from './deep-readonly';

export const Coordinate = union([
    literal(0),
    literal(1),
    literal(2),
    literal(3),
    literal(4),
    literal(5),
    literal(6),
]);

export type Coordinate = TypeOf<typeof Coordinate>;

export const Position = type({
    alsia: Coordinate,
    soom: Coordinate,
});

export type Position = TypeOf<typeof Position>;
export type ReadonlyPosition = DeepReadonly<Position>;

export const FromTo = type({
    i: Position,
    a: Position,
});

export type FromTo = TypeOf<typeof FromTo>;
export type ReadonlyFromTo = DeepReadonly<FromTo>;

export const LeimMove = type({
    pit: literal('leim'),
    luul: tuple([FromTo]),
});

export type LeimMove = TypeOf<typeof LeimMove>;
export type ReadonlyLeimMove = DeepReadonly<LeimMove>;

export const OkkeMove = type({
    pit: literal('okke'),
    luul: tuple([FromTo, FromTo]),
});

export type OkkeMove = TypeOf<typeof OkkeMove>;
export type ReadonlyOkkeMove = DeepReadonly<OkkeMove>;

export const KorMove = type({
    pit: literal('kor'),
    ka: Position,
});

export type KorMove = TypeOf<typeof KorMove>;
export type ReadonlyKorMove = DeepReadonly<KorMove>;

export const EvMove = type({
    pit: literal('ev'),
    evol: union([Arxe, Sorn]),
});

export type EvMove = TypeOf<typeof EvMove>;
export type ReadonlyEvMove = DeepReadonly<EvMove>;

export const SedMove = type({
    pit: literal('sed'),
});

export type SedMove = TypeOf<typeof SedMove>;
export type ReadonlySedMove = DeepReadonly<SedMove>;

export const Move = union([LeimMove, OkkeMove, KorMove, EvMove, SedMove]);

export type Move = TypeOf<typeof Move>;
export type ReadonlyMove = DeepReadonly<Move>;
