const truncateObject = (object) => {
  for (const key in object) {
    if (
      !object[key] ||
      object[key] === "" ||
      object[key] === [] ||
      object[key] === {}
    )
      delete object[key];
  }

  return object;
};

export default truncateObject;
