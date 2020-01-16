import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'

import * as getters from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 1000.00
  },
  getters,
  mutations: {
    setBalance(state, payload) {
      state.balance = payload
    }
  },
  actions: {
    loadData() {
        Vue.prototype.$http.get('data.json')
        .then(resp => {
            const data = resp.data
            if(data) {
                this.commit('setBalance', data.balance)
            }
        })
    },
    buyStock({commit}, payload) {
        // const newBalance = this.getters.getBalance - price * quantity
        // const {getBalance, getStocks} = this.getters
      /* eslint-disable no-console */
      console.log(payload, commit)
      /* eslint-enable no-console */
        // Vue.prototype.$http.put('data.json', {getBalance, getStocks})
        // .then(resp => {
        //     const data = resp.data
        //     if(data) {
        //         this.commit('setBalance', data.balance)
        //     }
        // })
    }
  },
  modules: { stocks }
})
