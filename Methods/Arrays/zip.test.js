const zip = require('./zip');

describe('zip', () => {
  it('zip should throw an error "All arguments must be arrays"', () => {
    expect(() => {
      zip([1, 2, 3], null, 1);
    }).toThrow('All arguments must be arrays')
  });

  it('zip should returns new array of grouped elements', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]])
  });

  it('zip should returns an empty array if we pass empty array', () => {
    expect(zip([])).toEqual([])
  });

  it('zip should returns new array of grouped elements if one of the passed arrays is more than others', () => {
    expect(zip(['a', 'b', 'c'], [1, 2])).toEqual([['a', 1], ['b', 2], ['c', undefined]])
  });
})
