const chunk = require('./chunk');

describe('chunk', () => {
  it('Chunk an array of 10 values with length of 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const length = 2;
    const chunkedArray = chunk(arr, length);
    expect(chunkedArray).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });

  it('Chunk an array of 7 values with length of 3', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const length = 3;
    const chunkedArray = chunk(arr, length);
    expect(chunkedArray).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it('Chunk should handle empty array', () => {
    const arr = [];
    const length = 3;
    const chunkedArray = chunk(arr, length);
    expect(chunkedArray).toEqual([]);
  });

  it('Chunk should handle array with fewer elements that length', () => {
    const arr = [1, 2, 3];
    const length = 5;
    const chunkedArray = chunk(arr, length);
    expect(chunkedArray).toEqual([[1, 2, 3]]);
  });

  it('Chunk should throw error "Second argument must be a positive integer"', () => {
    const arr = [1, 2, 3];
    const length = -2;
    expect(() => {
      chunk(arr, length);
    }).toThrow('Second argument must be a positive integer');
  });

  it('Chunk should throw error "Second argument must be a positive integer"', () => {
    const arr = [1, 2, 3];
    const length = 'length';
    expect(() => {
      chunk(arr, length);
    }).toThrow('Second argument must be a positive integer');
  });

  it('Chunk should throw error "First argument must be array"', () => {
    const arr = 'array';
    const length = 2;
    expect(() => {
      chunk(arr, length);
    }).toThrow('First argument must be an array');
  });
});

