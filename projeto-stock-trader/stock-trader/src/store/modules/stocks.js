export default {
    namespace: true,
    state: {
        stocks: [{
            name: 'BMW',
            price: 566
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
        getStocks(state) {
            return state.stocks
        }
    }
}