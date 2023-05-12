<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top__contact header__top__contact--mobile">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.34 8.25333C10.52 8.25333 9.72667 8.12 8.98667 7.88C8.75333 7.8 8.49333 7.86 8.31333 8.04L7.26667 9.35333C5.38 8.45333 3.61333 6.75333 2.67333 4.8L3.97333 3.69333C4.15333 3.50667 4.20667 3.24667 4.13333 3.01333C3.88667 2.27333 3.76 1.48 3.76 0.66C3.76 0.3 3.46 0 3.1 0H0.793333C0.433333 0 0 0.16 0 0.66C0 6.85333 5.15333 12 11.34 12C11.8133 12 12 11.58 12 11.2133V8.91333C12 8.55333 11.7 8.25333 11.34 8.25333Z"
              fill="currentColor"
            />
          </svg>
          <span>
            Hotline: <a href="tel:02839320660"> (028) 3 9320660 </a> -
            <a href="tel:0903669949"> 0903669949 </a>
          </span>
        </div>
        <div class="header__top__left">
          <div class="header__top__toggle" @click="showMegaMenu(0)">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.166626 17.6668H21.8333V13.3335H0.166626V17.6668ZM2.33329 14.4168H4.49996V16.5835H2.33329V14.4168ZM0.166626 0.333496V4.66683H21.8333V0.333496H0.166626ZM4.49996 3.5835H2.33329V1.41683H4.49996V3.5835ZM0.166626 11.1668H21.8333V6.8335H0.166626V11.1668ZM2.33329 7.91683H4.49996V10.0835H2.33329V7.91683Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <router-link class="header__top__logo" :to="{ name: 'Home' }">
            <img src="../../assets/images/logo.png" alt="" />
          </router-link>
          <div class="header__top__contact header__top__contact--desktop">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.34 8.25333C10.52 8.25333 9.72667 8.12 8.98667 7.88C8.75333 7.8 8.49333 7.86 8.31333 8.04L7.26667 9.35333C5.38 8.45333 3.61333 6.75333 2.67333 4.8L3.97333 3.69333C4.15333 3.50667 4.20667 3.24667 4.13333 3.01333C3.88667 2.27333 3.76 1.48 3.76 0.66C3.76 0.3 3.46 0 3.1 0H0.793333C0.433333 0 0 0.16 0 0.66C0 6.85333 5.15333 12 11.34 12C11.8133 12 12 11.58 12 11.2133V8.91333C12 8.55333 11.7 8.25333 11.34 8.25333Z"
                fill="currentColor"
              />
            </svg>
            <span>
              Hotline: <a href="tel:02839320660"> (028) 3 9320660 </a> -
              <a href="tel:0903669949"> 0903669949 </a>
            </span>
          </div>
        </div>
        <div class="header__top__right">
          <div class="header__top__search header__top__search--desktop">
            <n-input size="large" round placeholder="Tìm kiếm ....">
              <template #suffix>
                <n-button text>
                  <div class="header__top__icon__search--desktop">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 15.7501L12.4875 12.4875"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </n-button>
              </template>
            </n-input>
          </div>
          <div class="header__top__icon header__top__icon--search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 20.9999L16.65 16.6499"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <router-link
            class="header__top__icon header__top__icon--cart"
            :to="{ name: 'Cart' }"
          >
            <span class="header__top__icon_custom_cart">
              <svg
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L3 10V24C3 24.5304 3.21071 25.0391 3.58579 25.4142C3.96086 25.7893 4.46957 26 5 26H19C19.5304 26 20.0391 25.7893 20.4142 25.4142C20.7893 25.0391 21 24.5304 21 24V10L18 6H6Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 14C16 15.0609 15.5786 16.0783 14.8284 16.8284C14.0783 17.5786 13.0609 18 12 18C10.9391 18 9.92172 17.5786 9.17157 16.8284C8.42143 16.0783 8 15.0609 8 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <n-badge :value="value" show-zero> </n-badge>
            </span>
            <!-- <n-button-group>
              <n-button @click="value = Math.min(16, value + 1)">
                <template #icon>
                  <n-icon>+</n-icon>
                </template>
              </n-button>
              <n-button @click="value = Math.max(0, value - 1)">
                <template #icon>
                  <n-icon>-</n-icon>
                </template>  
              </n-button>
            </n-button-group> -->
          </router-link>
          <div>
            <n-dropdown
              class="settings_user"
              trigger="click"
              :options="optionsDropdownUser"
              placement="bottom-end"
              @select="handleSelect"
            >
              <div class="header__top__icon header__top__icon--user">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </div>
            </n-dropdown>
          </div>
        </div>
        <div class="header__top__search--mobile">
          <n-input size="large" round placeholder="Tìm kiếm ....">
            <template #suffix>
              <n-button text>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.75 15.7501L12.4875 12.4875"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </n-button>
            </template>
          </n-input>
        </div>
        <!-- <div class="header__top__form_search">
          <input
            type="text"
            class="form-control"
            id="txtSearch"
            placeholder="Tìm kiếm ...."
          />
        </div> -->
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <ul class="header__bottom__menu">
          <li @click="showMegaMenu(0)">
            <svg
              class="cursor-pointer"
              width="41"
              height="38"
              viewBox="0 0 41 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="41" height="38" rx="5" fill="currentColor" />
              <path
                d="M10.6667 25.6666H27.3334V22.3333H10.6667V25.6666ZM12.3334 23.1666H14V24.8333H12.3334V23.1666ZM10.6667 12.3333V15.6666H27.3334V12.3333H10.6667ZM14 14.8333H12.3334V13.1666H14V14.8333ZM10.6667 20.6666H27.3334V17.3333H10.6667V20.6666ZM12.3334 18.1666H14V19.8333H12.3334V18.1666Z"
                fill="white"
              />
            </svg>
          </li>
          <li
            style="height: 100%"
            v-for="menu in menuList"
            :key="menu.id"
            @click="showMegaMenu(menu.id)"
          >
            <div
              class="menu-item"
              :class="{ 'menu-item-active': menu.id === menuCateActive }"
            >
              <span v-html="menu.icon"></span>
              {{ menu.name }}
              <svg
                class="menu-item__chevron"
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 1.25L4 4.75L7.5 1.25"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <transition name="slide-up">
      <div class="header__mega" v-if="isShowMegaMenu">
        <div class="container">
          <div class="mega-menu">
            <div class="mega-menu_desktop">
              <div class="mega-menu_desktop__left">
                <ul class="mega-menu_desktop__cate">
                  <li
                    v-for="item in menuCate"
                    :key="item.id"
                    :class="{ active: item.id === menuCateActive }"
                    @click="changeActiveMegaMenu(item.id)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
              <div class="mega-menu_desktop__right">
                <div class="mega-menu_desktop__right__top">
                  <n-grid
                    y-gap="10 m:30"
                    x-gap="10 m:30"
                    cols="2 s:4 m:6"
                    responsive="screen"
                  >
                    <n-gi v-for="item in 17" :key="item">
                      <router-link
                        :to="{ name: 'ProductList' }"
                        class="brand-item"
                        @click="isShowMegaMenu = false"
                      >
                        <img src="../../assets/images/brand-0.png" alt="" />
                      </router-link>
                      <!-- <router-link to="/product-list"  class="brand-item">
                    <img
                       src="../../assets/images/brand-0.png"
                        alt=""
                      />
                    </router-link>-->
                      <!-- <router-link :to="{name: 'ProductList'}" class="brand-item">
                        <img src="../../assets/images/brand-1.png" alt="" />
                    </router-link> -->
                    </n-gi>
                  </n-grid>
                </div>
                <div class="mega-menu_desktop__right__bottom">
                  <n-grid
                    y-gap="10"
                    x-gap="10 m:65"
                    cols="3"
                    responsive="screen"
                  >
                    <n-gi v-for="item in topKeywords" :key="item">
                      <a href="#" class="link-tag">{{ item }}</a>
                    </n-gi>
                  </n-grid>
                </div>
              </div>
            </div>
            <div class="mega-menu_mobile">
              <div class="mega-menu_mobile_left">
                <div
                  class="mega-menu_mobile_left_item"
                  v-for="menuItem in menuList"
                  :key="menuItem.id"
                  :class="{
                    menuMobileActive: menuItem.id === menuCateActive,
                  }"
                  @click="changeActiveMegaMenu(menuItem.id)"
                >
                  <p v-html="menuItem.icon"></p>
                  <p>{{ menuItem.name }}</p>
                </div>
              </div>

              <div class="mega-menu_mobile_right">
                <div class="mega-menu_mobile_right_top">
                  <p class="mega-menu_mobile_right_top_title">
                    {{ menuListName }}
                  </p>
                  <a href="/product-list">Tất cả</a>
                </div>
                <div class="mega-menu_mobile_right_bottom">
                  <div class="mega-menu_mobile_right_bottom__content">
                    <div class="mega-menu_mobile_right_brand">
                      <p class="mega-menu_mobile_right_title">Chọn theo hãng</p>
                      <div class="mega-menu_mobile_right_brand_list">
                        <n-grid
                          y-gap="16"
                          x-gap="10"
                          cols="4"
                          responsive="screen"
                        >
                          <n-gi v-for="brandItem in brandList" :key="brandItem">
                            <a href="/product-list" class="brand-item">
                              <img :src="getImageUrl(brandItem.icon)" alt="" />
                            </a>
                          </n-gi>
                        </n-grid>
                      </div>
                    </div>
                    <div
                      class="filter-box"
                      v-for="menuMobileItem in menuMobileList"
                      :key="menuMobileItem"
                    >
                      <p class="filter-box__title">
                        {{ menuMobileItem.title }}
                      </p>
                      <div class="filter-box__content">
                        <a
                          href="#"
                          class="filter-box__content__item"
                          v-for="item in menuMobileItem.item"
                          :key="item"
                        >
                          {{ item.content }}
                        </a>
                      </div>
                    </div>
                    <div class="mega-menu_mobile_product">
                      <p class="mega-menu_mobile_product__title">Sản phẩm</p>
                      <div class="mega-menu_mobile_product__content">
                        <p class="mega-menu_mobile_product__content__name">
                          Iphone 13
                        </p>
                        <div class="mega-menu_mobile_product__content__list">
                          <img
                            src="../../assets/images/product-menu.png"
                            alt=""
                            v-for="item in 3"
                            :key="item"
                          />
                        </div>
                        <a href="/product-list/1">Xem thêm</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch, h } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/helpers/url.js";
import useCartStore from "@/stores/cart.js";
import useUserStore from "@/stores/user.js";
const useCart = useCartStore();
const userStore = useUserStore();

const emit = defineEmits(["changeTheme", "login"]);

const menuList = ref([
  {
    id: 0,
    icon: `<svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.125 0.13625L2.87498 0.125C1.63748 0.125 0.63623 1.1375 0.63623 2.375V22.625C0.63623 23.8625 1.63748 24.875 2.87498 24.875H14.125C15.3625 24.875 16.375 23.8625 16.375 22.625V2.375C16.375 1.1375 15.3625 0.13625 14.125 0.13625ZM14.125 20.375H2.87498V4.625H14.125V20.375Z" fill="currentColor"/>
</svg>`,
    name: "ĐIỆN THOẠI",
  },
  {
    id: 1,
    icon: `<svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 0H2.5C1.12 0 0 1.12 0 2.5V21.5C0 22.88 1.12 24 2.5 24H16.5C17.88 24 19 22.88 19 21.5V2.5C19 1.12 17.88 0 16.5 0ZM9.5 23C8.67 23 8 22.33 8 21.5C8 20.67 8.67 20 9.5 20C10.33 20 11 20.67 11 21.5C11 22.33 10.33 23 9.5 23ZM17 19H2V3H17V19Z" fill="currentColor"/>
</svg>`,
    name: "MÁY TÍNH BẢNG",
  },
  {
    id: 2,
    icon: `<svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6667 13C17.6667 10.2483 16.3775 7.78917 14.3733 6.2075L13.3333 0H4.66668L3.63751 6.2075C1.62251 7.78917 0.333344 10.2375 0.333344 13C0.333344 15.7625 1.62251 18.2108 3.63751 19.7925L4.66668 26H13.3333L14.3733 19.7925C16.3775 18.2108 17.6667 15.7517 17.6667 13ZM2.50001 13C2.50001 9.41417 5.41418 6.5 9.00001 6.5C12.5858 6.5 15.5 9.41417 15.5 13C15.5 16.5858 12.5858 19.5 9.00001 19.5C5.41418 19.5 2.50001 16.5858 2.50001 13Z" fill="currentColor"/>
</svg>`,
    name: "WATCH",
  },
  {
    id: 3,
    icon: `<svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 17.5C26.375 17.5 27.5 16.375 27.5 15V2.5C27.5 1.125 26.375 0 25 0H5C3.625 0 2.5 1.125 2.5 2.5V15C2.5 16.375 3.625 17.5 5 17.5H0V20H30V17.5H25ZM5 2.5H25V15H5V2.5Z" fill="currentColor"/>
</svg>`,
    name: "MÁY TÍNH APPLE",
  },
  {
    id: 4,
    icon: `<svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 0.375V10.815C6.97125 10.6237 6.40875 10.5 5.8125 10.5C3.01125 10.5 0.75 12.7612 0.75 15.5625C0.75 18.3638 3.01125 20.625 5.8125 20.625C8.41125 20.625 10.5375 18.6562 10.8187 16.125H10.875V3.75H15.375V0.375H7.5Z" fill="currentColor"/>
</svg>`,
    name: "LOA DI ĐỘNG",
  },
  {
    id: 5,
    icon: `<svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 0.375V10.815C6.97125 10.6237 6.40875 10.5 5.8125 10.5C3.01125 10.5 0.75 12.7612 0.75 15.5625C0.75 18.3638 3.01125 20.625 5.8125 20.625C8.41125 20.625 10.5375 18.6562 10.8187 16.125H10.875V3.75H15.375V0.375H7.5Z" fill="currentColor"/>
</svg>`,
    name: "TAI NGHE",
  },
]);
const menuListName = computed(() => {
  const menuSelected = menuList.value.find(
    (menu) => menu.id === menuCateActive.value
  );
  if (menuSelected) {
    return menuSelected.name;
  }
  return "";
});

const menuCate = ref([
  {
    id: 0,
    name: "ĐIỆN THOẠI",
  },
  {
    id: 1,
    name: "MÁY TÍNH BẢNG",
  },
  {
    id: 2,
    name: "WATCH",
  },
  {
    id: 3,
    name: "MÁY TÍNH APPLE",
  },
  {
    id: 4,
    name: "LOA DI ĐỘNG",
  },
  {
    id: 5,
    name: "TAI NGHE",
  },
  {
    id: 6,
    name: "SẢN PHẨM APPLE",
  },
  {
    id: 7,
    name: "BALO",
  },
  {
    id: 8,
    name: "BÀN PHÍM KHÔNG DÂY",
  },
  {
    id: 9,
    name: "USB",
  },
  {
    id: 10,
    name: "BÚT CẢM ỨNG APPLE",
  },
  {
    id: 11,
    name: "APPLE TV",
  },
  {
    id: 12,
    name: "BAO DA/ ÓP LƯNG",
  },
  {
    id: 13,
    name: "APPLE TV",
  },
  {
    id: 14,
    name: "APPLE TV",
  },
  {
    id: 15,
    name: "BAO DA/ ÓP LƯNG",
  },
  {
    id: 16,
    name: "APPLE TV",
  },
]);

const topKeywords = ref([
  "Điện thoại giá dưới 5 triệu",
  "Dây đeo điện thoại",
  "Điện thoại giá dưới 1 triệu",
  "Óp lưng da",
  "Điện thoại giá trên 5 triệu",
  "Điện thoại giá dưới 1 triệu",
  "Phụ kiện điện thoại",
  "Điện thoại giá dưới 1 triệu",
  "Điện thoại giá dưới 1 triệu",
]);

const menuCateActive = ref(-1);
const changeActiveMegaMenu = (id) => {
  menuCateActive.value = id;
};

const isShowMegaMenu = ref(false);
const showMegaMenu = (id) => {
  changeActiveMegaMenu(id);
  isShowMegaMenu.value = !isShowMegaMenu.value;
};

const handleClickOutside = (event) => {
  if (event.target.closest(".mega-menu")) return;
  if (event.target.closest(".header__bottom__menu li")) return;
  if (event.target.closest(".header__top__toggle")) return;
  isShowMegaMenu.value = false;
  menuCateActive.value = -1;
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const showDropdownUser = ref(false);
const optionsDropdownUser = ref([
  {
    label: "Đăng nhập",
    key: "Đăng nhập",
    props: {
      onClick: () => {
        router.push({ name: "Login" });
      },
    },
  },
  {
    label: "Giao diện tối",
    key: "Giao diện tối",
  },
]);

const router = useRouter();

const handleSelect = (selected) => {
  if (selected === "Giao diện tối") {
    emit("changeTheme");
    (optionsDropdownUser.value[1].label = "Giao diện sáng"),
      (optionsDropdownUser.value[1].key = "Giao diện sáng");
  } else if (selected === "Giao diện sáng") {
    emit("changeTheme");
    (optionsDropdownUser.value[1].label = "Giao diện tối"),
      (optionsDropdownUser.value[1].key = "Giao diện tối");
  }
  if (selected === "Đăng nhập") {
    const goToLogin = () => {
      router.push({ name: "LogIn" });
    };
    goToLogin();
  }
};

onMounted(() => {
  if (document.documentElement.classList.contains("dark-mode")) {
    (optionsDropdownUser.value[1].label = "Giao diện sáng"),
      (optionsDropdownUser.value[1].key = "Giao diện sáng");
  }
});

const isShowFormSearch = ref(false);

function showFormSearch() {
  isShowFormSearch.value = !isShowFormSearch.value;
}

const user = computed(() => userStore.user);
watch(
  user,
  (newValue) => {
    if (newValue) {
      optionsDropdownUser.value[0] = {
        key: newValue.username,
        label: newValue.username,
        icon: () => {
          return h("img", {
            src: getImageUrl("logout.png"),
          });
        },
        props: {
          onClick: () => {
            userStore.logout();
          },
        },
      };
    }
  },
  {
    immediate: true,
  }
);

const value = computed(() => useCart.items);

const brandList = ref([
  {
    icon: "../../assets/images/brand-12.png",
  },
  {
    icon: "../../assets/images/brand-13.png",
  },
  {
    icon: "../../assets/images/brand-14.png",
  },
  {
    icon: "../../assets/images/brand-15.png",
  },
  {
    icon: "../../assets/images/brand-16.png",
  },
  {
    icon: "../../assets/images/brand-17.png",
  },
]);

const menuMobileList = ref([
  {
    title: "Chọn theo mức giá",
    item: [
      {
        content: "Dưới 5 triệu",
      },
      {
        content: "Từ 5 đến 10 triệu",
      },
      {
        content: "Trên 20 triệu",
      },
      {
        content: "Từ 10-15 triệu",
      },
    ],
  },
  {
    title: "Chọn theo nhu cầu",
    item: [
      {
        content: "Hai sim",
      },
    ],
  },
  {
    title: "Điện thoại hot",
    item: [
      {
        content: "Iphone 13",
      },
      {
        content: "Iphone 12",
      },
      {
        content: "Iphone 13",
      },
      {
        content: "Iphone 12",
      },
    ],
  },
]);
</script>

<style scoped></style>
