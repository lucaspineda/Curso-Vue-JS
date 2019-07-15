import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// importando a nivel global
import Menu from './Menu.vue'
// import Header from './Header.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'



Vue.config.productionTip = false,
Vue.component('app-menu', Menu)
// Vue.component('app-header', Header)
Vue.component('app-carousel', Carousel)
Vue.component('app-footer', Footer)


new Vue({
  render: h => h(App),
}).$mount('#app')
