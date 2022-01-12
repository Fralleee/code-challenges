export const twoSum = (numbers: number[], sum: number): boolean => {
  const foundNumbers = new Set()

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const requiredMatch = sum - element
    if (foundNumbers.has(requiredMatch)) return true

    foundNumbers.add(element)
  }

  return false
}