<template>
  <div class="breadcrumb-section">
    <div class="container">
      <n-breadcrumb>
        <n-breadcrumb-item href="/" v-for="item in breadcrumb" :key="item.path"> {{item.name}}</n-breadcrumb-item>
      </n-breadcrumb>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
const route = useRoute();

// const breadcrumb = computed(() => [
//   {
//     name: 'TRANG CHỦ',
//     path: '',
//   }
// ])
</script>

<style scoped></style>
