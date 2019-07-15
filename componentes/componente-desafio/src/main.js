import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// importando a nivel global

Vue.config.productionTip = false,

new Vue({
  render: h => h(App),
}).$mount('#app')
