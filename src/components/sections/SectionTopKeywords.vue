<template>
  <div class="top-keywords-section">
    <div class="container">
      <div class="keywords">
        <p>Top tìm kiếm:</p>
        <a href="" v-for="keyword in topKeywords" :key="keyword">{{ keyword }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const topKeywords = ref([
  '#Loadidong',
  '#USB',
  '#Chuotkhongdayapple',
  '#iphone13',
  '#iphone11',
  '#macbookM12021',
  '#oplungiphone',
])
</script>

<style scoped>

</style>