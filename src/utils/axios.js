import axios from "axios";
import _ from "lodash";
import store from "../store";

const instance = axios.create({
  proxy: false,
  baseURL: "http://localhost:7001/api"
});

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent

    let token = store.state.token;
    if (token) {
      config.headers["authorization"] = `bearer ${token}`;
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    let data = error.response.data;
    if (_.isArray(data.errors)) {
      // 拼接错误
      let errMsg = _.map(data.errors, item => {
        return item.msg;
      }).join("|");
      // error.response
      error.response.errorMessage = errMsg;
    }

    return Promise.reject(error);
  }
);

export default instance;
