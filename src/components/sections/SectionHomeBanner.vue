<template>
  <div class="home-banner-section section">
    <div class="container">
      <div class="home-banner">
        <div class="home-banner__slider">
          <swiper
            :slides-per-view="1"
            loop
            autoplay
            :space-between="10"
            :modules="[Autoplay, Navigation, Pagination]"
            :navigation="true"
            :pagination="{ clickable: true }"
            class="swiper-navigation-2 swiper-pagination-2"
          >
            <swiper-slide v-for="image in 5" :key="image">
              <a href="#">
                <img src="../../assets/images/home-banner.jpg" alt="" />
              </a>
            </swiper-slide>
          </swiper>
        </div>
        <div class="home-banner__aside">
          <p class="home-banner__aside__sub-title">BẢN TIN</p>
          <p class="home-banner__aside__title">CÔNG NGHỆ</p>
          <ul class="home-banner__aside__list">
            <li v-for="item in 5" :key="item">
              <a href="#" class="aside-news-item">
                <span class="aside-news-item__img">
                  <img src="../../assets/images/aside-news-item.jpg" alt="" />
                </span>
                <router-link :to="{ name: 'News List' }">
                  <span class="aside-news-item__title">
                    iPhone 13 Pro Max là lựa chọn tốt nhất để người dùng...
                  </span>
                </router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useRouter } from "vue-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<style scoped></style>
