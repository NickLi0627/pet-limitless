import { createApp } from "vue";
import { createPinia } from "pinia";
import BootstrapVue3 from "bootstrap-vue-3";

import App from "./App.vue";
import router from "./router";

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "virtual:svg-icons-register";
import "./assets/main.css";

import { plugin, defaultConfig } from "@formkit/vue";

const app = createApp(App);

app.use(createPinia());
app.use(plugin, defaultConfig);
app.use(router);
app.use(BootstrapVue3);
app.use(OpenLayersMap);

app.mount("#app");
