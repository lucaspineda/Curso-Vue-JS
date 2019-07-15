<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: {{ inverterNome() }} </p>
    </div>
</template>

<script>
export default {
    props: [
        'nome'
    ],
    methods: {
        // as props podem ser trabalhadas como qualquer atributo, inclusive é possivel criar metodos com elas
        inverterNome() {
            return this.nome.split('').reverse().join('')
        }
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
