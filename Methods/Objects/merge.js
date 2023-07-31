const merge = (target, ...args) => {
  if (!isObject(target)) {
    throw new Error('Target argument must be an object');
  }

  let merged = Array.isArray(target) ? [] : {};

  for (let key in target) {
    if (key in target) {
      merged[key] = target[key];
    }
  }

  for (let element of args) {
    if (!isObject(element)) {
      throw new Error('Arguments must be objects');
    } else if (!isObject(target) || !isObject(element)) {
      throw new Error('Both parameters must have the same type');
    } else if (Array.isArray(target) !== Array.isArray(element)) {
      throw new Error('Both parameters must have the same type');
    }
    for (key in element) {
      if (key in element) {
        if (key in merged && isObject(merged[key]) && isObject(element[key])) {
          merged[key] = merge(merged[key], element[key]);
        } else {
          merged[key] = element[key];
        }
      }
    }

  }
  return merged;
}

function isObject(value) {
  return typeof value === 'object' && value !== null;
}

module.exports = merge;
