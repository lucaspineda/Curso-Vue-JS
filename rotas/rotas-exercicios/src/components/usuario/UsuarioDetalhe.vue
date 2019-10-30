<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario :to="`/usuario/${id}/editar`">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // beforeRouteEnter(to, from, next) {
    //     // console.log(this.id)
    //     console.log('dentro do componente -> usuário detalhe')
    //     // next(vm => {
    //     //     console.log(vm.id)
    //     // })
    //     const autenticado = true
    //     autenticado ? next() : next(false)
    // }
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>
