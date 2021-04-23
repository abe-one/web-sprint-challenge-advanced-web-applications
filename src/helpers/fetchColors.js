import React from "react";
import axiosWithAuth from "./axiosWithAuth";

const fetchColors = () => {
  return axiosWithAuth()
    .get(`/colors`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default fetchColors;
