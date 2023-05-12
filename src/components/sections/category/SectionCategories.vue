<template>
  <section class="categories-section section">
    <div class="container">
      <n-grid
        x-gap="10"
        y-gap="10"
        cols="1 s:3"
        responsive="screen"
        class="categories-wrap"
      >
        <n-gi v-for="item in categories" :key="item.id">
          <category v-bind="item"></category>
        </n-gi>
      </n-grid>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Category from "@/components/sections/category/Category.vue";

const categories = ref([
  {
    id: 1,
    tag: "Hot",
    title: "SẢN PHẨM NỔI BẬT",
    image: "category-1.jpg",
  },
  {
    id: 2,
    tag: "?%",
    title: "SẢN PHẨM KHUYẾN MÃI",
    image: "category-2.jpg",
  },
  {
    id: 3,
    tag: "New",
    title: "SẢN PHẨM MỚI",
    image: "category-3.jpg",
  },
]);
</script>

<style scoped></style>
