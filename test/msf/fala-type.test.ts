import { FalaType } from '../../src/msf/fala-type';

test('FalaType', (): void => {
    expect(FalaType.is(0)).toBe(true);
    expect(FalaType.is(1)).toBe(true);
    expect(FalaType.is(2147483647)).toBe(true);

    expect(FalaType.is(-1)).toBe(false);
    expect(FalaType.is(0.1)).toBe(false);
    expect(FalaType.is(2147483648)).toBe(false);
    expect(FalaType.is(Infinity)).toBe(false);
    expect(FalaType.is(Number.NaN)).toBe(false);
});
