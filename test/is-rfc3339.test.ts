import isRFC3339 from '../src/is-rfc3339';

test('isRFC3339', (): void => {
    expect(isRFC3339('1985-04-12T23:20:50.52Z')).toBe(true);
    expect(isRFC3339('1996-12-19T16:39:57-08:00')).toBe(true);
    expect(isRFC3339('1990-12-31t23:59:60z')).toBe(true);
    expect(isRFC3339('1990-12-31T15:59:60-08:00')).toBe(true);
    expect(isRFC3339('1937-01-01T12:00:27.87+00:20')).toBe(true);
    expect(isRFC3339('1990-03-31T00:00:00Z')).toBe(true);
    expect(isRFC3339('2000-02-29T00:00:00Z')).toBe(true);

    expect(isRFC3339('1985-04-31T00:00:00Z')).toBe(false);
    expect(isRFC3339('2100-02-29T00:00:00Z')).toBe(false);
    expect(isRFC3339('1990-12-31T24:00:00Z')).toBe(false);
});
