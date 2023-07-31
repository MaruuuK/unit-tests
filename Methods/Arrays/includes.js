const includes = (collection, value, indexStart = 0) => {
  if (indexStart === undefined) {
    indexStart = 0;
  }

  if (Array.isArray(collection)) {
    for (let i = indexStart; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
    return false;
  } else if (typeof collection === 'string') {
    for (let i = indexStart; i < collection.length - value.length + 1; i++) {
      if (collection.slice(i, i + value.length) === value) {
        return true;
      }
    }
    return false;
  } else if (isPlainObject(collection)) {
    const array = Object.keys(collection);
    for (let i = indexStart; i < array.length; i++) {
      if (collection[array[i]] === value) {
        return true;
      }
    }
    return false;
  } else {
    throw new Error('First argument must be array, object or string');
  }
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && value.constructor === Object;
}

module.exports = includes;


