/* IMPORTAÇÕES */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router.js";

/* INSTANCIANDO OBJETO VUE */
const Vue = createApp(App);

/* INSTANCIANDO OBJETO ROUTES DENTRO DE VUE */
Vue.use(router);

/* MONTANDO VUE */
Vue.mount("#app");
