import axios from "axios";

export const InstanceAxiosUrl = axios.create({
  baseURL: "BASE_URL_API",
});
