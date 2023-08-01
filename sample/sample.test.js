import { add } from './sample.js';

test('With 0 and 0 result should be 0', () => {
  // Arrange
  const number1 = 0;
  const number2 = 0;
  const expected = 0;
  // Act
  const result = add(number1, number2);
  // Assert
  expect(result).toBe(expected);
});

test('With 1 and 2 result should be 3', () => {
  // Arrange
  const number1 = 1;
  const number2 = 2;
  const expected = 3;
  // Act
  const result = add(number1, number2);
  // Assert
  expect(result).toBe(expected);
});
