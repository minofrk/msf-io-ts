import { type, union, literal, intersection } from 'io-ts';
import { Options } from './options';
import { Player } from '../player';

export const Result = intersection([
    Options,
    union([
        type({
            pit: union([literal('xeltsoldes'), literal('teomsast')]),
            vastan: Player,
        }),
        type({
            pit: literal('artansoldes'),
            vastan: Player,
            ito: union([
                literal(0),
                literal(1),
                literal(2),
                literal(3),
                literal(4),
            ]),
        }),
        type({
            pit: literal('daim'),
        }),
    ]),
]);
