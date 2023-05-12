<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <n-breadcrumb>
          <n-breadcrumb-item href="/"> TRANG CHỦ</n-breadcrumb-item>
          <n-breadcrumb-item href="#"> TIN TỨC</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <section class="products-section-2 section" ref="scrollContainer">
      <div class="container">
        <div class="news">
          <n-grid x-gap="62" cols="1 m:3" responsive="screen">
            <n-gi span="1 m:2" class="custom_mobile">
              <div class="news_left">
                <div class="news_item" v-for="item in dataNews" :key="item">
                  <router-link
                    :to="{ name: 'News Detail', params: { slug: item.slug } }"
                  >
                    <img :src="item.thumbnail_path" alt="" />
                  </router-link>
                  <router-link
                    :to="{ name: 'News Detail', params: { slug: item.slug } }"
                  >
                    <p class="news_item_title">
                      {{ item.title }}
                    </p>
                  </router-link>
                  <p class="news_item_date">
                    {{ item.created_at }} - {{ item.created_by }}
                  </p>
                  <p class="news_item_content">
                    {{ item.view }}
                  </p>
                  <router-link
                    :to="{ name: 'News Detail', params: { slug: item.slug } }"
                  >
                    Xem thêm
                  </router-link>
                </div>
              </div>
            </n-gi>
            <n-gi span="1 m:1">
              <div class="news_right">
                <div class="news_right_search">
                  <n-input
                    v-on:keyup.enter="submit"
                    type="text"
                    placeholder="Tìm kiếm ..."
                  />
                  <button @click="submit">
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
                        d="M21.0004 20.9999L16.6504 16.6499"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="news_right_category">
                  <p class="news_right_category_title">DANH MỤC</p>

                  <n-skeleton
                    v-if="getDataCateLoading"
                    text
                    size="medium"
                    :repeat="3"
                  />
                  <template v-else-if="dataCategory && dataCategory.length">
                    <p
                      class="news_right_category_item"
                      v-for="item in dataCategory"
                      :key="item"
                    >
                      <router-link
                        :to="{
                          name: 'News List',
                          query: { category: item.slug },
                        }"
                        >{{ item.title }}</router-link
                      >
                    </p>
                  </template>
                </div>

                <div class="news_right_popular">
                  <p class="news_right_popular_title">BÀI ĐĂNG PHỔ BIẾN</p>
                  <n-skeleton
                    v-if="getPopularNewsListLoading"
                    text
                    size="medium"
                    :repeat="3"
                  />
                  <template v-else-if="popularNewsList">
                    <div
                      class="news_right_popular_item"
                      v-for="item in popularNewsList"
                      :key="item"
                    >
                      <router-link
                        :to="{
                          name: 'News Detail',
                          params: { slug: item.slug },
                        }"
                        class="news_right_popular_item_left"
                      >
                        <img :src="item.thumbnail_path" alt="" />
                      </router-link>
                      <div class="news_right_popular_item_right">
                        <p class="news_right_popular_item_right_date">
                          {{ item.created_at }}
                        </p>
                        <p class="news_right_popular_item_right_title">
                          <router-link
                            :to="{
                              name: 'News Detail',
                              params: { slug: item.slug },
                            }"
                          >
                            {{ item.title }}
                          </router-link>
                        </p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </n-gi>
          </n-grid>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import SectionBreadcrumb from "@/components/sections/SectionBreadcrumb.vue";
import { useRoute } from "vue-router";
const route = useRoute();
import { useLoadingBar } from "naive-ui";
const loadingBar = useLoadingBar();

import { useNewsStore } from "@/stores/news.js";
const newsStore = useNewsStore();

const dataNews = computed(() => newsStore.newsList);

const page = ref(1);
const getDataNews = async (category) => {
  try {
    loadingBar.start();
    await newsStore.getNewsList(page.value, category);
    // console.log(dataNews.value);
  } catch (error) {
    console.log(error.message);
  } finally {
    loadingBar.finish();
  }
};
getDataNews();

const dataCategory = computed(() => newsStore.cateList);
const getDataCateLoading = ref(false);
const getCateList = async () => {
  try {
    getDataCateLoading.value = true;
    await newsStore.getCateList();
  } catch (error) {
    console.log(error);
  } finally {
    getDataCateLoading.value = false;
  }
};
getCateList();

const popularNewsList = computed(() => newsStore.popularNewsList);
const getPopularNewsListLoading = ref(false);
const getPopularNewsList = async () => {
  try {
    getPopularNewsListLoading.value = true;
    await newsStore.getPopularNewsList();
  } catch (error) {
    console.log(error);
  } finally {
    getPopularNewsListLoading.value = false;
  }
};
getPopularNewsList();

watch(
  route,
  (newRoute) => {
    getDataNews(newRoute.query.category);
  },
  { immediate: true }
);
</script>

<style scoped></style>
