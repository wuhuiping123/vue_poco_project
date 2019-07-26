import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './js/router.js'

import $ from 'jquery'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/icon/iconfont.css'
import './assets/css/animate.css'
import './assets/css/base.css'
import './assets/css/header.css'

import axios from 'axios'
Vue.prototype.$http = axios

//import VueTouch from "vue-touch"
//Vue.use(VueTouch)

import LyTab from 'ly-tab'
Vue.use(LyTab)

//挂载属性
Vue.use(VueRouter);
Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
