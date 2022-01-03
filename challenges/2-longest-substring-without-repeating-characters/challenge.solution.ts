const getSubstringWithoutRepeatingCharacters = (charArray: string[]): [number, string] => {
  let result = ""
  let i = 1

  for (i; i < charArray.length - 1; i++) {
    result += charArray[i - 1]
    if (charArray[i - 1] === charArray[i]) break
  }

  return [i, result]
}

export const findLongestSubstringWithoutRepeatingCharacters = (str: string): string => {
  let characters = [...str]
  let longestSubstring: string = ""
  let endIndex = 0

  while (characters.length > longestSubstring.length) {
    [endIndex, longestSubstring] = getSubstringWithoutRepeatingCharacters(characters)
    characters = characters.slice(endIndex, characters.length)
  }

  return longestSubstring
}