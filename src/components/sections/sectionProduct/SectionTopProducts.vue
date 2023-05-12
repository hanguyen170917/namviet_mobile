<template>
  <section class="top-products-section section">
    <div class="container">
      <div class="section__heading section__heading--navigation">
        <h2 class="section__title">{{ title }}</h2>
        <p class="section__sub__title" v-if="subTitle">{{ subTitle }}</p>
        <div class="custom-button-wrap">
          <div class="custom-button-prev" ref="prev">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="custom-button-next" ref="next">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <swiper
        autoplay
        loop
        :modules="[Autoplay, Navigation, Grid]"
        :navigation="{
          nextEl: next,
          prevEl: prev,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }"
        class="mySwiper top-products-slider"
      >
        <swiper-slide v-for="row in productsGrouped" :key="row">
          <product-item
            :id="row[0].id"
            :colors="row[0].colors"
            :name="row[0].name"
            :price="row[0].unit_price"
          ></product-item>
          <product-item
            v-if="row[1]"
            :id="row[1].id"
            :colors="row[1].colors"
            :name="row[1].name"
            :price="row[1].unit_price"
            class="product-row-2"
          ></product-item>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Grid } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import ProductItem from "@/components/sections/sectionProduct/ProductItem.vue";
import { useProductsStore } from "@/stores/products";

const productStore = useProductsStore();
defineProps({
  title: String,
  subTitle: String,
});
const prev = ref(null);
const next = ref(null);

const products = computed(() => productStore.items);

const productsGrouped = computed(() => {
  return products.value.reduce((arr, current) => {
    if (!arr.at(-1)) {
      arr.push([]);
    }
    if (arr.at(-1).length > 1) {
      arr.push([]);
    }
    arr.at(-1).push(current);
    return arr;
  }, []);
});

const getProducts = () => {
  productStore.getItems();
};
getProducts();
</script>

<style scoped></style>
