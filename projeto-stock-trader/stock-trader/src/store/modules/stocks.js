export default {
    namespace: true,
    state: {
        stocks: [
        {
            name: 'BMW',
            price: 23
        },
        {
            name: 'Google',
            price: 55
        },
        {
            name: 'Apple',
            price: 0
        },
        {
            name: 'Twitter',
            price: 88
        },
        {
            name: 'Facebook',
            price: 0
        },
        ]
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    },
    mutations: {
        setStocks(state, payload) {
            state = payload
        }
    }
}