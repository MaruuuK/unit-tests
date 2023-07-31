const map = require('./map');

describe('map', () => {
  it('map should throw the error "First argument must be an array or object"', () => {
    const collection = 'string';
    const predicate = function (n) { return n * n };
    expect(() => {
      map(collection, predicate);
    }).toThrow('First argument must be an array or object');
  });

  it('map should return the new mapped array if first argument is array and the second one is function', () => {
    const collection = [4, 8];
    const predicate = function square(n) {
      return n * n;
    };
    const mappedArray = map(collection, predicate);
    expect(mappedArray).toEqual([16, 64]);
  });

  it('map should return the new mapped array if first argument is object and the second one is function', () => {
    const collection = { 'a': 4, 'b': 8 };
    const predicate = function square(n) {
      return n * n;
    };
    const mappedArray = map(collection, predicate);
    expect(mappedArray).toEqual([16, 64]);
  });

  it('map should return the new mapped array if first argument is object collection and the second one is string', () => {
    const collection = [
      { 1: 'barney' },
      { 1: 'fred' }
    ];
    const predicate = 1;
    const mappedArray = map(collection, predicate);
    expect(mappedArray).toEqual(['barney', 'fred']);
  });

  it('map should return the new mapped array if first argument is object collection and the second one is string', () => {
    const collection = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];
    const predicate = 'user';
    const mappedArray = map(collection, predicate);
    expect(mappedArray).toEqual(['barney', 'fred']);
  });

  it('map should return the collection if predicate is null', () => {
    const collection = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];
    const predicate = null;
    const mappedArray = map(collection, predicate);
    expect(mappedArray).toEqual([
      { 'user': 'barney' },
      { 'user': 'fred' }
    ]);
  });

  it('map should return the collection if predicate is undefined', () => {
    const collection = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];
    const mappedArray = map(collection);
    expect(mappedArray).toEqual([
      { 'user': 'barney' },
      { 'user': 'fred' }
    ]);
  });

  it('map should return the collection if predicate is number', () => {
    const collection = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];
    const predicate = 1123;
    const mappedArray = map(collection, predicate);
    expect(mappedArray).toEqual([]);
  });
})
