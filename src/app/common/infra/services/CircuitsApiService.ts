import axios, { AxiosInstance } from "axios";

export class ApiService {
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!ApiService.instance) {
      ApiService.instance = axios.create({
        baseURL: process.env.API_URL,
        timeout: 3000,
        headers: { "Content-Type": "application/json" },
      });

      ApiService.instance.interceptors.request.use(
        (config) => {
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      ApiService.instance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    }

    return ApiService.instance;
  }
}
