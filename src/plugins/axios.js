import axios from "axios";
import useUserStore from "@/stores/user.js";

axios.defaults.baseURL = "http://192.168.1.113:8080";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "access_token"
)}`;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      const userStore = useUserStore();
      userStore.logout();
    }
    return Promise.reject(error);
  }
);

export default axios;
