const includes = require('./includes');

describe('includes', () => {
  it('includes should throw error "First argument must be array, object or string"', () => {
    const collection = Number(123);
    const value = 3;
    expect(() => {
      includes(collection, value);
    }).toThrow('First argument must be array, object or string');
  });

  it('includes should return true (array without indexStart)', () => {
    const collection = [1, 2, 3];
    const value = 2;
    const includedElement = includes(collection, value);
    expect(includedElement).toEqual(true);
  });

  it('includes should return false (array with indexStart)', () => {
    const collection = [1, 2, 3];
    const value = 1;
    const indexStart = 2
    const includedElement = includes(collection, value, indexStart);
    expect(includedElement).toEqual(false);
  });

  it('includes should return true (object)', () => {
    const collection = { 'a': 1, 'b': 2 };
    const value = 2;
    const includedElement = includes(collection, value);
    expect(includedElement).toEqual(true);
  });


  it('includes should return true (object with indexStart)', () => {
    const collection = { 'a': 1, 'b': 2 };
    const value = 2;
    const indexStart = 1;
    const includedElement = includes(collection, value, indexStart);
    expect(includedElement).toEqual(true);
  });

  it('includes should return false (object with indexStart)', () => {
    const collection = { 'a': 1, 'b': 2 };
    const value = 2;
    const indexStart = 3;
    const includedElement = includes(collection, value, indexStart);
    expect(includedElement).toEqual(false);
  });

  it('includes should return true (string)', () => {
    const collection = 'abcd';
    const value = 'bc';
    const includedElement = includes(collection, value);
    expect(includedElement).toEqual(true);
  });

  it('includes should return false (array)', () => {
    const collection = [1, 2, 3];
    const value = null;
    const includedElement = includes(collection, value);
    expect(includedElement).toEqual(false);
  });

  it('includes should return true (array)', () => {
    const collection = [1, undefined, 3];
    const value = undefined;
    const includedElement = includes(collection, value);
    expect(includedElement).toEqual(true);
  });
})
