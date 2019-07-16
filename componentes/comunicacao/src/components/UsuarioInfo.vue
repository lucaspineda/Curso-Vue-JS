<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: {{ inverterNome() }} </p>
        <p>idade: {{ idade }}</p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar nome (Callback)</button>


    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            required: true,
            // default: "Anonimo" -- usado para trazer o valor default caso o atributo não esteja preenchido
            default: function() {
                return Array(10).fill(0).join(',')
            }
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        // as props podem ser trabalhadas como qualquer atributo, inclusive é possivel criar metodos com elas
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            const antigo = this.nome;
            this.nome = 'Pedro'
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo
            })
        }
    },
    created() {
        barramento.$on('idadeMudou', idade => {
            this.idade = idade
        })
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
