import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Menu from './Menu.vue'

Vue.config.productionTip = false,
Vue.component('app-menu', Menu)


new Vue({
  render: h => h(App),
}).$mount('#app')
