export const stringCalculator = (numbers: string | number): number => {
  if (typeof numbers === 'string') {
    const stringNumbers = String(numbers)
    if (stringNumbers.includes(',')) {
      const listOfNumers = stringNumbers.split(',');
      const filteredNumbers = listOfNumers.map(number => number.replace(/[^\d.-]/g, ''));
      return filteredNumbers.reduce((numA, numB) => Number(numA) + Number(numB), 0);
    }
    if(stringNumbers.startsWith('//')) {
      const separator = stringNumbers[2];
      const listOfNumers = stringNumbers.split(separator);
      const filteredNumbers = listOfNumers.map(number => number.replace(/[^\d.-]/g, ''));
      return filteredNumbers.reduce((numA, numB) => Number(numA) + Number(numB), 0);
    }
  }
  if (!numbers) return 0;
  if(typeof numbers === 'string') return Number(numbers);
}