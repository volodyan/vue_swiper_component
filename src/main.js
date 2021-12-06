import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/iconfont/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
// 引入mockjs
import './mockserver/mockserver'
import moment from 'moment'
Vue.prototype.$moment = moment;

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')