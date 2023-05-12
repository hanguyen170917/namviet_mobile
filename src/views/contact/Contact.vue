<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <n-breadcrumb>
          <n-breadcrumb-item href="/"> TRANG CHỦ</n-breadcrumb-item>
          <n-breadcrumb-item href="#"> LIÊN HỆ</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <section
      class="products-section-2 section"
      ref="scrollContainer"
      style="padding-bottom: 0"
    >
      <div class="container">
        <div class="contact">
          <h1 class="title">LIÊN HỆ</h1>
          <div class="contact_list">
            <n-grid x-gap="30" cols="1 m:3" responsive="screen">
              <n-gi span="1 m:2" class="contact_list-1">
                <n-form
                  size="large"
                  class="login_content"
                  ref="formRef"
                  :model="formValue"
                  :rules="validateContact"
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
                    <n-form-item label="Nội dung" path="content">
                      <n-input
                        v-model:value="formValue.content"
                        class="contact-user_textarea"
                        placeholder=""
                        type="textarea"
                        size="small"
                        :autosize="{
                          minRows: 3,
                          maxRows: 5,
                        }"
                      />
                    </n-form-item>
                  </div>
                  <div class="btn-add__cart user-info-success-btn">
                    <n-button @click="submit">GỬI NGAY</n-button>
                  </div>
                </n-form>
              </n-gi>
              <n-gi span="1 m:1" class="contact_list-2">
                <div class="contact_item">
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.5C3.0975 0.5 0.75 2.8475 0.75 5.75C0.75 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 2.8475 8.9025 0.5 6 0.5ZM6 7.625C4.965 7.625 4.125 6.785 4.125 5.75C4.125 4.715 4.965 3.875 6 3.875C7.035 3.875 7.875 4.715 7.875 5.75C7.875 6.785 7.035 7.625 6 7.625Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>
                    260 Nam Kỳ Khởi Nghĩa, P.8, <br />
                    Q.3, TP. Hồ Chí Minh
                  </p>
                </div>
                <div class="contact_item">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0075 9.535C12.085 9.535 11.1925 9.385 10.36 9.115C10.0975 9.025 9.805 9.0925 9.6025 9.295L8.425 10.7725C6.3025 9.76 4.315 7.8475 3.2575 5.65L4.72 4.405C4.9225 4.195 4.9825 3.9025 4.9 3.64C4.6225 2.8075 4.48 1.915 4.48 0.9925C4.48 0.5875 4.1425 0.25 3.7375 0.25H1.1425C0.7375 0.25 0.25 0.43 0.25 0.9925C0.25 7.96 6.0475 13.75 13.0075 13.75C13.54 13.75 13.75 13.2775 13.75 12.865V10.2775C13.75 9.8725 13.4125 9.535 13.0075 9.535Z"
                      fill="currentColor"
                    />
                  </svg>

                  <p>
                    (028) 3 9320660 <br />
                    0903669949 <br />
                    Fax:(028) 3 9322792
                  </p>
                </div>
                <div class="contact_item">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 0H2C1.175 0 0.5075 0.675 0.5075 1.5L0.5 10.5C0.5 11.325 1.175 12 2 12H14C14.825 12 15.5 11.325 15.5 10.5V1.5C15.5 0.675 14.825 0 14 0ZM14 3L8 6.75L2 3V1.5L8 5.25L14 1.5V3Z"
                      fill="currentColor"
                    />
                  </svg>

                  <a href="mailto:info@namvietmobile.com">
                    <p>info@namvietmobile.com</p>
                  </a>
                </div>
                <div class="contact_item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0.5C3.875 0.5 0.5 3.875 0.5 8C0.5 12.125 3.875 15.5 8 15.5C12.125 15.5 15.5 12.125 15.5 8C15.5 3.875 12.125 0.5 8 0.5ZM11.15 11.15L7.25 8.75V4.25H8.375V8.15L11.75 10.175L11.15 11.15Z"
                      fill="currentColor"
                    />
                  </svg>

                  <p>
                    Thứ 2 đến thứ 7 từ: 08h-20h30 <br />
                    Chủ nhật từ: 08h-18h
                  </p>
                </div>
              </n-gi>
            </n-grid>
          </div>
        </div>
      </div>
      <div class="contact_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3180667088754!2d106.68502531526042!3d10.786933261948194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2d9ce55e67%3A0xeff24c7a78cc6c3d!2zMjYwIMSQLiBOYW0gS-G7syBLaOG7n2kgTmdoxKlhLCBQaMaw4budbmcgOCwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1653625910611!5m2!1svi!2s"
          width="100%"
          height="1080"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { getImageUrl } from "@/helpers/url.js";
// import { useBlogStore } from "@/stores/blog.js";
import { useRouter } from "vue-router";

import { useNotification } from "naive-ui";
const notification = useNotification();

const formRef = ref(null);
const formValue = ref({
  name: "",
  tel: "",
  email: "",
  content: "",
});

const validateContact = {
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
  content: {
    required: true,
    message: "Vui lòng nhập nội dung",
    trigger: ["input"],
  },
};

const submit = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      notification["success"]({
        content: "Bạn đã gửi thông tin thành công!",
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
