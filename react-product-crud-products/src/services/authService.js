import axios from "axios";
import React from "react";
const API_URL = "http://localhost:8081/auth";

import api from "./axisConfig";



export const validateToken = async() =>{

    return api.post("/");
}

export const login = async (username, password) => {
  const response = await axios.post("http://localhost:8080/auth/login", {
    username,
    password,
  });
  console.log(response.data.token)
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data.token;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};