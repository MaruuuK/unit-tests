const omit = require('./omit');

describe('omit', () => {
  it('omit should throw an error "Target argument must be object"', () => {
    const object = 'object';
    expect(() => {
      omit(object, ['a', 'c']);
    }).toThrow('Target argument must be object');
  });

  it('omit should throw an error "Other arguments must be string or array"', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(() => {
      omit(object, null);
    }).toThrow('Other arguments must be string or array');
  });

  it('omit should throw an error "Elements in array must be string"', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(() => {
      omit(object, [1, 2, 3, 4]);
    }).toThrow('Elements in array must be string');
  });

  it('omit should return the passed object, if other arguments are undefined', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object)).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
  });

  it('omit should return the new object if we pass array', () => {
    const object = {
      a: { nested: 'value' },
      b: [1, 2, 3],
      c: true
    };
    expect(omit(object, ['a', 'c'])).toEqual({ b: [1, 2, 3] });
  });


  it('omit should return the new object if we pass string argument', () => {
    const object = {
      a: { nested: 'value' },
      b: [1, 2, 3],
      c: true
    };
    expect(omit(object, 'c')).toEqual({ a: { nested: 'value' }, b: [1, 2, 3] });
  });

  it('omit should return the new object if we pass string arguments', () => {
    const object = {
      a: { nested: 'value' },
      b: [1, 2, 3],
      c: true
    };
    expect(omit(object, 'b', 'c')).toEqual({ a: { nested: 'value' } });
  });

  it('omit should return the new object if we pass argument, which is not exist in target object', () => {
    const object = {
      a: { nested: 'value' },
      b: [1, 2, 3],
      c: true
    };
    expect(omit(object, 'd')).toEqual({
      a: { nested: 'value' },
      b: [1, 2, 3],
      c: true
    });
  });

  it('omit should return omitted object if we pass a constructor', () => {
    function CustomObject() {
      this.d = 4;
      this.e = 5;
      this.f = 6;
      this.g = 7;
    }

    expect(omit(new CustomObject(), ['f', 'g'])).toEqual({ "d": 4, "e": 5 });
  });
})
