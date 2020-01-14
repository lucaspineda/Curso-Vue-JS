import Vue from 'vue'
import axios from 'axios'


Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://projeto-stock-trader.firebaseio.com/',
        })
    },
})