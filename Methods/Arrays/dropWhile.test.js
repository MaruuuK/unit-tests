const dropWhile = require('./dropWhile');

describe('dropWhile', () => {
  it('function dropWhile should return a slice of array excluding elements dropped from the beginning with function', () => {
    const array = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const predicate = function (o) { return !o.active; };
    const dropWhiledArray = dropWhile(array, predicate);
    expect(dropWhiledArray).toEqual([{ 'user': 'pebbles', 'active': true }]);
  });

  it('object dropWhile should return a slice of array excluding elements dropped from the beginning with object', () => {
    const array = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const predicate = { 'user': 'barney', 'active': false };
    const dropWhiledArray = dropWhile(array, predicate);
    expect(dropWhiledArray).toEqual([{ 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }]);
  });

  it('dropWhile should return a slice of array excluding elements dropped from the beginning with array', () => {
    const array = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const predicate = ['active', false];
    const dropWhiledArray = dropWhile(array, predicate);
    expect(dropWhiledArray).toEqual([{ 'user': 'pebbles', 'active': true }]);
  });

  it('dropWhile should return a slice of array excluding elements dropped from the beginning with string', () => {
    const array = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const predicate = 'active';
    const dropWhiledArray = dropWhile(array, predicate);
    expect(dropWhiledArray).toEqual([
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }]);
  });

  it('dropWhile should throw error "First argument must be an array"', () => {
    const array = 'array';
    const predicate = function (o) { return !o.active; };
    expect(() => {
      dropWhile(array, predicate);
    }).toThrow('First argument must be an array');
  });


  it('null dropWhile should throw error "Second argument must be a function, object, array or string as the second argument"', () => {
    const array = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const predicate = null;
    expect(() => {
      dropWhile(array, predicate);
    }).toThrow('Second argument must be a function, object, array or string as the second argument');
  });

  it('undefined dropWhile should throw error "Second argument must be a function, object, array or string as the second argument"', () => {
    const array = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    expect(() => {
      dropWhile(array);
    }).toThrow('Second argument must be a function, object, array or string as the second argument');
  });

  it('number dropWhile should throw error "Second argument must be a function, object, array or string as the second argument"', () => {
    const array = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const predicate = 1;
    expect(() => {
      dropWhile(array, predicate);
    }).toThrow('Second argument must be a function, object, array or string as the second argument');
  });

  it('dropWhile should return empty array if it was passed empty array', () => {
    const array = [];
    const predicate = function (o) { return !o.active; };
    const dropWhiledArray = dropWhile(array, predicate);
    expect(dropWhiledArray).toEqual([]);
  });
})
