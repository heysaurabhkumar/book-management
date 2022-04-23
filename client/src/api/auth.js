import axios from "axios";

export default {
  login(loginData) {
    return axios.post("/v1/auth/login", loginData, {
      withCredentials: true,
    });
  },
};
