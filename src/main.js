import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Import the Auth0 configuration
//import { domain, clientId } from "../auth_config.json";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
