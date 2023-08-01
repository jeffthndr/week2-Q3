// Test del Calculo del factorial de un número Natural (entero positivo)
// 0 -> 1
// 1 -> 1
// 5 -> 120
// 10 -> 3.628.800
// 450 -> Infinity

import { factorial } from './factorial';

const cases = [
  [0, 1],
  [1, 1],
  [5, 120],
  [10, 3_628_800],
  [450, Infinity],
  [4500, Infinity],
];

test.each(cases)('Factorial de %i es %i', (value, expected) => {
  const result = factorial(value);
  expect(result).toBe(expected);
});

describe('Non valid factorials', () => {
  test('El Factorial de 1.5 es null', () => {
    const result = factorial(1.5);
    expect(result).toBe(null);
  });

  test('El factorial de -1 es null', () => {
    const result = factorial(-1);
    expect(result).toBe(null);
  });

  test('El factorial de pepe es null', () => {
    const result = factorial('pepe');
    expect(result).toBe(null);
  });
});
