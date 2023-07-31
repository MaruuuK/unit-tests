const toPairs = require('./toPairs');

describe('toPairs', () => {
  it('toPairs should throw an error "Argument must be an object"', () => {
    const object = 'object';
    expect(() => {
      toPairs(object);
    }).toThrow('Argument must be an object');
  });

  it('toPairs should throw an error "Argument must be an object"', () => {
    const object = null;
    expect(() => {
      toPairs(object);
    }).toThrow('Argument must be an object');
  });

  it('toPairs should return entries if we pass map collection', () => {
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    expect(toPairs(myMap)).toEqual(myMap);
  });

  it('toPairs should return entries if we pass set collection', () => {
    const mySet = new Set();
    mySet.add('apple');
    mySet.add('banana');
    mySet.add('orange');
    expect(toPairs(mySet)).toEqual(mySet);
  });

  it('toPairs should return empty array if we pass an empty object', () => {
    const object = {};
    expect(toPairs(object)).toEqual([]);
  });

  it('toPairs should return an array with the key-value pairs if we pass an object', () => {
    const object = { a: 1, b: 2, c: 3 };
    expect(toPairs(object)).toEqual([['a', 1], ['b', 2], ['c', 3]]);
  });

  it('toPairs should return empty array with the key-value pairs if we pass an constructor, but not the key-value pairs passed by using prototype', () => {
    function CustomObject() {
      this.d = 4;
    }
    CustomObject.prototype.e = 5;

    expect(toPairs(new CustomObject)).toEqual([['d', 4]]);
  });
})
