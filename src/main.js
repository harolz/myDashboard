import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
import router from "./Router";
import BlackDashboard from "./plugins/blackDashboard";
import socketio from 'socket.io-client'
import VueSocketio from 'vue-socket.io'
import i18n from "./i18n"
import './registerServiceWorker'
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(VueSocketio, socketio('127.0.0.1:3000'))

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
