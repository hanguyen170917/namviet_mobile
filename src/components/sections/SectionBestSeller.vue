<template>
  <div class="best-seller-section section">
    <div class="container">
      <div class="swiper-button-prev" ref="prev"></div>
      <div class="swiper-button-next" ref="next"></div>
      <swiper
          loop
          autoplay
          :modules="[Autoplay, Navigation]"
          :navigation="{
            nextEl: next,
            prevEl: prev,
          }"
          :breakpoints="breakpoints"
      >
        <swiper-slide v-for="image in imageList" :key="image">
          <a href="#" class="best-seller-item">
            <img :src="getImageUrl(image)" alt="">
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {getImageUrl} from "@/helpers/url";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation} from 'swiper';

import 'swiper/css';
import "swiper/css/navigation";

const prev = ref(null);
const next = ref(null);

const breakpoints = ref({
  0: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 30,
  }
});

const imageList = ref([
  'best-seller-1.png',
  'best-seller-2.png',
  'best-seller-3.png',
  'best-seller-4.png',
  'best-seller-1.png',
  'best-seller-2.png',
  'best-seller-3.png',
  'best-seller-4.png',
]);
</script>

<style scoped>

</style>