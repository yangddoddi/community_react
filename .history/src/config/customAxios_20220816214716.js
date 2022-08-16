import axios from "axios";

export const customAxios = (url, callback) => {
  axios({
    url: "/api" + url,
    method: "post",

    baseURL: "http://localhost:8080",
    withCredentials: true,
  }).then((response) => {
    callback(response.data);
  });
};
