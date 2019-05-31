import * as t from 'io-ts';
import { Options } from './options';
import { Player } from '../player';

export const Result = t.intersection([Options, t.union([
    t.type({
        pit: t.union([
            t.literal('xeltsoldes'),
            t.literal('teomsast'),
        ]),
        vastan: Player,
    }),
    t.type({
        pit: t.literal('artansoldes'),
        vastan: Player,
        ito: t.union([
            t.literal(0),
            t.literal(1),
            t.literal(2),
            t.literal(3),
            t.literal(4),
        ]),
    }),
    t.type({
        pit: t.literal('daim'),
    }),
])]);
