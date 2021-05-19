import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css';
import _ from 'lodash';


Object.defineProperty(Vue.prototype, '$_', { value: _ });
import vuetify from './plugins/vuetify';
import VueWaiting from 'vue-waiting'



import '@/assets/style.css'
import '@/assets/css/mobile.css'
import '@/assets/css/laptop.css'
import '@/assets/css/ipad.css'

Vue.use(VueWaiting)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  waiting: new VueWaiting(),
  render: h => h(App)
}).$mount('#app')
