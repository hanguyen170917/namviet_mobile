<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <n-breadcrumb>
          <n-breadcrumb-item href="/"> TRANG CHỦ</n-breadcrumb-item>
          <n-breadcrumb-item href="#"> ĐĂNG NHẬP</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <section class="products-section-2 section">
      <div class="container">
        <div class="login">
          <h1 class="title">ĐĂNG NHẬP</h1>
          <!-- <form class="login_content">
            <div class="order-info_formGroup">
              <p>Email/Số điện thoại</p>
              <n-input placeholder="" type="text" v-model:value="email" />
            </div>
            <div class="order-info_formGroup order-info_pass">
              <p>Mật khẩu</p>
              <n-input
                placeholder=""
                type="password"
                show-password-on="mousedown"
                v-model:value="password"
                @keyup.enter="login"
              />
              <div class="login_content_goSignUp">
                <span>Bạn chưa có tài khoản?</span> -->
          <!-- <a href="#">Đăng ký ngay</a> -->
          <!-- <router-link :to="{ name: 'SignUp' }">
                  Đăng ký ngay
                </router-link>
              </div>
            </div>
            <div class="btn-add__cart login-btn">
              <n-button type="button" @click="login">ĐĂNG NHẬP</n-button>
            </div>
          </form> -->
          <n-form
            size="large"
            class="login_content"
            ref="formRef"
            :model="formValue"
            :rules="rules"
          >
            <div class="order-info_formGroup">
              <n-form-item label="Email/Số điện thoại" path="name">
                <n-input v-model:value="formValue.name" placeholder="" />
              </n-form-item>
            </div>
            <div class="order-info_formGroup order-info_pass">
              <n-form-item label="Mật khẩu" path="password">
                <n-input
                  v-model:value="formValue.password"
                  placeholder=""
                  type="password"
                  show-password-on="click"
                  @keyup.enter="login"
                />
              </n-form-item>
              <div class="login_content_goSignUp">
                <span>Bạn chưa có tài khoản?</span>
                <router-link :to="{ name: 'SignUp' }">
                  Đăng ký ngay
                </router-link>
              </div>
            </div>
            <div class="btn-add__cart login-btn">
              <n-button @click="submit">ĐĂNG NHẬP</n-button>
            </div>
          </n-form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, h } from "vue";
import SectionBreadcrumb from "@/components/sections/SectionBreadcrumb.vue";
import { getImageUrl } from "@/helpers/url.js";
import { formatCurrency } from "@/helpers/format.js";
import { useNotification } from "naive-ui";
const notification = useNotification();

import { useRouter } from "vue-router";

import useUserStore from "@/stores/user.js";

const userStore = useUserStore();

const formRef = ref(null);
const formValue = ref({
  name: "",
  password: "",
});

const rules = {
  name: {
    required: true,
    message: "Vui lòng nhập số điện thoại hoặc email",
    trigger: ["input"],
  },
  password: {
    required: true,
    message: "Vui lòng nhập mật khẩu",
    trigger: ["input"],
  },
};

const email = ref("");
const password = ref("");

const login = async () => {
  try {
    await userStore.login({
      email: formValue.value.name,
      password: formValue.value.password,
    });
    notification["success"]({
      content: "Đăng nhập thành công!",
      duration: 2000,
      onAfterLeave: () => {
        window.location.href = "/Home";
      },
    });
  } catch (error) {
    notification["error"]({
      content: error?.data?.response?.data?.message || error.message,
    });
  }
};

const submit = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      login();
    } else {
      console.log(errors);
    }
  });
};
</script>

<style scoped></style>
