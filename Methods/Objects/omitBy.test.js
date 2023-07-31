const omitBy = require('./omitBy');

describe('omitBy', () => {
  it('omitBy should throw an error "Target argument must be an object"', () => {
    const object = 'object';
    expect(() => {
      omitBy(object, (value, key) => key === 'a' || value > 3);
    }).toThrow('Target argument must be an object');
  });

  it('omitBy should throw an error "Predicate must be function"', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4
    };
    expect(() => {
      omitBy(object, ['a', 'c']);
    }).toThrow('Predicate must be function');
  });

  it('omitBy should return the empty object if we pass an empty object', () => {
    const object = {};
    const predicate = (value) => value % 2 === 0;
    const omittedObject = omitBy(object, predicate);
    expect(omittedObject).toEqual({});
  })

  it('omitBy should return the new object', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4
    };
    const predicate = (value) => value % 2 === 0;
    const omittedObject = omitBy(object, predicate);
    expect(omittedObject).toEqual({ 'a': 1, 'c': 3 });
  })

  it('omitBy should return the new object', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4
    };
    const predicate = (value) => value < 3;
    const omittedObject = omitBy(object, predicate);
    expect(omittedObject).toEqual({ 'c': 3, 'd': 4 });
  });

  it('omitBy should return the new object', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4
    };
    const predicate = (value, key) => key.startsWith('a');
    const omittedObject = omitBy(object, predicate);
    expect(omittedObject).toEqual({ 'b': 2, 'c': 3, 'd': 4 });
  });

  it('omitBy should return omitted object if we pass a constructor', () => {
    function CustomObject() {
      this.d = 4;
      this.e = 5;
      this.f = 6;
      this.g = 7;
    }

    expect(omitBy(new CustomObject(), (value) => value > 5)).toEqual({ "d": 4, "e": 5 });
  });
})
