import { keyof, union, literal, TypeOf } from 'io-ts';

export const Arxe = keyof({
    dia: null,
    vio: null,
    lis: null,
    gil: null,
    ful: null,
    dyu: null,
    mel: null,
    ral: null,
    zan: null,
    pal: null,
    mik: null,
    fav: null,
    ruj: null,
    ser: null,
});

export const Sorn = keyof({
    rav: null,
    tan: null,
    lin: null,
    rez: null,
    jil: null,
    din: null,
    ket: null,
    len: null,
    lax: null,
    nen: null,
    pin: null,
    mat: null,
    kun: null,
    mir: null,
});

export const Teems = literal('tem');

export const Piece = union([Arxe, Sorn, Teems]);

export const TurnablePiece = keyof({
    pal: null,
    ful: null,
    mik: null,
    fav: null,
    zan: null,
    gil: null,
    ruj: null,
    tan: null,
    jil: null,
    lax: null,
    mat: null,
    kun: null,
    rez: null,
    din: null,
    tem: null,
});

export type Arxe = TypeOf<typeof Arxe>;
export type Sorn = TypeOf<typeof Sorn>;
export type Teems = TypeOf<typeof Teems>;
export type Piece = TypeOf<typeof Piece>;
export type TurnablePiece = TypeOf<typeof TurnablePiece>;
