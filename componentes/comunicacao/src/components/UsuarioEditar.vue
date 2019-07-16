<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>idade: {{ idade }}</p>
        <button @click="alterarIdade">Alterar idade</button>
    </div>
</template>

<script>
export default {
    props: {
        idade: Number
    },
    methods: {
        alterarIdade() { 
            // this.idade = 33
            this.$emit('idadeMudou', 33)
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
