const forEachObject = (object, keyValueCallback) => {
  return Object.keys(object).map((key) => {
    return keyValueCallback(key, object[key]);
  });
};

export default forEachObject;
