<template>
  <v-card color="#fff">
            <v-card tile class="green darken-3 white--text">
                <v-card-title>
                    <span class="title font-weight-light">{{ stock.name }} (Preço: {{ stock.price | formatBalance}})</span>
                </v-card-title>
            </v-card>
            <v-card tile class="sub-card">
                <v-text-field
                    type="number"
                    label="Quantidade"
                    v-model="quantity"
                ></v-text-field>
                <v-btn class="green darken-3 white--text buy-btn" 
                :disabled="BtnDisabled"
                @click="buyStockLocal(quantity, stock.price)">Comprar</v-btn>
            </v-card>
        </v-card>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
        }
    },
    methods: {
        ...mapActions(['buyStock']),
        buyStockLocal(quantity, price) {
            this.buyStock({quantity, price})
        }
    },
    computed: {
        BtnDisabled: function() {
            let value = this.quantity > 0 ?  false : true
            return value
        }
    },
}
</script>

<style scoped>

    .sub-card {
        padding: 24px;
        display: flex;
        align-items: center;
    }

    .buy-btn {
        margin-left: 24px;
    }

</style>