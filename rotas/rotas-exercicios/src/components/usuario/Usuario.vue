<template>
    <div class="usuario">
        <h2>Usuario</h2>
        <hr>
        <p>Código: {{ id }} </p>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to){
    //         this.id = to.params.id
    //     }
    // },
    methods: {
        irParaInicio() {
            this.$router.push({ path: '/'})
        }
    },
}
</script>

<style>

</style>