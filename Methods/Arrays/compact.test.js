const compact = require('./compact');

describe('compact', () => {
  it('Compact should return filtered array of truthy values', () => {
    const array = [0, 1, null, 2, 3, false, 4, undefined, 5, '', NaN];
    const compactedArray = compact(array);
    expect(compactedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('Compact should return filtered array of truthy values', () => {
    const array = [0, null, false, undefined, '', NaN];
    const compactedArray = compact(array);
    expect(compactedArray).toEqual([]);
  });

  it('Compact should return filtered array of truthy values', () => {
    const array = [1, null, false, 'hello', undefined, '', NaN, 5];
    const compactedArray = compact(array);
    expect(compactedArray).toEqual([1, "hello", 5]);
  });

  it('Compact should return a given array if there are no falsy values in array', () => {
    const array = [1, 2, 3,];
    const compactedArray = compact(array);
    expect(compactedArray).toEqual([1, 2, 3]);
  });

  it('Compact should throw an error "Argument must be an array"', () => {
    const array = 'array';
    expect(() => {
      compact(array);
    }).toThrow('Argument must be an array');
  });

  it('Compact should return an empty array', () => {
    const array = [];
    const compactedArray = compact(array);
    expect(compactedArray).toEqual([]);
  });
});
