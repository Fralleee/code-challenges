import { LinkedList, addTwoNumbersAsALinkedList } from "./challenge.solution"

test("should correctly return sum total of reversed list as linked list", () => {
  const list1 = new LinkedList<number>()
  list1.add(2)
  list1.add(4)
  list1.add(3)

  const list2 = new LinkedList<number>()
  list2.add(5)
  list2.add(6)
  list2.add(4)

  const result = addTwoNumbersAsALinkedList(list1, list2)

  expect(result.head?.value).toBe(7)
  expect(result.head?.next?.value).toBe(0)
  expect(result.head?.next?.next?.value).toBe(8)
  expect(result.toString()).toBe("708")
})
