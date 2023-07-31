const omit = (object, ...args) => {
  if (!isObject(object)) {
    throw new Error('Target argument must be object');
  }
  let omittedObject = {};

  for (const key in object) {
    if (args.length === 0) {
      omittedObject[key] = object[key];
    }
    for (const element of args) {
      if (!Array.isArray(element) && typeof element !== 'string') {
        throw new Error('Other arguments must be string or array');
      }
      if (Array.isArray(element)) {
        for (const value of element) {
          if (typeof value !== "string") {
            throw new Error('Elements in array must be string');
          } else if (key in object && !checkIncludedValue(element, key)) {
            omittedObject[key] = object[key];
          }
        }
      }
      if (typeof element === 'string') {
        if (key in object && !checkIncludedValue(args, key)) {
          omittedObject[key] = object[key];
        }
      }
    }
  }
  return omittedObject;
}


function isObject(value) {
  return typeof value === 'object' && value !== null;
}

function checkIncludedValue(args, value) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === value) {
      return true;
    }
  }
  return false;
}

module.exports = omit;
