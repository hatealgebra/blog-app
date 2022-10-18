import axios from "axios";
import { BASE_API_URL } from "../../utils/contants";

export const login = (username: string, password: string, apiKey: string) => {
  return axios({
    method: "post",
    url: `${BASE_API_URL}/login`,
    data: {
      username,
      password,
    },
    headers: { "X-API-KEY": apiKey },
  });
};

export const registration = async (username: string, password: string) => {
  const response = axios({
    method: "post",
    url: "https://fullstack.exercise.applifting.cz/tenants",
    data: {
      name: username,
      password,
    },
  });
  console.log(response);

  return (await response.data.apiKey) ?? null;
};
