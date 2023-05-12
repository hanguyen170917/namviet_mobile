import { defineStore } from "pinia";
import axios from "@/plugins/axios.js";

const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn() {
      return !!this.user;
    },
  },
  actions: {
    login({ email, password }) {
      // {email: '09021312313', password: ''}
      return new Promise(async (resolve, reject) => {
        try {
          // const response = await axios.post("/api/v1/frontend/user/site/login", {
          //   email: email,
          //   password: password,
          // });
          let url = `/api/v1/frontend/user/site/login`;
          const response = {
            data: {
              status: true,
              data: {
                user: {
                  username: "webmaster",
                  email: "webmastear@gmail.com",
                  token: "JSge6rXHLd9R7aRazxa9cgSLSKCPySnw",
                  logged_at: "2022-06-01 04:45:56",
                  created_at: "2022-04-20 05:43:28",
                },
              },
              messages: "Login successfully",
              code: 200,
            },
          };
          if (!response.data) {
            throw new Error("new Error");
          }
          this.user = response.data.data.user;
          localStorage.setItem("access_token", response.data.data.user.token);
          window.location.href = "/";
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    signup({ email, username, password }) {
      return new Promise(async (resolve, reject) => {
        try {
          // const response = await axios.post(
          //   "/api/v1/frontend/user/site/signup",
          //   {
          //     email: email,
          //     username: username,
          //     password: password,
          //   }
          // );
          const response = {
            data: {
              status: true,
              data: {
                user: {
                  id: 27,
                  access_token: "R1dlh4L3p1ed4E2KDo5jXlWW6Or6g3j_",
                  username: "webmaster3",
                  email: "khuongdev3@gmail.com",
                  created_at: "2022-06-01 04:49:54",
                },
              },
              messages: "Register successfully please check email",
              code: 200,
            },
          };
          if (!response.data) {
            throw new Error("new Error");
          }
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    logout() {
      this.user = null;
      localStorage.removeItem("access_token");
      window.location.reload();
    },
    getUserInfo() {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await axios.get("/api/v1/frontend/user/site/info");
          if (!response.data) {
            throw new Error("new Error");
          }
          this.user = response.data.data.user;
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  },
});

export default useUserStore;
