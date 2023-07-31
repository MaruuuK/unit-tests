const omitBy = (object, predicate) => {
  if (!isObject(object)) {
    throw new Error('Target argument must be an object');
  }

  if (typeof predicate !== "function") {
    throw new Error('Predicate must be function');
  }

  let omittedObject = {};
  for (const key in object) {
    if (key in object && !predicate(object[key], key)) {
      omittedObject[key] = object[key];
    }
  }

  return omittedObject;
}


function isObject(value) {
  return typeof value === 'object' && value !== null;
}

module.exports = omitBy;
