import { LinkedList } from "./challenge.solution"

test("should correctly reverse linked list iteratively", () => {
  const list = new LinkedList<number>()
  list.add(4)
  list.add(3)
  list.add(2)
  list.add(1)
  list.add(0)

  const result = list.reverseItaretively()

  expect(result.head?.value).toBe(0)
  expect(result.head?.next?.value).toBe(1)
  expect(result.head?.next?.next?.value).toBe(2)
  expect(result.head?.next?.next?.next?.value).toBe(3)
  expect(result.head?.next?.next?.next?.next?.value).toBe(4)
  expect(result.toString()).toBe("01234")
})

test("should correctly reverse linked list recursively", () => {
  const list = new LinkedList<number>()
  list.add(4)
  list.add(3)
  list.add(2)
  list.add(1)
  list.add(0)

  const result = list.reverseRecursively(list.head)

  expect(result.head?.value).toBe(0)
  expect(result.head?.next?.value).toBe(1)
  expect(result.head?.next?.next?.value).toBe(2)
  expect(result.head?.next?.next?.next?.value).toBe(3)
  expect(result.head?.next?.next?.next?.next?.value).toBe(4)
  expect(result.toString()).toBe("01234")
})