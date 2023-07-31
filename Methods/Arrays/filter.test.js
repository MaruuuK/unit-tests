const filter = require('./filter');

describe('filter', () => {
  it('filter should return the new filtered array if predicate was function', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];
    const predicate = function (o) { return !o.active; };
    const filteredArray = filter(collection, predicate);
    expect(filteredArray).toEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
  });

  it('filter should return the new filtered array if predicate was object', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];
    const predicate = { 'age': 36, 'active': true };
    const filteredArray = filter(collection, predicate);
    expect(filteredArray).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
  });

  it('filter should return the new filtered array if predicate was array', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];
    const predicate = ['active', false];
    const filteredArray = filter(collection, predicate);
    expect(filteredArray).toEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
  });

  it('filter should return the new filtered array if predicate was string', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];
    const predicate = 'active';
    const filteredArray = filter(collection, predicate);
    expect(filteredArray).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
  });

  it('filter should return the new filtered array if first argument is object', () => {
    const collection = {
      'user1': { 'name': 'John', 'age': 25 },
      'user2': { 'name': 'Jane', 'age': 30 },
      'user3': { 'name': 'Bob', 'age': 35 }
    }
    const predicate = function (o) { return o.age > 28; };
    const filteredArray = filter(collection, predicate);
    expect(filteredArray).toEqual([{ name: 'Jane', age: 30 }, { 'name': 'Bob', 'age': 35 }]);
  });

  it('filter should return filtered array if first argument is object and predicate is function', () => {
    const collection = { 'user': 'barney', 'age': 36, 'active': true };
    const predicate = function (value) {
      return value > 20
    };
    const filteredArray = filter(collection, predicate);
    expect(filteredArray).toEqual([36]);
  });


  it('filter should return empty array if first argument is object and predicate is string', () => {
    const collection = { 'user': 'barney', 'age': 36, 'active': true };
    const predicate = 'string';
    const filteredArray = filter(collection, predicate);
    expect(filteredArray).toEqual([]);
  });

  it('filter should return the empty array if collection was array which was empty', () => {
    const collection = [];
    const predicate = 'active';
    const filteredArray = filter(collection, predicate);
    expect(filteredArray).toEqual([]);
  });

  it('filter should throw error "First argument must be an array or object"', () => {
    const collection = 'array';
    const predicate = function (o) { return !o.active; };
    expect(() => {
      filter(collection, predicate);
    }).toThrow('First argument must be an array or object');
  });

  it('if predicate = null, filter should throw error "Second argument must be a function, object, array or string as the second argument"', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];
    const predicate = null;
    expect(() => {
      filter(collection, predicate);
    }).toThrow('Second argument must be a function, object, array or string as the second argument');
  });

  it('if predicate = undefined, filter should throw error "Second argument must be a function, object, array or string as the second argument"', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];
    expect(() => {
      filter(collection);
    }).toThrow('Second argument must be a function, object, array or string as the second argument');
  });

  it('if predicate = undefined, filter should throw error "Second argument must be a function, object, array or string as the second argument"', () => {
    const collection = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];
    const predicate = 1454;
    expect(() => {
      filter(collection, predicate);
    }).toThrow('Second argument must be a function, object, array or string as the second argument');
  });

})
