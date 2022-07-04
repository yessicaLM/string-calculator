const isStringValue = (value: string | number): boolean => typeof value === 'string';

const listSeparator = (strinOfNumbers: string): string => strinOfNumbers.includes(',') 
  ? ',' 
  : strinOfNumbers[2];

const sumValues = (numbers: string): number => {
  const listOfNumbers = numbers.split(listSeparator(numbers));
  const filteredNumbers = listOfNumbers.map(number => number.replace(/[^\d.-]/g, ''));
  return filteredNumbers.reduce((numA, numB) => Number(numA) + Number(numB), 0);
}


export const stringCalculator = (numbers: string | number): number => {
  if (isStringValue(numbers)) {
    return sumValues(String(numbers));    
  }
  if (!numbers) return 0;
}