<template>
  <div>
    <section class="products-section-2 section">
      <div class="container">
        <div class="user-info">
          <img src="../../assets/images/user-info-1.png" alt="" />
          <h1 class="title">User</h1>
          <n-form
            size="large"
            class="login_content"
            ref="formRef"
            :model="formValue"
            :rules="validateUserInfo"
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
              <n-form-item label="Điện thoại" path="tel">
                <n-input
                  :maxlength="10"
                  v-model:value="formValue.tel"
                  placeholder=""
                  @keypress="isNumber($event)"
                />
              </n-form-item>
            </div>
            <div class="order-info_formGroup">
              <n-form-item label="Email" path="email">
                <n-input v-model:value="formValue.email" placeholder="" />
              </n-form-item>
            </div>
            <div class="order-info_formGroup">
              <n-form-item label="Địa chỉ" path="address">
                <n-input v-model:value="formValue.address" placeholder="" />
              </n-form-item>
            </div>
            <div class="btn-add__cart user-info-success-btn">
              <n-button @click="submit">HOÀN TẤT</n-button>
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

// import useUserStore from "@/stores/user.js";
// const userStore = useUserStore();

const formRef = ref(null);
const formValue = ref({
  name: "",
  tel: "",
  email: "",
  address: "",
});

const validateUserInfo = {
  name: {
    required: true,
    message: "Vui lòng nhập tên",
    trigger: ["input"],
  },
  tel: {
    trigger: ["input"],
    validator: (rule, value) => {
      const regexTel = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (value.trim() === "") {
        rule.message = "Vui lòng nhập số điện thoại";
        return false;
      }
      if (!value.match(regexTel)) {
        rule.message = "Vui lòng nhập đúng số điện thoại";
        return false;
      }
      return true;
    },
    required: true,
  },
};

const submit = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      notification["success"]({
        content: "Cập nhật thành công!",
        duration: 2000,
      });
    } else {
      console.log(errors);
    }
  });
};

const isNumber = (evt) => {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    evt.preventDefault();
  } else {
    return true;
  }
};

const isLetter = (e) => {
  let char = String.fromCharCode(e.keyCode);
  if (/^[A-Za-z]+$/.test(char)) return true;
  else e.preventDefault();
};
</script>

<style scoped></style>
