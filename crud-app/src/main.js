import "./assets/main.css";
import router from "./router.js";
import { createPinia } from "pinia";

import { createApp } from "vue";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
