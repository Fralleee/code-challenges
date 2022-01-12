import { twoSum } from "./challenge.solution"

test("should return true because there are numbers that add up to 5", () => {
  const numbers = [4, 7, 1, -3, 2]
  const result = twoSum(numbers, 5)

  expect(result).toBe(true)
})

test("should return false because no two numbers add up to 5", () => {
  const numbers = [-2, 2, 1, 6, 5, -3, -4]
  const result = twoSum(numbers, 10)

  expect(result).toBe(false)
})
