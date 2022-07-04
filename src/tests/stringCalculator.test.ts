import { stringCalculator } from '../core/stringCalculator';

// null -> 0 --> DONE
// '' -> 0 --> DONE
// '2' -> 2 --> DONE
// 2,2 -> 4 --> DONE
// 2,2,a -> 4
// n,n -> 0
// //%/2%2 -> 4


describe('String calculator', () => {
  it('empty string returns 0', () => {
    expect(stringCalculator('')).toBe(0);
  });

  it('given null returns 0', () => {
    expect(stringCalculator(null)).toBe(0);
  });

  it('given string of 2 returns number 2', () => {
    expect(stringCalculator('2')).toBe(2);
  });

  it('given string "2,2" returns 4', () => {
    expect(stringCalculator('2,2')).toBe(4);
  });

  it('given string "2,2,a" returns 4', () => {
    expect(stringCalculator('2,2,a')).toBe(4);
  });
});