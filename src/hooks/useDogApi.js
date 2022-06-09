import { useState, useEffect } from "react";
import makeRequest from "../utils/makeRequest";

export const useDogApi = (route) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeRequest("get", `https://dog.ceo/api${route}`)
      .then((response) => setData(response["data"]["message"]))
      .finally(() => setLoading(false));
  }, [route]);

  return [data, loading];
};

export default useDogApi;
