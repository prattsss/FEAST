import { sum } from "../sum"
test('should first', () => {
  const result = sum(2, 2)
  expect(result).toBe(4)
})