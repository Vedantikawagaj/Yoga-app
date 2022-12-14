import axios from "axios";

const API_URL = "http://localhost:3000/";

const register = (email, fullName, password,age) => {
  return axios.post(API_URL + "register", {
    email,
    fullName,
    password,
    age
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};
