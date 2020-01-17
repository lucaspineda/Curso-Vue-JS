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
    // load all data from firebase
    loadData() {
        Vue.prototype.$http.get('data.json')
        .then(resp => {
            const data = resp.data
            if(data) {
                this.commit('setBalance', data.balance)
            }
        })
    },
    // save all data in firebase
    saveData({commit}, payload) {
        /* eslint-disable no-console */
        console.log(payload.balance)
        /* eslint-enable no-console */

        // check if variables are null or undefined
        if(payload.balance == null) {
            payload.balance = this.getters.balance
        }
        if(payload.stocks == null) {
            payload.stocks = this.getters.stocks
        }
        
        Vue.prototype.$http.put('data.json', payload)
        .then(resp => {
            const data = resp.data
            if(data) {
                commit('setBalance', data.balance)
                commit('setStocks', data.stocks)
            }
        })
    },
    buyStock({dispatch}, payload) {
        const price = payload.price
        const quantity = payload.quantity

        // gets new balance value and dispatch to saveData method
        const balance = this.getters.balance - price * quantity
        const stocks = this.getters.stocks

        dispatch('saveData', {balance, stocks})
    }
  },
  modules: { stocks }
})
