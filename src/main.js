import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './views/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题

import './assets/css/icon.css';
import './views/common/directives';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});


new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app');

