import axios from "axios";
import { API_BASE_URL } from "../../configs/AppConfig";
import history from "../history";
import { AUTH_TOKEN, KEY } from "../constants";
import { notification } from "antd";
import "antd/dist/antd.css";

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});
const key = KEY;

// Config
const ENTRY_ROUTE = "/signin";
const TOKEN_PAYLOAD_KEY = "x-auth-token";
const PUBLIC_REQUEST_KEY = "public-request";

// API Request interceptor
service.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem(AUTH_TOKEN);
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Method"] = "*";

    if (jwtToken) {
      config.headers[TOKEN_PAYLOAD_KEY] = `${jwtToken}`;
    }

    if (!jwtToken && !config.headers[PUBLIC_REQUEST_KEY]) {
      // history.push(ENTRY_ROUTE);
      // window.location.reload();
    }

    return config;
  },
  (error) => {
    // Do something with request error here
    notification.error({
      message: "Error",
    });
    Promise.reject(error);
  }
);

// API respone interceptor

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let notificationParam = {
      message: "",
      duration:2.5,
      key,
    };
    // console.log("err" + error); // for debug
    if (error.code === "ECONNABORTED") {
      notificationParam.message = "Connection Timeout";
    } else {
      notificationParam.message = error?.response?.data?.message || error.message;
    }
    notification.error(notificationParam);

    return Promise.reject(error);
  }
);


export default service;
