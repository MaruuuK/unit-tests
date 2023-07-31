const pickBy = require('./pickBy');

describe('pickBy', () => {
  it('pickBy should throw an error "Target argument must be an object"', () => {
    const object = 'object';
    expect(() => {
      pickBy(object, (value, key) => key === 'a' || value > 3);
    }).toThrow('Target argument must be an object');
  });

  it('pickBy should throw an error "Predicate must be function"', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4
    };
    expect(() => {
      pickBy(object, ['a', 'c']);
    }).toThrow('Predicate must be function');
  });

  it('pickBy should return the empty object if we pass an empty object', () => {
    const object = {};
    const predicate = (value) => value % 2 === 0;
    const pickedObject = pickBy(object, predicate);
    expect(pickedObject).toEqual({});
  })

  it('pickBy should return the new object', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4
    };
    const predicate = (value) => value % 2 === 0;
    const pickedObject = pickBy(object, predicate);
    expect(pickedObject).toEqual({
      'b': 2,
      'd': 4
    });
  })

  it('pickBy should return the new object', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4
    };
    const predicate = (value) => value < 3;
    const pickedObject = pickBy(object, predicate);
    expect(pickedObject).toEqual({
      'a': 1,
      'b': 2,
    });
  });

  it('pickBy should return the new object', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4
    };
    const predicate = (value, key) => key.startsWith('a');
    const pickedObject = pickBy(object, predicate);
    expect(pickedObject).toEqual({
      'a': 1
    });
  });

  it('pickBy should return omitted object if we pass a constructor', () => {
    function CustomObject() {
      this.d = 4;
      this.e = 5;
      this.f = 6;
      this.g = 7;
    }
    expect(pickBy(new CustomObject(), (value) => value < 6)).toEqual({ "d": 4, "e": 5 });
  });
})
