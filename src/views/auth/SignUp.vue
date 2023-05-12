<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <n-breadcrumb>
          <n-breadcrumb-item href="/"> TRANG CHỦ</n-breadcrumb-item>
          <n-breadcrumb-item href="/login"> ĐĂNG NHẬP</n-breadcrumb-item>
          <n-breadcrumb-item href="#"> ĐĂNG KÝ</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <section class="products-section-2 section">
      <div class="container">
        <div class="login signin">
          <h1 class="title">ĐĂNG KÝ</h1>
          <n-form
            size="large"
            class="login_content"
            ref="formRef"
            :model="formValue"
            :rules="rules"
          >
            <div class="order-info_formGroup">
              <n-form-item label="Tên" path="name">
                <n-input
                  v-model:value="formValue.name"
                  placeholder=""
                  @keypress="isLetter($event)"
                />
              </n-form-item>
            </div>
            <div class="order-info_formGroup">
              <n-form-item label="Số điện thoại/ email" path="telOrEmail">
                <n-input v-model:value="formValue.telOrEmail" placeholder="" />
              </n-form-item>
            </div>
            <div class="order-info_formGroup order-info_pass">
              <n-form-item label="Mật khẩu" path="password">
                <n-input
                  v-model:value="formValue.password"
                  placeholder=""
                  type="password"
                  show-password-on="click"
                />
              </n-form-item>
            </div>
            <div class="order-info_formGroup order-info_pass">
              <n-form-item label="Đặt lại mật khẩu" path="confirmPassword">
                <n-input
                  v-model:value="formValue.confirmPassword"
                  placeholder=""
                  type="password"
                  show-password-on="click"
                />
              </n-form-item>
              <div class="login_content_goSignUp">
                <span>Bạn đã có tài khoản?</span>
                <router-link :to="{ name: 'LogIn' }">
                  Đăng nhập ngay
                </router-link>
              </div>
            </div>

            <div class="btn-add__cart login-btn">
              <n-button @click="submit">ĐĂNG KÝ</n-button>
            </div>
          </n-form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, h } from "vue";
import { getImageUrl } from "@/helpers/url.js";
import { formatCurrency } from "@/helpers/format.js";

import useUserStore from "@/stores/user.js";
const userStore = useUserStore();

import { useNotification } from "naive-ui";
const notification = useNotification();

const formRef = ref(null);
const formValue = ref({
  name: "",
  telOrEmail: "",
  password: "",
  confirmPassword: "",
});

const rules = {
  name: {
    required: true,
    trigger: ["input"],
    validator: (rule, value) => {
      if (value.trim() === "") {
        rule.message = "Vui lòng nhập tên";
        return false;
      }
      if (value.match(/\d+/)) {
        rule.message = "Vui lòng nhập chữ không nhập số";
        return false;
      }
      return true;
    },
  },
  telOrEmail: {
    message: "Vui lòng nhập số điện thoại hoặc email",
    validator: (rule, value) => {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const regexTel = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (value.trim() === "") {
        rule.message = "Vui lòng nhập số điện thoại hoặc email";
        return false;
      }
      if (!(value.match(regexTel) || value.match(regexEmail))) {
        rule.message = "Vui lòng nhập đúng số điện thoại hoặc email";
        return false;
      }
      return true;
    },
    required: true,
    trigger: ["input"],
  },
  password: {
    validator: (rule, value) => {
      const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (value.trim() === "") {
        rule.message = "Vui lòng nhập mật khẩu";
        return false;
      }
      if (!value.match(regexPass)) {
        rule.message =
          "Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số";
        return false;
      }
      return true;
    },
    required: true,
    trigger: ["input"],
  },
  confirmPassword: {
    validator: (rule, value) => {
      return value === formValue.value.password;
    },
    required: true,
    message: "Vui lòng nhập lại đúng mật khẩu",
    trigger: ["input"],
  },
};

const signUp = async () => {
  try {
    await userStore.signup({
      username: formValue.value.name,
      email: formValue.value.telOrEmail,
      password: formValue.value.password,
    });
    notification["success"]({
      content: "Đăng ký thành công!",
      duration: 2000,
      onAfterLeave: () => {
        window.location.href = "/login";
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
      signUp();
    } else {
      console.log(errors);
    }
  });
};

const isLetter = (e) => {
  let char = String.fromCharCode(e.keyCode);
  if (/^[A-Za-z]+$/.test(char)) return true;
  else e.preventDefault();
};
</script>

<style scoped></style>
