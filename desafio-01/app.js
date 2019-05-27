new Vue({
    el: '#desafio',
    data: {
        nome: 'Lucas Pineda',
        idade: 22,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    methods: {
        idadesVezes3(){
            return this.idade * 3
        },
        aleatorio(){
            return Math.random()
        }
    }
})