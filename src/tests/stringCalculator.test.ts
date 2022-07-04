import { stringCalculator } from '../core/stringCalculator';

describe('String calculator', () => {
  it('empty string and null value returns 0', () => {
    const emptyString = '';
    const nullValue = null;
    const expectedResult = 0;

    expect(stringCalculator(emptyString)).toBe(expectedResult);
    expect(stringCalculator(nullValue)).toBe(expectedResult);
  });

  it('given string of 2 returns number 2', () => {
    const currentValue = '2';
    const expectedResult = 2;

    expect(stringCalculator(currentValue)).toBe(expectedResult);
  });

  it('given string "2,2" returns 4', () => {
    const currentValue = '2,2';
    const expectedResult = 4;

    expect(stringCalculator(currentValue)).toBe(expectedResult);
  });

  it('given string "2,2,a" returns 4', () => {
    const currentValue = '2,2,a';
    const expectedResult = 4;

    expect(stringCalculator(currentValue)).toBe(expectedResult);
  });

  it('given string "2,2a" returns 4', () => {
    const currentValue = '2,2a';
    const expectedResult = 4;

    expect(stringCalculator(currentValue)).toBe(expectedResult);
  });

  it('accepts customized sequences: "//%/2%2" returns 4', () => {
    const currentValue = '//%/2%2';
    const expectedResult = 4;

    expect(stringCalculator(currentValue)).toBe(expectedResult);
  });
});