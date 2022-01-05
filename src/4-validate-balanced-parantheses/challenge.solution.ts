class Stack<T> {

  data: T[] = [];
  top: number = 0;

  push = (element: T) => {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  peek = () => this.data[this.top - 1]

  isEmpty = () => this.top === 0

  pop = () => {
    if (!this.isEmpty()) {
      this.top = this.top - 1;
      return this.data.pop();
    }
  }
}

const openingParantheses = new Set<string>(["(", "{", "["])
const closingParantheses = new Set<string>([")", "}", "]"])
const closingOpeningMap: { [key: string]: string; } = {
  ")": "(",
  "}": "{",
  "]": "["
}

export const validateBalancedParantheses = (input: string): boolean => {
  const paranthesesStack = new Stack<string>()
  const parantheses = [...input]

  for (let i = 0; i < parantheses.length; i++) {
    const p = parantheses[i];
    if (openingParantheses.has(p)) paranthesesStack.push(p)
    else if (closingParantheses.has(p)) {
      if (closingOpeningMap[p] === paranthesesStack.peek()) paranthesesStack.pop()
      else return false
    }
  }

  return paranthesesStack.isEmpty()
}