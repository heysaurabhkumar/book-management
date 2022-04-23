import axios from "axios";

export default {
  login(loginData) {
    return axios.post("/v1/auth/login", loginData, {
      withCredentials: true,
    });
  },
  register(registerData) {
    return axios.post("/v1/auth/register", registerData, {
      withCredentials: true,
    });
  },
  logout() {
    return axios.post("/v1/auth/logout", {
      withCredentials: true,
    });
  },
};
