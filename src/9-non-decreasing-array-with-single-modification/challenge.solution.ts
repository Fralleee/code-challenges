export const checkIncreasingArrayWithSingleModification = (numbers: number[]): boolean => {
  let hasModified = false

  for (let i = 0; i < numbers.length - 1; i++) {
    const current = numbers[i]
    const next = numbers[i + 1]
    if (current > next) {

      if (hasModified) return false

      const previous = i > 0 ? numbers[i - 1] : Number.MIN_VALUE
      if (next < previous) numbers[i + 1] = current
      else numbers[i] = next

      hasModified = true
    }
  }

  return true
}