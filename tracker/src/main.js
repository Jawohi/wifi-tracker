import { createApp } from "vue";
import App from "./App.vue";
import axios from 'axios';
import PrimeVue from 'primevue/config';

createApp(App).mount("#app");

App.use(PrimeVue, axios);
