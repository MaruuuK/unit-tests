const take = require('./take');

describe('take', () => {
  test('take should return a slice of array with 2 elements taken from the beginning', () => {
    const array = [1, 2, 3];
    const number = 2;
    const takenArray = take(array, number);
    expect(takenArray).toEqual([1, 2]);
  });

  test('take should return a slice of array if number of elements more than length of array', () => {
    const array = [1, 2, 3];
    const number = 5;
    const takenArray = take(array, number);
    expect(takenArray).toEqual([1, 2, 3]);
  });

  test('take should return a slice of array with 0 elements taken from the beginning', () => {
    const array = [1, 2, 3];
    const takenArray = take(array);
    expect(takenArray).toEqual([1]);
  });

  test('take should return a slice of array of strings with 2 elements taken from the beginning', () => {
    const array = [true, false, true, false];
    const number = 2;
    const takenArray = take(array, number);
    expect(takenArray).toEqual([true, false]);
  });

  test('take should return an empty array if it was passed empty array', () => {
    const array = [];
    const number = 5;
    const takenArray = take(array, number);
    expect(takenArray).toEqual([]);
  });

  test('take should throw error "First argument must be an array"', () => {
    const array = 'array';
    const number = 2;
    expect(() => {
      take(array, number);
    }).toThrow('First argument must be an array');
  });

  test('take should throw error "Second argument must be a positive number"', () => {
    const array = [1, 2, 3];
    const number = -2;
    expect(() => {
      take(array, number);
    }).toThrow('Second argument must be a positive number');
  });

  test('take should throw error "Second argument must be a positive number"', () => {
    const array = [1, 2, 3];
    const number = 'length';
    expect(() => {
      take(array, number);
    }).toThrow('Second argument must be a positive number');
  });


})
