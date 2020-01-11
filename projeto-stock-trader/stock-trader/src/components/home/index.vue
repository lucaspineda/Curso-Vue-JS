<template>
    <div class="box-screen">
        <h1 class="display-3">Negocie e Consulte suas Ações</h1>
        <span class="balance-title">Seu Saldo: </span>
        <span> {{ balance | formatBalance}} </span>
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