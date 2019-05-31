import * as t from 'io-ts';

export const Arxe = t.keyof({
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

export const Sorn = t.keyof({
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

export const Teems = t.literal('tem');

export const Piece = t.union([
    Arxe,
    Sorn,
    Teems,
]);

export const TurnablePiece = t.keyof({
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

export type Arxe = t.TypeOf<typeof Arxe>;
export type Sorn = t.TypeOf<typeof Sorn>;
export type Teems = t.TypeOf<typeof Teems>;
export type Piece = t.TypeOf<typeof Piece>;
export type TurnablePiece = t.TypeOf<typeof TurnablePiece>;
