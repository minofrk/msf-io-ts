import { union, literal, TypeOf } from 'io-ts';

export const Player = union([literal('arxe'), literal('sorn')]);

export type Player = TypeOf<typeof Player>;
