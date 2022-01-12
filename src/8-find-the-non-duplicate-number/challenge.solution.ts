export const findSingleNumber = (numbers: number[]): number => {
  const foundNumbers = new Set<number>()
  const potentialSingles = new Set<number>()

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (foundNumbers.has(element)) {
      potentialSingles.delete(element)
    }
    else {
      foundNumbers.add(element)
      potentialSingles.add(element)
    }
  }

  const [value] = potentialSingles
  return value
}