<template>
  <div>
    <section-home-banner></section-home-banner>
    <section-categories></section-categories>
    <section-top-keywords></section-top-keywords>
    <section-top-products
      title="SẢN PHẨM NỔI BẬT"
      sub-title="Các sản phẩm được người dùng đánh giá cao vì chất lượng"
    ></section-top-products>
    <section>
      <div class="container">
        <img src="../assets/images/banner.jpg" alt="" class="w-full h-auto" />
      </div>
    </section>
    <section-products
      title="ĐIỆN THOẠI"
      sub-title="Các sản phẩm điện thoại do Nam Việt cung cấp mới nhất"
    ></section-products>
    <section-products
      title="MÁY TÍNH BẢNG"
      sub-title="Các sản phẩm máy tính bảng do Nam Việt cung cấp mới nhất"
    ></section-products>
    <section-products
      title="MÁY TÍNH APPLE"
      sub-title="Các sản phẩm máy tính do Nam Việt cung cấp mới nhất"
    ></section-products>
    <section-products title="SẢN PHẨM KHÁC"></section-products>
    <section-hot-products background-color="#FFEDEB"></section-hot-products>
    <section-hot-products background-color="#E4EFFF"></section-hot-products>
    <section-best-seller></section-best-seller>
    <section-quick-search></section-quick-search>
  </div>
</template>

<script setup>
import SectionHomeBanner from "@/components/sections/SectionHomeBanner.vue";
import SectionCategories from "@/components/sections/category/SectionCategories.vue";
import SectionTopKeywords from "@/components/sections/SectionTopKeywords.vue";
import SectionTopProducts from "@/components/sections/sectionProduct/SectionTopProducts.vue";
import SectionProducts from "@/components/sections/sectionProduct/SectionProducts.vue";
import SectionHotProducts from "@/components/sections/sectionProduct/SectionHotProducts.vue";
import SectionBestSeller from "@/components/sections/SectionBestSeller.vue";
import SectionQuickSearch from "@/components/sections/SectionQuickSearch.vue";
</script>

<style scoped></style>
