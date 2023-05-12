<template>
  <section class="products-section section">
    <div class="container">
      <div class="section__heading">
        <h2 class="section__title">{{ title }}</h2>
        <p class="section__sub__title" v-if="subTitle">{{ subTitle }}</p>
      </div>
      <!-- :collapsed-rows="1" -->
      <n-grid
        x-gap="15 m:30"
        y-gap="15 m:30"
        cols="2 s:4 m:6"
        responsive="screen"
        class="products-row"
      >
        <n-gi v-for="item in products" :key="item.id">
          <product-item
            :id="item.id"
            :colors="item.colors"
            :name="item.name"
            :price="item.unit_price"
          ></product-item>
        </n-gi>
      </n-grid>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import ProductItem from "@/components/sections/sectionProduct/ProductItem.vue";
import { useProductsStore } from "@/stores/products";
const productStore = useProductsStore();

defineProps({
  title: String,
  subTitle: String,
});

const products = computed(() => productStore.items);

const getProducts = () => {
  productStore.getItems();
};
</script>

<style scoped></style>
