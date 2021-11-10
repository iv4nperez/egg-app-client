import axios from "axios";
import { store } from "../store/store";
import { types } from "../types/types";

const customAxios = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ?  `https://api-egg-test.herokuapp.com/` :`http://localhost:9000/`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

const requestHandler = (request) => {
  let user = JSON.parse(localStorage.getItem("egg-user"));

  if (user) {
    request.headers["x-token"] = user.token;
  }

  return request;
};
const responseHandler = (response) => {
  if (response.status === 401) {
    store.dispatch({ type: types.logout });
  }
  return response;
};

const errorHandler = (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem("egg-user");

    store.dispatch({ type: types.logout });
  }
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
