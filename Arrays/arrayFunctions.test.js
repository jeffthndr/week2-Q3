import { calculateLength } from './arrayFunctions';

describe('Given calculateLength function', () => {
  describe('When it is call with [2, 4, 6, 8]', () => {
    test('Then list length should be 4', () => {
      const list = [2, 4, 6, 8];
      const expected = 4;
      const result = calculateLength(list);
      expect(result).toBe(expected);
    });
  });

  describe('When it is call with []', () => {
    test('Then list length should be 0', () => {
      const list = [];
      const expected = 0;
      const result = calculateLength(list);
      expect(result).toBe(expected);
    });
  });

  describe('When it is call with [undefined]', () => {
    test('Then list length should be 1', () => {
      const list = [undefined];
      const expected = 1;
      const result = calculateLength(list);
      expect(result).toBe(expected);
    });
  });

  describe('When it is call with [ 1, 2, <98 empty items>, 200 ]', () => {
    test('Then list length should be 101', () => {
      const list = [1, 2];
      list[100] = 200;
      const expected = 101;
      const result = calculateLength(list);
      expect(result).toBe(expected);
    });
  });
});
