export const sortList = (list: number[]) => {

  const ones: number[] = []
  const twos: number[] = []
  const threes: number[] = []

  const map: { [key: number]: number[] } = {
    1: ones,
    2: twos,
    3: threes
  }

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    map[element].push(element)
  }

  return [...ones, ...twos, ...threes]
}