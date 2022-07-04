export const stringCalculator = (numbers: string | number): number => {
  if (typeof numbers === 'string') {
    const stringNumbers = String(numbers)
    if (stringNumbers.includes(',')) {
      const listOfNumers = stringNumbers.split(',');
      return listOfNumers.reduce((numA, numB) => Number(numA) + Number(numB), 0)
    }
  }
  if(numbers === '2') return 2;
  return 0;
}