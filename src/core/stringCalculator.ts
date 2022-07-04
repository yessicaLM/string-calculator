const isStringValue = (value: string | number): boolean => typeof value === 'string';

const listSeparator = (stringOfNumbers: string): string => {
  const DEFAULT_SEPARATOR = ',';
  return stringOfNumbers.includes(DEFAULT_SEPARATOR)
    ? DEFAULT_SEPARATOR
    : stringOfNumbers[2];
}

const removeNonNumericValues = (value: string): string => {
  const NON_NUMERIC_VALUES = /[^\d.-]/g;
  return value.replace(NON_NUMERIC_VALUES, '');
}

const sumValues = (numbers: string): number => {
  const listOfNumbers = numbers.split(listSeparator(numbers));
  const filteredNumbers = listOfNumbers.map(number => removeNonNumericValues(number));
  return filteredNumbers.reduce((numA, numB) => Number(numA) + Number(numB), 0);
}

export const stringCalculator = (numbers: string | number): number => {
  if (isStringValue(numbers)) {
    return sumValues(String(numbers));
  }
  if (!numbers) return 0;
}