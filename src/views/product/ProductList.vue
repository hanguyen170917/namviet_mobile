<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <n-breadcrumb>
          <n-breadcrumb-item href="/"> TRANG CHỦ</n-breadcrumb-item>
          <n-breadcrumb-item href="#"> ĐIỆN THOẠI</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <section class="products-section-2 section">
      <div class="container">
        <div class="product-filter">
          <n-dropdown
            trigger="click"
            :options="optionFilterList"
            :render-icon="(item) => (item.key === selectedFilter ? '✔' : '')"
            placement="bottom-end"
            @select="handleSelectFilter"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </n-dropdown>
        </div>
        <h1 class="section__title text-center">ĐIỆN THOẠI APPLE</h1>
        <div class="ct-layout">
          <div class="ct-layout__aside">
            <div class="aside-item">
              <h4 class="aside-item__head">DUNG LƯỢNG</h4>
              <div class="aside-item__body">
                <n-checkbox-group v-model:value="capacity">
                  <n-grid y-gap="15" x-gap="15" :cols="1">
                    <n-gi v-for="item in capacityList" :key="item.value">
                      <n-checkbox v-bind="item" />
                    </n-gi>
                  </n-grid>
                </n-checkbox-group>
              </div>
            </div>
            <div class="aside-item">
              <h4 class="aside-item__head">MÀU SẮC</h4>
              <div class="aside-item__body">
                <n-checkbox-group v-model:value="color">
                  <n-grid y-gap="5" x-gap="5" :cols="5">
                    <n-gi v-for="item in colorList" :key="item.value">
                      <n-checkbox
                        :value="item.value"
                        class="checkbox-color"
                        :style="{ '--color': item.value }"
                      />
                    </n-gi>
                  </n-grid>
                </n-checkbox-group>
              </div>
            </div>
            <div class="aside-item">
              <h4 class="aside-item__head">MỨC GIÁ</h4>
              <div class="aside-item__body">
                <Slider
                  v-model="price"
                  :min="priceMin"
                  :max="priceMax"
                  :format="formatCurrency"
                  :merge="30000000"
                  :step="-1"
                />
              </div>
            </div>
          </div>
          <div class="ct-layout__main">
            <div v-if="loading" class="text-center">...</div>
            <template v-else>
              <n-grid
                x-gap="15 m:30"
                y-gap="15 m:30"
                cols="2 s:4 m:5"
                responsive="screen"
                :collapsed="true"
                :collapsed-rows="2"
              >
                <n-gi v-for="product in products" :key="product.id">
                  <product-item
                    :id="product.id"
                    :colors="product.colors"
                    :name="product.name"
                    :price="product.unit_price"
                  ></product-item>
                </n-gi>
              </n-grid>
              <n-pagination
                class="ct-pagination ct-pagination--center"
                v-model:page="currentPage"
                :page-count="10"
                :page-slot="5"
              />
            </template>
          </div>
        </div>
      </div>
    </section>
    <section-quick-search></section-quick-search>
  </div>
</template>

<script setup>
import { defineComponent, ref, computed, watch, onMounted } from "vue";
import SectionBreadcrumb from "@/components/sections/SectionBreadcrumb.vue";
import SectionQuickSearch from "@/components/sections/SectionQuickSearch.vue";
import { useProductsStore } from "@/stores/products";
import ProductItem from "@/components/sections/sectionProduct/ProductItem.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goToDetail = () => {
  router.push({ name: "Product Detail", params: { id: 1 } });
};

import { formatCurrency } from "@/helpers/format.js";

import Slider from "@vueform/slider";

const productsStore = useProductsStore();
const loading = ref(false);
const getProducts = async () => {
  try {
    loading.value = true;
    await productsStore.getItems(currentPage.value);
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.value = false;
  }
};

const currentPage = ref(1);
watch(
  currentPage,
  (newValue) => {
    getProducts(newValue);
  },
  { immediate: true }
);

const products = computed(() => productsStore.items);

const pageCount = computed(() => productsStore.pageCount);

const capacity = ref(["128 GB"]);
const capacityList = ref([
  {
    label: "128 GB",
    value: "128 GB",
  },
  {
    label: "256 GB",
    value: "256 GB",
  },
  {
    label: "512 GB",
    value: "512 GB",
  },
  {
    label: "Tất cả",
    value: "Tất cả",
  },
]);

const color = ref(["#252525"]);
const colorList = ref([
  {
    label: "#252525",
    value: "#252525",
  },
  {
    label: "#205D7A",
    value: "#205D7A",
  },
  {
    label: "#EA4D4D",
    value: "#EA4D4D",
  },
  {
    label: "#FF378B",
    value: "#FF378B",
  },
  {
    label: "#00C0CC",
    value: "#00C0CC",
  },
]);

const price = ref([0, 40000000]);
const priceMin = ref(0);
const priceMax = ref(50000000);
// const formatPrice = (value) => {
//   return new Intl.NumberFormat("en-US").format(value);
// };

// const page = ref(1);
// const pageCount = ref(10);
const showFilter = ref(false);
const optionFilterList = ref([
  {
    label: "Giá từ thấp đến cao",
    key: "Giá từ thấp đến cao",
    // props: {
    //   class: () => {
    //     message.success('Good!')
    //   }
    // }
  },
  {
    label: "Giá từ cao đến thấp",
    key: "Giá từ cao đến thấp",
  },
  {
    label: "Dung lượng thấp đến cao",
    key: "Dung lượng thấp đến cao",
  },
  {
    label: "Dung lượng cao đến thấp",
    key: "Dung lượng cao đến thấp",
  },
  {
    label: "Màu sắc",
    key: "Màu sắc",
  },
]);

const selectedFilter = ref(optionFilterList.value[0].key);
const handleSelectFilter = (key) => {
  selectedFilter.value = key;
};

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
</script>

<style src="@vueform/slider/themes/default.css"></style>
