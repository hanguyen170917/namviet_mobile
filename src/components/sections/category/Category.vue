<template>
  <div class="category">
    <div class="category__head">
      <span class="category__head__tag">{{ tag }}</span>
      <span class="category__head__title">{{ title }}</span>
    </div>
    <div class="category__body">
      <img :src="getImageUrl(image)" alt="">
    </div>
  </div>
</template>

<script setup>
import {getImageUrl} from "@/helpers/url";

defineProps({
  tag: String,
  title: String,
  image: String
})
</script>

<style scoped>

</style>