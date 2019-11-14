export default {
    namespaced: true,
    state: {
        quantidade: 1,
        preco: 9.99
    },
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },
}