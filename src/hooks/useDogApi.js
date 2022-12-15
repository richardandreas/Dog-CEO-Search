import { useState, useEffect } from "react";
import makeRequest from "../utils/makeRequest";
import buildSearchUrls from "../utils/buildSearchUrls";

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

export const useDogMultiApi = (searchParams) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let requests = buildSearchUrls(searchParams).map((route) => {
      return makeRequest("get", buildDogApiUrl(route));
    });

    Promise.all(requests)
      .then((responses) => {
        let mergedData = [];
        responses.forEach((response) => {
          mergedData = [...mergedData, ...response["data"]["message"]];
        });
        setData(mergedData);
      })
      .finally(() => {
        console.log("finisshh");
        setLoading(false);
      });
  }, [searchParams]);

  return [data, loading];
};

export default useDogApi;
