import axios, { AxiosResponse } from "axios";
import { BaseResponse } from "../models/api/Api";
import { API_URL } from "../utils/constants/config";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/vnd.GitHub.v3+json",
  },
});

export type ApiResponse<T> = AxiosResponse<BaseResponse<T>>;

export default axiosClient;
