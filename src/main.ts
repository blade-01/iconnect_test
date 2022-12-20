import { createApp } from "vue";

// Pinia Store
import { createPinia } from "pinia";
import App from "./App.vue";
// Tailwind styles
import "./index.css";
// Vue toastification and styles
import Toast, { POSITION } from "vue-toastification";
import type { PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
// MDI Font styles
import "@mdi/font/css/materialdesignicons.css";
// Vue lazy image load plugin
import lazyPlugin from "vue3-lazy";

const app = createApp(App);

app.use(createPinia());

const options: PluginOptions = {
  // Default toast options
  position: POSITION.TOP_RIGHT,
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};

app.use(Toast, options);
app.use(lazyPlugin, {
  loading:
    "https://res.cloudinary.com/bladencove/image/upload/v1655997367/RC/ezgif.com-gif-maker_1_vptsnn.gif",
  error: "https://c.tenor.com/hwe3vkln0_UAAAAC/error-x-error.gif",
});

app.mount("#app");
