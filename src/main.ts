import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadingElement from "@/components/LoadingElement.vue";
import datePicker from "@/datepicker/index.js";
import "@/assets/style/tailwind.css";
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/material_green.css';




createApp(App)
  .use(store.original)
  .use(router)
  .use(datePicker)
  .component("LoadingElement", LoadingElement)
  .mount("#app");
