import { chunk } from '../src'

describe('Chunk', () => {
  test('It should split an array of strings into default chunk', () => {
    // [['a', 'b'], ['c', 'd']]
    const result = chunk(['a', 'b', 'c', 'd'])
    expect(result.length).toBe(2)
  });

  test('It should split an array of objects into chunk of 1', () => {
    // [[{ a: 1 }], [{ b: 1 }], [{ c: 1 }]]
    const result = chunk([{ a: 1 }, { b: 1 }, { c: 1 }], 1)
    expect(result.length).toBe(3)
  });  

  test('It should able to split array into chunk of 1', () => {
    const result = chunk([1, 2, 3, 4, 5, 6], 1);
    expect(result.length).toBe(6);
  });

  test('It should able to split array into chunk of 2', () => {
    const result = chunk([1, 2, 3, 4, 5, 6], 2);
    expect(result.length).toBe(3);
  });

  test('It should able to split array into chunk of 3', () => {
    const result = chunk([1, 2, 3, 4, 5, 6], 3);
    expect(result.length).toBe(2);
  });

  test('It should able to split array into chunk of 4', () => {
    const result = chunk([1, 2, 3, 4, 5, 6], 4);
    expect(result.length).toBe(2);
  });

  test('It should able to split array into chunk of 5', () => {
    const result = chunk([1, 2, 3, 4, 5, 6], 5);
    expect(result.length).toBe(2);
  });

  test('It should able to split array into chunk of 6', () => {
    const result = chunk([1, 2, 3, 4, 5, 6], 6);
    expect(result.length).toBe(1);
  });
});