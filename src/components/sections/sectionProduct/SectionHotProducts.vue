<template>
  <section class="hot-products-section section">
    <div class="container">
      <div class="hot-products" :style="{ backgroundColor: backgroundColor }">
        <div class="hot-products__head hot-products__head--desktop">
          <span>TAI NGHE</span>
          <span>NHÃN HÀNG NỔI TIẾNG</span>
        </div>
        <div class="hot-products__body">
          <div class="hot-products__body__left">
            <div class="product-overview">
              <p class="product-overview__title">Thương hiệu</p>
              <p class="product-overview__logo">
                <img
                  src="../../../assets/images/product-overview-logo.png"
                  alt=""
                />
              </p>
              <p class="product-overview__cate">Tai nghe không dây</p>
              <p class="product-overview__name">Apple Airpods 3</p>
              <p class="product-overview__price">Giá: 2.000.000 đ</p>
              <a class="product-overview__btn" href="#">
                Mua ngay
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66669 11.3334L12 8.00002L8.66669 4.66669"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 11.3334L7.33333 8.00002L4 4.66669"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="hot-products__body__center">
            <div class="hot-products__head hot-products__head--mobile">
              <span>TAI NGHE</span>
            </div>
            <div class="hot-products__slider">
              <div class="swiper-button-prev" ref="prev"></div>
              <swiper
                :slides-per-view="1"
                loop
                :autoplay="true"
                :space-between="30"
                :modules="[Autoplay, Navigation, Pagination]"
                :navigation="{
                  nextEl: next,
                  prevEl: prev,
                }"
                :pagination="true"
              >
                <swiper-slide v-for="image in 3" :key="image">
                  <a href="#" class="image-item">
                    <img src="../../../assets/images/airpods.png" alt="" />
                  </a>
                </swiper-slide>
              </swiper>
              <div class="swiper-button-next" ref="next"></div>
            </div>
          </div>
          <div class="hot-products__body__right">
            <div class="hot-products__head hot-products__head--mobile">
              <span>NHÃN HÀNG NỔI TIẾNG</span>
            </div>
            <n-grid y-gap="10" x-gap="28" cols="2" responsive="screen">
              <n-gi>
                <a href="#" class="brand-item">
                  <img src="https://i.imgur.com/oZOo8g0.png" alt="" />
                </a>
              </n-gi>
              <n-gi>
                <a href="#" class="brand-item">
                  <img src="https://i.imgur.com/7f9wFCh.png" alt="" />
                </a>
              </n-gi>
              <n-gi>
                <a href="#" class="brand-item">
                  <img src="https://i.imgur.com/X04m3X0.png" alt="" />
                </a>
              </n-gi>
              <n-gi>
                <a href="#" class="brand-item">
                  <img src="https://i.imgur.com/4Z4oyHc.png" alt="" />
                </a>
              </n-gi>
              <n-gi>
                <a href="#" class="brand-item">
                  <img src="https://i.imgur.com/UIIFGSs.png" alt="" />
                </a>
              </n-gi>
              <n-gi>
                <a href="#" class="brand-item">
                  <img src="https://i.imgur.com/oZOo8g0.png" alt="" />
                </a>
              </n-gi>
            </n-grid>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { getImageUrl } from "@/helpers/url";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

defineProps({
  backgroundColor: String,
});

const prev = ref(null);
const next = ref(null);
</script>

<style scoped></style>
