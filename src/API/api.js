import * as axios from "axios";

const instanse = axios.create({
  baseURL: "https://snp-tests.herokuapp.com/api/v1/",
  headers: {
    "scope-key": "bZZ7B5GJjhGuD2pv",
  },
  withCredentials: true,
});

export const api = {
  signin(params) {
    return instanse.post("signin", params).then((response) => {
      return response;
    });
  },
  signup(params) {
    return instanse.post("singup", params).then((response) => {
      return response;
    });
  },
  getCurrentUser() {
    return instanse.get("users/current").then((response) => {
      return response;
    });
  },
  logout() {
    return instanse.delete("logout").then((response) => {
      return response;
    });
  },
};
