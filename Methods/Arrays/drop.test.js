const drop = require('./drop');

describe('drop', () => {

  it('Drop should return a slice of array with 2 elements dropped from the beginning', () => {
    const array = [1, 2, 3];
    const number = 2;
    const droppedArray = drop(array, number);
    expect(droppedArray).toEqual([3]);
  });

  it('Drop should return a slice of array with 1 element dropped from the beginning', () => {
    const array = [1, 2, 3];
    const droppedArray = drop(array);
    expect(droppedArray).toEqual([2, 3]);
  });

  it('Drop should return a slice of array with 0 elements dropped from the beginning', () => {
    const array = [1, 2, 3];
    const number = 0;
    const droppedArray = drop(array, number);
    expect(droppedArray).toEqual([1, 2, 3]);
  });

  it('Drop should return empty array if number more than length of array', () => {
    const array = [1, 2, 3];
    const number = 5;
    const droppedArray = drop(array, number);
    expect(droppedArray).toEqual([]);
  });

  it('Drop should throw error "First argument must be an array"', () => {
    const array = 'array';
    const number = 2;
    expect(() => {
      drop(array, number);
    }).toThrow('First argument must be an array');
  });

  it('Drop should throw error "Second argument must be a positive number"', () => {
    const array = [1, 2, 3];
    const number = -2;
    expect(() => {
      drop(array, number);
    }).toThrow('Second argument must be a positive number');
  });

  it('Drop should throw error "Second argument must be a positive number"', () => {
    const array = [1, 2, 3];
    const number = 'length';
    expect(() => {
      drop(array, number);
    }).toThrow('Second argument must be a positive number');
  });
});
