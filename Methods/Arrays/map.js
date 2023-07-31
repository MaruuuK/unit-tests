const map = (collection, predicate) => {
  if (!Array.isArray(collection) && !isPlainObject(collection)) {
    throw new Error('First argument must be an array or object');
  }

  let array = [];

  if (Array.isArray(collection)) {
    if (typeof predicate === 'function') {
      for (let i = 0; i < collection.length; i++) {
        array.push(predicate(collection[i]));
      }
      return array;
    } else if (typeof predicate === 'string' || typeof predicate === 'number') {
      if (typeof predicate === 'number') {
        predicate = predicate.toString();
      }
      for (let element of collection) {
        for (let key of Object.keys(element)) {
          if (key === predicate) {
            array.push(element[key]);
            break;
          }
        }
      }
      return array;
    }
    return collection;
  } else if (isPlainObject(collection)) {
    if (typeof predicate === 'function') {
      for (key of Object.keys(collection)) {
        array.push(predicate(collection[key]));
      }
      return array;
    }
  }
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && value.constructor === Object;
}


module.exports = map;
