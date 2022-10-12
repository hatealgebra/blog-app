import axios from "axios";

export const login = (username: string, password: string, apiKey: string) => {
  return axios({
    method: "post",
    url: "https://fullstack.exercise.applifting.cz/login",
    data: {
      username: "admin",
      password: "BlogApp",
    },
    headers: { apiKey },
  });
};

export const registration = async (username: string, password: string) => {
  const response = axios({
    method: "post",
    url: "https://fullstack.exercise.applifting.cz/tenants",
    data: {
      name: "admin",
      password: "BlogApp",
    },
  });

  return (await response.data.apiKey) ?? null;
};
