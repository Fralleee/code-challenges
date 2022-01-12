import { findSingleNumber } from "./challenge.solution"

test("should the single number from array", () => {
  const numbers = [4, 3, 2, 4, 1, 3, 2]
  const result = findSingleNumber(numbers)

  expect(result).toBe(1)
})

