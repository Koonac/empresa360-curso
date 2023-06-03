/* IMPORTAÇÕES */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router.js";
/* IMPORTANDO O MITT */
import mitt from "mitt";

/* INSTANCIANDO OBJETO VUE */
const Vue = createApp(App);
const emitter = mitt();

/* CRIANDO PROPRIEDADES GLOBAIS DENTRO DO PROJETO VUE */
Vue.config.globalProperties.emitter = emitter;
/* INSTANCIANDO OBJETO ROUTES DENTRO DE VUE */
Vue.use(router);
/* MONTANDO VUE */
Vue.mount("#app");
