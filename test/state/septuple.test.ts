import * as t from 'io-ts';
import { septuple } from '../../src/state/septuple';

test('septuple', (): void => {
    const TestType = septuple(t.number);

    expect(TestType.is([0, 0, 0, 0, 0, 0])).toBe(false);
    expect(TestType.is([0, 0, 0, 0, 0, 0, 0])).toBe(true);
    expect(TestType.is([0, 0, 0, 0, 0, 0, 0, 0])).toBe(false);

    expect(TestType.is({
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    })).toBe(false);
});
