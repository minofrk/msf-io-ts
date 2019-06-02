import * as t from 'io-ts';

export const Player = t.union([t.literal('arxe'), t.literal('sorn')]);

export type Player = t.TypeOf<typeof Player>;
