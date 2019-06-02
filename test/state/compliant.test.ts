import { isSpecCompliantState } from '../../src/state';

test('isSpecCompliantState', (): void => {
    expect(
        isSpecCompliantState({
            sast: 'arxe',
            arxe: {
                txifol: [],
                evol: null,
            },
            sorn: {
                txifol: [],
                evol: null,
            },
            ele: [
                ['rav', 'nen', 'pin', 'mir', 'ket', 'lin', 'len'],
                ['din', 'rez', 'kun', 'mat', 'lax', 'jil', 'tan'],
                [null, null, null, null, null, null, null],
                [null, null, null, 'tem', null, null, null],
                [null, null, null, null, null, null, null],
                ['pal', 'ful', 'mik', 'fav', 'zan', 'gil', 'ruj'],
                ['dyu', 'lis', 'mel', 'ser', 'dia', 'vio', 'ral'],
            ],
            korol: [],
        }),
    ).toBe(true);

    expect(
        isSpecCompliantState({
            sast: 'arxe',
            arxe: {
                txifol: ['rav'],
                evol: null,
            },
            sorn: {
                txifol: [],
                evol: null,
            },
            ele: [
                ['rav', 'nen', 'pin', 'mir', 'ket', 'lin', 'len'],
                ['din', 'rez', 'kun', 'mat', 'lax', 'jil', 'tan'],
                [null, null, null, null, null, null, null],
                [null, null, null, 'tem', null, null, null],
                [null, null, null, null, null, null, null],
                ['pal', 'ful', 'mik', 'fav', 'zan', 'gil', 'ruj'],
                ['dyu', 'lis', 'mel', 'ser', 'dia', 'vio', 'ral'],
            ],
            korol: [],
        }),
    ).toBe(false);

    expect(
        isSpecCompliantState({
            sast: 'arxe',
            arxe: {
                txifol: [],
                evol: 'rav',
            },
            sorn: {
                txifol: [],
                evol: null,
            },
            ele: [
                ['rav', 'nen', 'pin', 'mir', 'ket', 'lin', 'len'],
                ['din', 'rez', 'kun', 'mat', 'lax', 'jil', 'tan'],
                [null, null, null, null, null, null, null],
                [null, null, null, 'tem', null, null, null],
                [null, null, null, null, null, null, null],
                ['pal', 'ful', 'mik', 'fav', 'zan', 'gil', 'ruj'],
                ['dyu', 'lis', 'mel', 'ser', 'dia', 'vio', 'ral'],
            ],
            korol: [],
        }),
    ).toBe(false);

    expect(
        isSpecCompliantState({
            sast: 'arxe',
            arxe: {
                txifol: [],
                evol: null,
            },
            sorn: {
                txifol: ['pal'],
                evol: null,
            },
            ele: [
                ['rav', 'nen', 'pin', 'mir', 'ket', 'lin', 'len'],
                ['din', 'rez', 'kun', 'mat', 'lax', 'jil', 'tan'],
                [null, null, null, null, null, null, null],
                [null, null, null, 'tem', null, null, null],
                [null, null, null, null, null, null, null],
                ['pal', 'ful', 'mik', 'fav', 'zan', 'gil', 'ruj'],
                ['dyu', 'lis', 'mel', 'ser', 'dia', 'vio', 'ral'],
            ],
            korol: [],
        }),
    ).toBe(false);

    expect(
        isSpecCompliantState({
            sast: 'arxe',
            arxe: {
                txifol: [],
                evol: null,
            },
            sorn: {
                txifol: [],
                evol: 'pal',
            },
            ele: [
                ['rav', 'nen', 'pin', 'mir', 'ket', 'lin', 'len'],
                ['din', 'rez', 'kun', 'mat', 'lax', 'jil', 'tan'],
                [null, null, null, null, null, null, null],
                [null, null, null, 'tem', null, null, null],
                [null, null, null, null, null, null, null],
                ['pal', 'ful', 'mik', 'fav', 'zan', 'gil', 'ruj'],
                ['dyu', 'lis', 'mel', 'ser', 'dia', 'vio', 'ral'],
            ],
            korol: [],
        }),
    ).toBe(false);

    expect(
        isSpecCompliantState({
            sast: 'arxe',
            arxe: {
                txifol: [],
                evol: null,
            },
            sorn: {
                txifol: [],
                evol: null,
            },
            ele: [
                ['rav', 'nen', 'pin', 'mir', 'ket', 'lin', 'len'],
                ['din', 'rez', 'kun', 'mat', 'lax', 'jil', 'tan'],
                [null, null, null, null, null, null, null],
                [null, null, null, 'tem', null, null, null],
                [null, null, null, null, null, null, null],
                [null, 'ful', 'mik', 'fav', 'zan', 'gil', 'ruj'],
                ['dyu', 'lis', 'mel', 'ser', 'dia', 'vio', 'ral'],
            ],
            korol: ['pal'],
        }),
    ).toBe(false);
});
