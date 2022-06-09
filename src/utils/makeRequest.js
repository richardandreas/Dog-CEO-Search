import axios from "axios";
import { message } from "antd";

const makeRequest = (method, url, data = null) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
    })
      .then((response) => resolve(response))
      .catch((error) => {
        message.error("Ops! There was an error");
        reject(error);
      });
  });
};

export default makeRequest;
