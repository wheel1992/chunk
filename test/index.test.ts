import { chunk } from '../src'

describe('Chunk', () => {
  test('split an array of strings into default array sizes', () => {
    // [['a', 'b'], ['c', 'd']]
    const result = chunk(['a', 'b', 'c', 'd'])
    expect(result.length).toBe(2)
  });

  test('split an array of strings into arrays of 1 items each', () => {
    // [['a'], ['b'], ['c']]
    const result = chunk(['a', 'b', 'c'], 1)
    expect(result.length).toBe(3)
  });

  test('split an array of objects into arrays of 1 items each', () => {
    // [[{ a: 1 }], [{ b: 1 }], [{ c: 1 }]]
    const result = chunk([{ a: 1 }, { b: 1 }, { c: 1 }], 1)
    expect(result.length).toBe(3)
  });  
});