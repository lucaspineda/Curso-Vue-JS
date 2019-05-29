new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert("Alertando")
        },
        alteraValor(){
            this.valor = event.target.value //event pode ser passado ou não como parametro
        }
    }
})