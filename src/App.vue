<template>
  <n-notification-provider>
    <n-config-provider
      abstract
      inline-theme-disabled
      :theme="theme"
      :theme-overrides="
        theme === null ? lightThemeOverrides : darkThemeOverrides
      "
    >
      <n-loading-bar-provider>
        <the-header @change-theme="handleChangeTheme"></the-header>
        <main>
          <router-view v-slot="{ Component, route }">
            <transition name="slide-up" mode="out-in">
              <component :is="Component" :key="route.path" />
            </transition>
          </router-view>
        </main>
        <the-footer></the-footer>

        <n-back-top
          :show="isShowBackTop"
          :style="{
            transition: 'all .3s cubic-bezier(.4, 0, .2, 1)',
          }"
        />
      </n-loading-bar-provider>
      <n-global-style />
    </n-config-provider>
  </n-notification-provider>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from "vue";
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import { darkTheme } from "naive-ui";

import useUserStore from "@/stores/user.js";
const userStore = useUserStore();

if (localStorage.getItem("access_token")) {
  userStore.getUserInfo();
}

const deepMerge = (target, source) => {
  Object.entries(source).forEach(([key, value]) => {
    if (value && typeof value === "object") {
      deepMerge((target[key] = target[key] || {}), value);
      return;
    }
    target[key] = value;
  });
  return target;
};

/**
 * @type import('naive-ui').GlobalThemeOverrides
 */

const themeShared = {
  common: {
    textColorBase: "#000",
    bodyColor: "#fff",
    hoverColor: "#EC1820",
    primaryColor: "#EC1820",
    primaryColorHover: "#EC1820",
    primaryColorPressed: "#EC1820",
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "16px",
    borderRadius: "5px",
    textColor1: "#000",
    textColor2: "#000",
    textColor3: "#000",
    lineHeight: "1.4",
  },
  Button: {
    fontSizeMedium: "16px",
    fontWeight: "bold",
    heightMedium: "36px",
    paddingMedium: "0 16px",
  },
  Input: {
    heightMedium: "36px",
    fontSizeMedium: "16px",
  },
  Breadcrumb: {
    itemTextColor: "#131313",
  },
  Checkbox: {
    borderRadius: 0,
    colorChecked: "#000",
    checkMarkColor: "#FFF",
    border: "1px solid #858585",
    borderChecked: "1px solid #000",
    borderFocus: "1px solid #000",
    sizeMedium: "30px",
    fontSizeMedium: "16px",
    labelPadding: "0 0 0 15px",
    boxShadowFocus: "none",
  },
  Slider: {
    railHeight: "1px",
    railColor: "#D8D8D8",
    fillColor: "#000",
    fillColorHover: "#000",
    handleSize: "12px",
    handleColor: "#000",
  },
  Pagination: {
    itemSize: "30px",
    itemMargin: "0 0 0 10px",
    buttonColor: "#FFF",
    buttonIconColor: "#5C5C5C",
    buttonIconColorHover: "#EC1820",
    itemBorder: "1px solid #E1E1E1",
    itemBorderHover: "1px solid #EC1820",
    itemTextColorActive: "#FFF",
    itemTextColorHover: "#EC1820",
    itemColorActive: "#EC1820",
    itemColorActiveHover: "#EC1820",
    itemBorderRadius: "0px",
    itemColorDisabled: "#E0E0E0",
    itemBorderDisabled: "#E0E0E0",
    itemTextColorDisabled: "#5C5C5C",
  },
  Radio: {
    boxShadowFocus: "none",
    buttonBoxShadowFocus: "none",
  },
  Dropdown: {
    railColorActive: "green",
  },
};
const lightThemeOverrides = [
  themeShared,
  { common: { bodyColor: "#fff" } },
].reduce(deepMerge, {});
const darkThemeOverrides = [
  themeShared,
  {
    common: {
      bodyColor: "#191717",
      textColor1: "#fff",
      textColor2: "#fff",
      textColor3: "#fff",
      textColorBase: "#fff",
    },
  },
].reduce(deepMerge, {});
const theme = ref(null);
const themeOverrides = ref(null);
const handleChangeTheme = () => {
  theme.value = theme.value === null ? darkTheme : null;
};
if (localStorage.getItem("theme")) {
  theme.value = localStorage.getItem("theme") === "dark" ? darkTheme : null;
}
watch(
  theme,
  (newValue) => {
    if (newValue) {
      localStorage.setItem("theme", "dark");
      themeOverrides.value = darkThemeOverrides;
      document.documentElement.classList.add("dark-mode");
    } else {
      localStorage.setItem("theme", "light");
      themeOverrides.value = lightThemeOverrides;
      document.documentElement.classList.remove("dark-mode");
    }
  },
  { immediate: true }
);

const isShowBackTop = ref(false);

const checkShowBackTop = (event) => {
  isShowBackTop.value = document.documentElement.scrollTop > 70;
  // if (document.documentElement.scrollTop > 100) {
  //   isShowBackTop.value = true;
  //   // console.log(document.documentElement.scrollTop);
  // } else {
  //   isShowBackTop.value = false;
  // }
};
onMounted(() => {
  document.addEventListener("scroll", checkShowBackTop);
});
onUnmounted(() => {
  document.addEventListener("scroll", checkShowBackTop);
});
</script>

<style></style>
