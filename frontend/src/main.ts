import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import App from "./App.vue";
import router from "./router";
import GlobalLayout from "./components/layout/GlobalLayout.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: "p",
            darkModeSelector: false,
            cssLayer: false,
        },
    },
});

app.component("GlobalLayout", GlobalLayout);

app.mount("#app");
