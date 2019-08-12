import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-a1eac.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-a1eac.firebaseio.com/'
        })
    }
})