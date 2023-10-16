import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./plugins/axios.js";
import { useAuthStore } from "@/stores/auth";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
const authStore = useAuthStore();
authStore.checkAuth();

app.use(router);
app.mount("#app");
