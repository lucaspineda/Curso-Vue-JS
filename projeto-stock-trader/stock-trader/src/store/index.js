import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import acquiredStocks from './modules/portfolio'


import * as getters from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 0
  },
  getters,
  mutations: {
    setBalance(state, payload) {
      state.balance = payload
    }
  },
  actions: {
    // load all data from firebase
    loadData({commit}) {
        Vue.prototype.$http.get('data.json')
        .then(resp => {
            const data = resp.data
            if(data) {
                commit('setBalance', data.balance)
                commit('setStocks', data.stocks)
                commit('setAcquiredStocks', data.acquiredStocks)
            }
        })
    },
    // save all data in firebase
    saveData({commit}, payload) {

        // check if variables are null or undefined
        if(payload.balance == null) {
            payload.balance = this.getters.balance
        }
        if(payload.stocks == null) {
            payload.stocks = this.getters.stocks
        }
        if(payload.acquiredStocks == null) {
          payload.acquiredStocks = this.getters.acquiredStocks
        }
        
        Vue.prototype.$http.put('data.json', payload)
        .then(resp => {
            const data = resp.data
            if(data) {
                commit('setBalance', data.balance)
                commit('setStocks', data.stocks)
                commit('setAcquiredStocks', data.acquiredStocks)
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
  modules: { stocks, acquiredStocks }
})
