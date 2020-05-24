import Vue from "vue";
import App from "./App.vue";
import Demo from "../packages";
Vue.config.productionTip = false;
Vue.use(Demo);

new Vue({
  render: h => h(App)
}).$mount("#app");
