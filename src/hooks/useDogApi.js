import { useState, useEffect } from "react";
import makeRequest from "../utils/makeRequest";

const buildDogApiUrl = (route) => `https://dog.ceo/api${route}`;

export const useDogApi = (route) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    makeRequest("get", buildDogApiUrl(route))
      .then((response) => setData(response["data"]["message"]))
      .finally(() => setLoading(false));
  }, [route]);

  return [data, loading];
};

export const useDogApiMultiple = (routes, trigger) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let fetchingData = [];
    let dataCount = 0;

    routes.forEach((route) => {
      makeRequest("get", buildDogApiUrl(route))
        .then((response) => {
          fetchingData[route] = response["data"]["message"];
          setData(fetchingData);
        })
        .finally(() => {
          dataCount += 1;
          if (dataCount >= routes.length) setLoading(false);
        });
    });
    // eslint-disable-next-line
  }, [trigger]);
  return [data, loading];
};

export default useDogApi;
