<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" 
            :key="stock.name"
            :stock="stock"/>
    </v-layout>
</template>

<script>

import Stock from './stock'

export default {
    components: {
        Stock
    },

    created() {
    },

    data() {
        return {
            quantity: 0,
        }
    },
    computed: {
        stocks() {
            return this.$store.state.stocks.stocks
        }
    },

}
</script>

<style scoped>

</style>