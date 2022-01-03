import { findLongestSubstringWithoutRepeatingCharacters } from "./challenge.solution"

test("should correctly return the longest substring", () => {
  const str = "ABRKAABCDEFGHIJJXXX"
  const result = findLongestSubstringWithoutRepeatingCharacters(str)
  expect(result).toBe("ABCDEFGHIJ")
})
