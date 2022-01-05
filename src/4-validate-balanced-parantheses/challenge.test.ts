import { validateBalancedParantheses } from "./challenge.solution"

test("should correctly return true because parantheses are balanced", () => {
  const input = "((()))"
  const result = validateBalancedParantheses(input)

  expect(result).toBe(true)
})

test("should correctly return true because parantheses are balanced with mixed types", () => {
  const input = "[()]{}"
  const result = validateBalancedParantheses(input)

  expect(result).toBe(true)
})

test("should correctly return false because parantheses are not balanced with mixed types", () => {
  const input = "({[)]"
  const result = validateBalancedParantheses(input)

  expect(result).toBe(false)
})
