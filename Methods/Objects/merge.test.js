const merge = require('./merge');

describe('merge', () => {
  it('merge should throw an errors "Arguments must be objects"', () => {
    const firstArg = { a: 1 };
    const secondArg = null;
    expect(() => {
      merge(firstArg, secondArg);
    }).toThrow('Arguments must be objects')
  });

  it('merge should throw an errors "Target argument must be an object"', () => {
    const firstArg = null;
    const secondArg = { a: 1 };
    expect(() => {
      merge(firstArg, secondArg);
    }).toThrow('Target argument must be an object')
  });

  it('merge should return passed object if we pass only one argument', () => {
    const firstArg = { a: 1 };
    expect(merge(firstArg)).toEqual(firstArg);
  });

  it('merge should return merged object if we pass two objects', () => {
    const firstArg = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };
    const secondArg = {
      'a': [{ 'c': 3 }, { 'e': 5 }]
    };
    const mergedObject = merge(firstArg, secondArg);
    expect(mergedObject).toEqual({
      'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }]
    });
  });

  it('merge should return merged object if the first argument an empty object', () => {
    const firstArg = {};
    const secondArg = {
      'a': [{ 'c': 3 }, { 'e': 5 }]
    };
    const mergedObject = merge(firstArg, secondArg);
    expect(mergedObject).toEqual({
      'a': [{ 'c': 3 }, { 'e': 5 }]
    });
  });

  it('merge should return merged object if the second argument an empty object', () => {
    const firstArg = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };
    const secondArg = {};
    const mergedObject = merge(firstArg, secondArg);
    expect(mergedObject).toEqual({
      'a': [{ 'b': 2 }, { 'd': 4 }]
    });
  });

  it('merge should return the las object if value in objects are arrays of primitives', () => {
    const firstArg = {
      'a': [1, 2, 3]
    };
    const secondArg = {
      'a': [4, 5, 6]
    };
    const mergedObject = merge(firstArg, secondArg);
    expect(mergedObject).toEqual({
      a: [4, 5, 6]
    });
  });

  it('merge should return merged object if we pass several arguments', () => {
    const firstArg = { 'a': 1 };
    const secondArg = { 'b': 2 };
    const thirdArg = { 'c': 3 };

    const mergedObject = merge(firstArg, secondArg, thirdArg);
    expect(mergedObject).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
  });

  it('merge should throw an errors "Both parameters must have the same type"', () => {
    const firstArg = { 'a': 1 };
    const secondArg = [1, 2, 3];

    expect(() => {
      merge(firstArg, secondArg);
    }).toThrow('Both parameters must have the same type')
  });

  it('merge should return merged object if we pass the first argument as constructor', () => {
    function CustomObject() {
      this.d = 4;
    }
    const secondArg = { 'b': 2 };

    const mergedObject = merge(new CustomObject(), secondArg,);
    expect(mergedObject).toEqual({ d: 4, b: 2 });
  });


  it('merge should return merged object if we pass the second argument as constructor', () => {
    function CustomObject() {
      this.d = 4;
    }
    const Arg = { 'b': 2 };

    const mergedObject = merge(Arg, new CustomObject());
    expect(mergedObject).toEqual({ b: 2, d: 4 });
  });
})

