import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

axios.defaults.baseURL = "https://ourfood-backend.1.us-1.fl0.io/api/";

axios.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const { token } = storeToRefs(authStore);
    if (token.value !== undefined) {
      config.headers["Authorization"] = `Bearer ${token.value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);