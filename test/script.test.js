const { add, subtract } = require('../script');

test('add should return the sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  expect(add(-2, -3)).toBe(-5);
});

test('subtract should return the difference between two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(3, 5)).toBe(-2);
  expect(subtract(-1, 1)).toBe(-2);
});
