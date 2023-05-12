<template>
  <div class="product-item">
    <a href="#" class="product-item__image">
      <!-- {{ image }}
      <img
        v-if="image?.base_url && image?.name"
        :src="image.base_url + '/' + image.name"
        alt=""
        class="product-item__image"
      /> -->
      <img :src="getImageUrl(item.img)" alt="" />
    </a>
    <div class="product-item__info">
      <ul class="product-item__colors">
        <li
          v-for="color in item.colors"
          :key="color"
          :style="{ backgroundColor: color }"
        ></li>
      </ul>
      <p class="product-item__title">
        <a href="#">{{ item.name }}</a>
      </p>
      <p class="product-item__price">Giá: {{ formatCurrency(item.price) }}</p>
    </div>
    <router-link
      class="product-item__link"
      :to="{ name: 'Product Detail', params: { id: id } }"
    ></router-link>
    <n-button class="product-item_add_cart" type="primary" @click="addToCart">
      <img src="../../../assets/images/add-cart.png" alt="" />
      <span class="product-item_add_cart_text">Thêm vào giỏ hàng</span>
    </n-button>
    <n-button class="add-cart_mobile" @click="addToCart">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1067_8152)">
          <path
            d="M7.49996 18.3332C7.9602 18.3332 8.33329 17.9601 8.33329 17.4998C8.33329 17.0396 7.9602 16.6665 7.49996 16.6665C7.03972 16.6665 6.66663 17.0396 6.66663 17.4998C6.66663 17.9601 7.03972 18.3332 7.49996 18.3332Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.6667 18.3332C17.1269 18.3332 17.5 17.9601 17.5 17.4998C17.5 17.0396 17.1269 16.6665 16.6667 16.6665C16.2065 16.6665 15.8334 17.0396 15.8334 17.4998C15.8334 17.9601 16.2065 18.3332 16.6667 18.3332Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.833374 0.833496H4.16671L6.40004 11.9918C6.47624 12.3755 6.68496 12.7201 6.98966 12.9654C7.29436 13.2107 7.67562 13.341 8.06671 13.3335H16.1667C16.5578 13.341 16.9391 13.2107 17.2438 12.9654C17.5485 12.7201 17.7572 12.3755 17.8334 11.9918L19.1667 5.00016H5.00004"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1067_8152">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </n-button>
  </div>
  <!-- <router-link
    class="product-item"
    :to="{ name: 'Product Detail', params: { id: 1 } }"
  >
    <a href="#" class="product-item__image">
      <img
        src="../assets/images/product-1.png"
        alt=""
        class="product-item__image"
      />
    </a>
    <div class="product-item__info">
      <ul class="product-item__colors">
        <li
          v-for="color in ['#261C62', '#D79FB8', '#DCDCDC']"
          :key="color"
          :style="{ backgroundColor: color }"
        ></li>
      </ul>
      <p class="product-item__title">
        <a href="#">Macbook Pro - 13inch 2020 Chip M1, 512GB</a>
      </p>
      <p class="product-item__price">Giá: 12.500.000 đ</p>
    </div>
  </router-link> -->
</template>

<script setup>
import { ref } from "vue";
import { getImageUrl } from "../../../helpers/url";
import { formatCurrency } from "../../../helpers/format";
import { useRouter } from "vue-router";
const router = useRouter();

import useCartStore from "@/stores/cart.js";
const useCart = useCartStore();

const goToDetail = () => {
  router.push({ name: "Product Detail", params: { id: 1 } });
};
const props = defineProps({
  id: Number,
  image: Object,
  colors: Array,
  name: String,
  price: Number,
});

const item = ref({
  img: "color-product-1.png",
  name: "iPhone 13 Pro 128GB Chính Hãng",
  price: 25990000,
  colors: ["#fbebd5", "#3c7293", "#adcce8"],
});

function createAnimationAddCart(button) {
  const item = button.closest(".product-item");
  const img = item.querySelector(".product-item__image img");
  const headerCart = document.querySelector(".header__top__icon--cart");

  if (!img || !headerCart) {
    return;
  }

  const {
    top: headerCartTop,
    left: headerCartLeft,
    width: headerCartWidth,
  } = headerCart.getBoundingClientRect();

  const imgClone = img.cloneNode();
  imgClone.style.position = "fixed";
  imgClone.style.zIndex = 99999;

  document.body.appendChild(imgClone);
  imgClone.animate(
    [
      {
        width: img.offsetWidth + "px",
        top: img.getBoundingClientRect().top + "px",
        left: img.getBoundingClientRect().left + "px",
        opacity: 0.8,
      },
      {
        width: headerCartWidth + "px",
        top: headerCartTop + "px",
        left: headerCartLeft + "px",
        opacity: 0.4,
      },
    ],
    {
      duration: 500,
      easing: "ease",
    }
  ).onfinish = (e) => {
    e.target.effect.target.remove();
    headerCart.classList.add("bounce");

    //
    useCart.changeItems(useCart.items + 1);
    setTimeout(() => {
      headerCart.classList.remove("bounce");
    }, 1000);
  };
}

// function createAnimationAddCartMobile(button) {
//   const item = button.closest(".product-item");
//   const img = item.querySelector(".product-item__image img");
//   const headerCart = document.querySelector(".header__top__icon--cart");

//   if (!img || !headerCart) {
//     return;
//   }

//   const {
//     top: headerCartTop,
//     left: headerCartLeft,
//     width: headerCartWidth,
//   } = headerCart.getBoundingClientRect();

//   const imgClone = img.cloneNode();
//   imgClone.style.position = "fixed";
//   imgClone.style.zIndex = 99999;

//   document.body.appendChild(imgClone);
//   imgClone.animate(
//     [
//       {
//         width: img.offsetWidth + "px",
//         top: img.getBoundingClientRect().top + "px",
//         left: img.getBoundingClientRect().left + "px",
//         opacity: 0.8,
//       },
//       {
//         width: headerCartWidth + "px",
//         top: headerCartTop + "px",
//         left: headerCartLeft + "px",
//         opacity: 0.4,
//       },
//     ],
//     {
//       duration: 500,
//       easing: "ease",
//     }
//   ).onfinish = (e) => {
//     e.target.effect.target.remove();
//     headerCart.classList.add("bounce");

//     //
//     useCart.changeItems(useCart.items + 1);
//     setTimeout(() => {
//       headerCart.classList.remove("bounce");
//     }, 1000);
//   };
// }

function addToCart(event) {
  // loading = true
  // send api

  // error

  //success
  createAnimationAddCart(event.currentTarget);
}

// console.log(test);
</script>

<style scoped></style>
