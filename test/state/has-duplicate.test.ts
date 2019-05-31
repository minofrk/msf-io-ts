import { hasDuplicate } from '../../src/state/has-duplicate';

test('hasDuplicate', (): void => {
    const obj = {};

    expect(hasDuplicate([0, 1, '2', '3'])).toBe(false);
    expect(hasDuplicate([0, 0])).toBe(true);
    expect(hasDuplicate(['0', '0'])).toBe(true);
    expect(hasDuplicate([0, '0'])).toBe(false);
    expect(hasDuplicate([{}, {}])).toBe(false);
    expect(hasDuplicate([obj, obj])).toBe(true);
});
