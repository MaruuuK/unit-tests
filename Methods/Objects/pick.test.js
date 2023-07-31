const pick = require('./pick');

describe('pick', () => {
  it('pick should throw an error "Target argument must be object"', () => {
    const object = 'object';
    expect(() => {
      pick(object, ['a', 'c']);
    }).toThrow('Target argument must be object');
  });

  it('pick should throw an error "Other arguments must be string or array"', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(() => {
      pick(object, null);
    }).toThrow('Other arguments must be string or array');
  });

  it('pick should throw an error "Elements in array must be string"', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(() => {
      pick(object, [1, 2, 3, 4]);
    }).toThrow('Elements in array must be string');
  });

  it('pick should return the passed object, if other arguments are undefined', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object)).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
  });

  it('pick should return the new object if we pass array', () => {
    const object = {
      a: { nested: 'value' },
      b: [1, 2, 3],
      c: true
    };
    expect(pick(object, ['a', 'c'])).toEqual({
      a: { nested: 'value' },
      c: true
    });
  });


  it('pick should return the new object if we pass string argument', () => {
    const object = {
      a: { nested: 'value' },
      b: [1, 2, 3],
      c: true
    };
    expect(pick(object, 'c')).toEqual({ c: true });
  });

  it('pick should return the new object if we pass string arguments', () => {
    const object = {
      a: { nested: 'value' },
      b: [1, 2, 3],
      c: true
    };
    expect(pick(object, 'b', 'c')).toEqual({
      b: [1, 2, 3],
      c: true
    });
  });

  it('pick should return the new object if we pass argument, which is not exist in target object', () => {
    const object = {
      a: { nested: 'value' },
      b: [1, 2, 3],
      c: true
    };
    expect(pick(object, 'd')).toEqual({});
  });

  it('pick should return omitted object if we pass a constructor', () => {
    function CustomObject() {
      this.d = 4;
      this.e = 5;
      this.f = 6;
      this.g = 7;
    }
    expect(pick(new CustomObject(), ['f', 'g'])).toEqual({ "f": 6, "g": 7 });
  });
})
