import { strictEquals } from './equals';

test('1 y 1 daría true', () => {
  expect(strictEquals(1, 1)).toBe(true);
});

test('NaN y NaN daría false', () => {
  expect(strictEquals(NaN, NaN)).toBe(false);
});

test('0 y -0 daría true', () => {
  expect(strictEquals(0, -0)).toBe(true);
});

test('-0 y 0 daría true', () => {
  expect(strictEquals(-0, 0)).toBe(true);
});

test('1 y "1" daría false', () => {
  expect(strictEquals(1, '1')).toBe(false);
});

test('true y false daría false', () => {
  expect(strictEquals(true, false)).toBe(false);
});
