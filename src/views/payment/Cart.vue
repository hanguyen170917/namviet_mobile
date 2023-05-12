<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <n-breadcrumb>
          <n-breadcrumb-item href="/"> TRANG CHỦ</n-breadcrumb-item>
          <n-breadcrumb-item href="#"> GIỎ HÀNG</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <section class="products-section-2 section">
      <div class="container">
        <div class="cart">
          <h1>GIỎ HÀNG</h1>
          <table class="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>SẢN PHẨM</th>
                <th>GIÁ</th>
                <th>MÀU SẮC</th>
                <th>SỐ LƯỢNG</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data" :key="item.id">
                <td width="50">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="deleteCartItem(item.id)"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 9L9 15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 9L15 15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </td>
                <td>
                  <div class="cart-item">
                    <div class="cart-item_left">
                      <div class="cart-item_left_custom_bg">
                        <div class="ratio-1x1">
                          <img
                            :src="getImageUrl(item.img)"
                            alt=""
                            class="cart-item_left_img"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="cart-item_right">
                      <p class="cart-item_right_name_product">
                        {{ item.name }}
                      </p>
                      <p class="cart-item_right_price">
                        Giá: {{ formatCurrency(item.price) }}
                      </p>
                      <div>
                        <n-dropdown
                          class="dropdown_color"
                          trigger="click"
                          :options="optionsDropdownColor"
                          @select="handleSelectColor"
                        >
                          <n-button
                            class="btn-selected_color dropdown_color_mobile"
                          >
                            {{ selectedColor }}
                            <img :src="getImageUrl(item.color)" alt="" />
                            <svg
                              width="9"
                              height="5"
                              viewBox="0 0 9 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.750001 0.625L4.5 4.375L8.25 0.625"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </n-button>
                        </n-dropdown>
                      </div>
                      <div>
                        <n-input-group
                          class="quantity__select cart-item_right_quantity"
                        >
                          <n-button @click="quantitySelectDown(item.id)"
                            >-</n-button
                          >
                          <n-input
                            placeholder=""
                            readonly=""
                            :value="item.quantity"
                          />
                          <n-button @click="quantitySelectUp(item.id)"
                            >+</n-button
                          >
                        </n-input-group>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="cart-price" width="150" @click="totalCart">
                  {{ formatCurrency(item.price) }}
                </td>
                <td>
                  <div>
                    <n-dropdown
                      class="dropdown_color"
                      trigger="click"
                      :options="optionsDropdownColor"
                      @select="handleSelectColor"
                    >
                      <n-button class="btn-selected_color">
                        {{ selectedColor }}
                        <img :src="getImageUrl(item.color)" alt="" />
                        <svg
                          width="9"
                          height="5"
                          viewBox="0 0 9 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.750001 0.625L4.5 4.375L8.25 0.625"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </n-button>
                    </n-dropdown>
                  </div>
                </td>
                <td>
                  <n-input-group class="quantity__select cart-quantity">
                    <n-button @click="quantitySelectDown(item.id)">-</n-button>
                    <n-input
                      placeholder=""
                      readonly=""
                      :value="item.quantity"
                    />
                    <n-button @click="quantitySelectUp(item.id)">+</n-button>
                  </n-input-group>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="tfoot">
            <div>
              <span>TẠM TÍNH</span>
              <span>{{ totalPrice }}</span>
            </div>
            <div>
              <span>TỔNG CỘNG</span>
              <span>{{ totalPrice }}</span>
            </div>
          </div>
          <!-- <n-data-table
          :columns="columns"
          :data="data"
          :bordered="false"
          class="table-cart"
          id="table-cart"
        >
        </n-data-table>
        <n-data-table
          :columns="columnsIsMobile"
          :data="data"
          :bordered="false"
          class="table-cart"
          id="table-cart_mobile"
        >
        </n-data-table> -->

          <div class="btn-add__cart btn-payment">
            <router-link :to="{ name: 'Payment' }">
              <n-button>TIẾN HÀNH THANH TOÁN</n-button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, h } from "vue";
import SectionBreadcrumb from "@/components/sections/SectionBreadcrumb.vue";
import { getImageUrl } from "@/helpers/url.js";
import { formatCurrency } from "@/helpers/format.js";
import CartItem from "@/components/CartItem.vue";
import { useRouter } from "vue-router";

const data = ref([
  {
    id: "1",
    name: "Iphone 13 Pro Max 128GB",
    price: 35000000,
    color: "product-cart-color-2.png",
    quantity: 5,
    img: "color-product-1.png",
  },
]);

const deleteCartItem = (id) => {
  data.value = data.value.filter((item) => item.id !== id);
};

function quantitySelectDown(id) {
  const dataIndex = data.value.findIndex((item) => item.id === id);
  if (dataIndex !== -1) {
    if (data.value[dataIndex].quantity === 0) {
      return;
    }
    data.value[dataIndex].quantity = data.value[dataIndex].quantity - 1;
  }
}
function quantitySelectUp(id) {
  const dataIndex = data.value.findIndex((item) => item.id === id);
  if (dataIndex !== -1) {
    data.value[dataIndex].quantity = data.value[dataIndex].quantity + 1;
  }
}

const totalPrice = computed(() => {
  let total = 0;
  for (let i = 0; i < data.value.length; i++) {
    const item = data.value[i];
    total += item.price * item.quantity;
  }
  return formatCurrency(total);
});

const renderIcon = (imageUrl) => {
  return () => {
    return h("img", {
      src: getImageUrl(imageUrl),
    });
  };
};
const optionsDropdownColor = ref([
  {
    label: "Màu vàng",
    key: "Màu vàng",
    icon: renderIcon("product-cart-color-2.png"),
  },
  {
    label: "Màu xanh",
    color: "product-cart-color-2.png",
    key: "Màu xanh",
    icon: renderIcon("product-cart-color-2.png"),
  },
  {
    label: "Màu đỏ",
    color: "product-cart-color-2.png",
    key: "Màu đỏ",
    icon: renderIcon("product-cart-color-2.png"),
  },
]);

const handleSelectColor = (key) => {
  selectedColor.value = key;
};
const selectedColor = ref(optionsDropdownColor.value[0].key);

function totalCart() {}
</script>

<style scoped></style>
