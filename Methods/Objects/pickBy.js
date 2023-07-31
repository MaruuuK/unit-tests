const pickBy = (object, predicate) => {
  if (!isObject(object)) {
    throw new Error('Target argument must be an object');
  }

  if (typeof predicate !== "function") {
    throw new Error('Predicate must be function');
  }

  let pickedObject = {};
  for (const key in object) {
    if (key in object && predicate(object[key], key)) {
      pickedObject[key] = object[key];
    }
  }

  return pickedObject;
}


function isObject(value) {
  return typeof value === 'object' && value !== null;
}

module.exports = pickBy;
