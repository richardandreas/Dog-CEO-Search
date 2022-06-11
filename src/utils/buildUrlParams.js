import truncateObject from "./truncateObject";

const buildUrlParams = (params) => {
  return `?${new URLSearchParams(truncateObject(params)).toString()}`;
};

export default buildUrlParams;
