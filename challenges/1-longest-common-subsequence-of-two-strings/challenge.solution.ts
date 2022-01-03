export const findLongestCommonSubsequenceOfTwoStrings = (str1: string, str2: string): string => {  
  let characters = [...str1]
  let currentLongestSequence: string = ""

  while (characters.length > currentLongestSequence.length) {
    let currentIndex = 0
    const matchingCharacters = characters.reduce((matches, char): string => {
      const index = str2.indexOf(char, currentIndex)
      if(index != -1) {
        currentIndex = index + 1
        return matches + char
      }
      return matches
    }, "")
  
    if(matchingCharacters.length > currentLongestSequence.length) {
      currentLongestSequence = matchingCharacters;
    }

    [,...characters] = characters
  }

  return currentLongestSequence
}
