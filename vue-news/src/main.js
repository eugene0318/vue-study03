// import Vue from "vue";
// import App from "./App.vue";
// import { router } from "./router/index";

// // createApp(App).mount('#app')

// Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
//   router,
// }).$mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "../src/router/index";
import store from "./store/index";

//createApp(App).use(router).mount("#app");
const app = createApp(App);
app.use(store); // vuex 사용
app.use(router); // 라우터 사용
app.mount("#app");
