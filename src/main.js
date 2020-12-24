import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

import ajax from '@/api'
import './assets/icon.css'
import './index.scss'
Vue.config.productionTip = false
Vue.prototype.$ajax = ajax
import Element from 'element-ui'
Vue.use(Element, { size: 'small', zIndex: 3000 })
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')