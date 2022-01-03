class LinkedListNode<T> {
  value: T | null = null
  previous: (LinkedListNode<T> | null) = null
  next: (LinkedListNode<T> | null) = null

  constructor(value: any) {
    this.value = value
  }
}

export class LinkedList<T> {
  head: (LinkedListNode<T> | null) = null

  add = (value: T) => {
    const newNode = new LinkedListNode<T>(value);

    if (this.head === null) {
      this.head = newNode
      return;
    }

    let current: LinkedListNode<T> = this.head
    while (current.next) {
      current.next.previous = current
      current = current.next
    }

    current.next = newNode
    current.next.previous = current
  }

  reverse = (): LinkedList<T> => {
    let current = this.head
    let previous = null
    let next = null

    while (current != null) {
      next = current.next
      current.next = previous
      previous = current;
      current = next;
    }

    this.head = previous;
    return this
  }

  toString = (): string => {
    let result = ""
    let current = this.head

    while (current != null) {
      result += current.value
      current = current.next
    }

    return result
  }
}

export const addTwoNumbersAsALinkedList = (list1: LinkedList<number>, list2: LinkedList<number>) => {

  const sum1 = list1.reverse().toString()
  const sum2 = list2.reverse().toString()
  const total = +sum1 + +sum2

  const values = [...total.toString()]
  const linkedListResult = new LinkedList()
  values.forEach(value => linkedListResult.add(+value))

  return linkedListResult.reverse()
}
