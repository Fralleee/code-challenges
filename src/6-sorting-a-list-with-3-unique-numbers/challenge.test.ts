import { sortList } from "./challenge.solution"

test("should correctly sort the list", () => {
  const list = [3, 3, 2, 1, 3, 2, 1]
  const result = sortList(list)

  expect(result.toString()).toBe("1,1,2,2,3,3,3")
})

test("should correctly sort the with linear time scaling", () => {
  const times: number[] = []
  let list: number[]
  let start: number
  let duration: number
  let ratio: number

  for (let i = 10; i < 10000000; i *= 10) {
    list = Array.from({ length: i }, () => Math.floor(Math.random() * 3) + 1);
    start = Date.now()
    sortList(list)
    duration = Date.now() - start
    ratio = duration / (i * i)
    times.push(ratio)
  }

  const min = Math.min(...times)
  const max = Math.max(...times)
  expect(max).toBeCloseTo(min)
})
