import App from "@/App.vue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { router } from "@/Routing";

import Aura from "@/presets/aura";
import "@/assets/base.css";
import "@/style.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
});

app.use(router);
app.mount("#app");
