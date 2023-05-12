<template>
  <div class="cart-item">
    <div class="cart-item_left">
      <img :src="getImageUrl(img)" alt="" class="cart-item_left_img" />
    </div>
    <div class="cart-item_right">
      <p class="cart-item_right_name_product">{{ name }}</p>
      <p>Số lượng: x{{ quantity }}</p>
      <p class="cart-item_right_color">
        Màu: <img :src="getImageUrl(color)" alt="" />
      </p>
      <p class="cart-item_right_price">Giá: {{ formatCurrency(price) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getImageUrl } from "@/helpers/url.js";
import { formatCurrency } from "@/helpers/format.js";
defineProps({
  name: String,
  quantity: Number,
  color: String,
  price: Number,
  img: String,
});

const optionsDropdownColor = ref([
  {
    label: "Màu xanh",
    color: "product-cart-color-2.png",
    key: "Màu xanh",
  },
  {
    label: "Màu đỏ",
    color: "product-cart-color-2.png",
    key: "Màu đỏ",
  },
  {
    label: "Màu vàng",
    color: "product-cart-color-2.png",
    key: "Màu vàng",
  },
]);

const handleSelectColor = (key) => {
  selectedColor.value = key;
};
const selectedColor = ref(optionsDropdownColor.value[0].key);
</script>

<style></style>
