import { findLongestCommonSubsequenceOfTwoStrings } from "./challenge.solution"

test("should correctly return the expected string sequence 1", () => {
  const str1 = "ABAZDC"
  const str2 = "BACBAD"
  const result = findLongestCommonSubsequenceOfTwoStrings(str1, str2)
  expect(result).toBe("ABAD")
})

test("should correctly return the expected string sequence 2", () => {
  const str1 = "AGGTAB"
  const str2 = "GXTXAYB"
  const result = findLongestCommonSubsequenceOfTwoStrings(str1, str2)
  expect(result).toBe("GTAB")
})