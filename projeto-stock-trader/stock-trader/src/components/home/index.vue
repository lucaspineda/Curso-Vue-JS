<template>
    <div>
        <h1 class="display-3 mb-10">Negocie e Consulte suas Ações</h1>
        <v-sheet :elevation="6" class="pa-2 primary d-flex">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">
                Seus dados são salvos automaticamente após compra e venda de ações
            </span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 success darken-1 mt-3 d-flex">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">
                Clique em 'Finalizar Dia' para iniciar um novo dia!
            </span>
        </v-sheet>
        <v-divider class="my-6" />
        <span class="display-1"><strong>Seu Saldo:</strong> {{ balance | formatBalance}} </span>
    </div>
</template>

<script>
export default {

    computed: {
        balance() {
            return this.$store.state.balance;
        }
    },

}
</script>

<style>

</style>