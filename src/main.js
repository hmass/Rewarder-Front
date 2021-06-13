import Vue from 'vue'
// import './axios'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import router from './router'

import store from './vuex'

import axios from "axios"

axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
axios.defaults.headers.common['Access-Control-Allow-Origin'] = true;

Vue.use(VueSweetalert2)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
