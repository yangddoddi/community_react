import axios from "axios";

export const testAxios = (url, findIp) => {
  axios({
    url: "/" + url,
    method: "post",
    baseURL: "http://localhost:8080",
    withCredentials: true,
  }).then((response) => {
    findIp(response.data);
  });
};
