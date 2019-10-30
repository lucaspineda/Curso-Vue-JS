<template>
    <div class="usuario">
        <h2>Usuario</h2>
        <hr>
        <router-view />
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaInicio() {
            this.$router.push({ path: '/'})
        }
    },
}
</script>

<style>

</style>