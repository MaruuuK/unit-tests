const find = require('./find');

describe('find', () => {
  it('find should return the first element predicate returns truthy for if predicate was function', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
    ];
    const predicate = function (o) { return o.age < 40; };
    const foundElement = find(collection, predicate);
    expect(foundElement).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
  });

  it('find should return the first element predicate returns truthy for if predicate was object', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
    ];
    const predicate = { 'age': 1, 'active': true };
    const foundElement = find(collection, predicate);
    expect(foundElement).toEqual({ 'user': 'pebbles', 'age': 1, 'active': true });
  });


  it('find should return the first element predicate returns truthy for if predicate was array', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
    ];
    const predicate = ['active', false];
    const foundElement = find(collection, predicate);
    expect(foundElement).toEqual({ 'user': 'fred', 'age': 40, 'active': false });
  });

  it('find should return the first element predicate returns truthy for if predicate was string', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
    ];
    const predicate = 'active';
    const foundElement = find(collection, predicate);
    expect(foundElement).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
  });

  it('find should return undefined', () => {
    const collection = []
    const predicate = function (o) { return !o.active; };
    const foundElement = find(collection, predicate);
    expect(foundElement).toEqual(undefined);
  });

  it('find should throw error ', () => {
    const collection = { 'user': 'barney', 'age': 36, 'active': true };
    const predicate = function (o) { return !o.active; };
    const foundElement = find(collection, predicate);
    expect(foundElement).toEqual('barney');
  });

  it('find should return found element 4', () => {
    const collection = [1, 2, 3, 4, 5];
    const predicate = function (value) { return value > 3; };
    const foundElement = find(collection, predicate);
    expect(foundElement).toEqual(4);
  });

  it('null find should throw error "Second argument must be a function, object, array or string as the second argument"', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
    ];
    const predicate = null;
    expect(() => {
      find(collection, predicate);
    }).toThrow('Second argument must be a function, object, array or string as the second argument');
  });

  it('undefined find should throw error "Second argument must be a function, object, array or string as the second argument"', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
    ];
    expect(() => {
      find(collection);
    }).toThrow('Second argument must be a function, object, array or string as the second argument');
  });


  it('number find should throw error "Second argument must be a function, object, array or string as the second argument"', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
    ];
    const predicate = 1454;
    expect(() => {
      find(collection, predicate);
    }).toThrow('Second argument must be a function, object, array or string as the second argument');
  });
})
