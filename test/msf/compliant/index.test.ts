import { isSpecCompliantMSFType } from '../../../src/msf/compliant';
import tiknoSeren2007Msf from './tikno_seren_2007.json';
import valid from './valid.json';
import invalid1 from './invalid_1.json';
import invalid2 from './invalid_2.json';
import invalid3 from './invalid_3.json';

test('isSpecCompliantMSFType', (): void => {
    expect(isSpecCompliantMSFType(tiknoSeren2007Msf)).toBe(true);
    expect(isSpecCompliantMSFType(valid)).toBe(true);
    expect(isSpecCompliantMSFType(invalid1)).toBe(false);
    expect(isSpecCompliantMSFType(invalid2)).toBe(false);
    expect(isSpecCompliantMSFType(invalid3)).toBe(false);
});
