import { checkIncreasingArrayWithSingleModification } from "./challenge.solution"

test("should return true since changing first element will make the array increasing", () => {
  const numbers = [13, 4, 7]
  const result = checkIncreasingArrayWithSingleModification(numbers)

  expect(result).toBe(true)
})


test("should return false since we have two places where the array will be decreasing", () => {
  const numbers = [5, 1, 3, 2, 5]
  const result = checkIncreasingArrayWithSingleModification(numbers)

  expect(result).toBe(false)
})

test("should return false we since a decrease to next will be lower than previous", () => {
  const numbers = [1, 4, 7, 14, 6]
  const result = checkIncreasingArrayWithSingleModification(numbers)

  expect(result).toBe(false)
})