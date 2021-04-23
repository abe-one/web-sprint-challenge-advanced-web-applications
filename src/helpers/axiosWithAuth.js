import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

export const authAxios = () => {
  return axios.create({
    headers: {
      authorization: JSON.parse(window.localStorage.getItem("tToken")),
    },
    baseURL: "http://localhost:5000",
  });
};
