class LinkedListNode<T> {
  value: T | null = null
  next?: LinkedListNode<T>

  constructor(value: any) {
    this.value = value
  }
}

export class LinkedList<T> {
  head?: LinkedListNode<T>

  add = (value: T) => {
    const newNode = new LinkedListNode<T>(value);

    if (!this.head) {
      this.head = newNode
      return;
    }

    let current: LinkedListNode<T> = this.head
    while (current.next) {
      current = current.next
    }

    current.next = newNode
  }

  reverseItaretively = (): LinkedList<T> => {
    let current = this.head
    let previous
    let next

    while (current !== undefined) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }

    this.head = previous;
    return this
  }

  reverseRecursively = (current?: LinkedListNode<T> | null, previous?: LinkedListNode<T>): LinkedList<T> => {
    if (!current) return this

    let next = current.next
    current.next = previous
    previous = current
    this.head = previous

    return this.reverseRecursively(next, previous)
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
