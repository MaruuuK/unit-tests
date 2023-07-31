const filter = (collection, predicate) => {
  if (!Array.isArray(collection) && !isPlainObject(collection)) {
    throw new Error('First argument must be an array or object');
  }

  if (typeof predicate !== 'function' && typeof predicate !== 'object' && typeof predicate !== 'string' || predicate === null) {
    throw new Error('Second argument must be a function, object, array or string as the second argument');
  }

  let array = modifyArray(collection);

  const result = [];
  let matchesValue = true;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof predicate === 'function') {
      matchesValue = predicate(element);
    } else if (typeof predicate === 'object' && !Array.isArray(predicate)) {
      matchesValue = matches(element, predicate);
    } else if (Array.isArray(predicate)) {
      matchesValue = matchesProperty(element, predicate)
    } else if (typeof predicate === 'string') {
      matchesValue = propertyMatches(element, predicate);
    }
    if (matchesValue) {
      result.push(element);
    }
  }
  return result;
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && value.constructor === Object;
}

function modifyArray(collection) {
  let array;
  if (Array.isArray(collection)) {
    array = collection;
  } else {
    array = [];
    for (const k of Object.keys(collection)) {
      array.push(collection[k]);
    }
  }
  return array;
}

function matches(obj, source) {
  for (const key in source) {
    if (source[key] !== obj[key]) {
      return false;
    }
  }
  return true;
}

function matchesProperty(obj, [prop, value]) {
  return obj[prop] === value;
}

function propertyMatches(obj, property) {
  return obj[property];
}
module.exports = filter;

