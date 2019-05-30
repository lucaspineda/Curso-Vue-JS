new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor === 37 ?
                'Valor igual 37' : 'Valor Diferente'
        }
    },
    watch: {
        resultado(){
            setTimeout(() => { this.valor = 0},5000)
        }// após a função ser chamada ela irá zerar o valor de VALOR após 5 segundos
    }
});