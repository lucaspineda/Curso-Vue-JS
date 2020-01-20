export default {
    namespace: true,
    state: {
        // acquired stocks
        acquiredStocks: [
            // {
            //     name: 'bmw',
            //     price: 22,
            //     quantity: 0
            // }
        ]
    },
    getters: {
        acquiredStocks(state) {
            return state.acquiredStocks
        }
    },
    mutations: {
        setAcquiredStocks(state, payload) {
            state.acquiredStocks = payload
        }
    }
}