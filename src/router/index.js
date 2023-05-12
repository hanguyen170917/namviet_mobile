import { createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/stores/user.js";
import { computed } from "vue";

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/Home.vue") },
  {
    path: "/product-list",
    name: "ProductList",
    component: () => import("@/views/product/ProductList.vue"),
  },
  {
    path: "/product-list/:id",
    name: "Product Detail",
    component: () => import("@/views/product/ProductDetail.vue"),
  },
  
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/payment/Cart.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("@/views/payment/Payment.vue"),
  },
  {
    path: "/billInfo",
    name: "BillInfo",
    component: () => import("@/views/payment/BillInfo.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("@/views/auth/LogIn.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/auth/SignUp.vue"),
  },
  {
    path: "/userInfo",
    name: "UserInfo",
    component: () => import("@/views/user/UserInfo.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/contact/Contact.vue"),
  },
  {
    path: "/news",
    name: "News List",
    component: () => import("@/views/news/NewsList.vue"),
  },
  {
    path: "/news/:slug",
    name: "News Detail",
    component: () => import("@/views/news/NewsDetail.vue"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem("access_token"))
    next({ name: "LogIn" });
  else next();
});

export default router;
