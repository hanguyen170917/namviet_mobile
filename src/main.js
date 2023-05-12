import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// import vuetify from "./plugins/vuetify";
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';

import "./styles/main.scss";

const app = createApp(App);

app.use(router);
// app.use(vuetify);
app.use(createPinia());
app.mount("#app");
