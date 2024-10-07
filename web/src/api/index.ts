import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL,
});


// Request that the interceptor provide feedback for all errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const data = error.response.data as Record<string, string>;

      if (data) {
        console.error(error);

        // toast comes from some feedback ui library
        toast.error(data.message);
      }
    }

    return Promise.resolve(null);
  }
);
