export default {
    namespace: true,
    state: {
        stocks: [
            {
                name: 'Facebook',
                price: 20,
                quantity: 0
            }
        ]
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    },
    mutations: {
        setStocks(state, payload) {
            state.stocks = payload
            // console.log(state.stocks)
        }
    }
}