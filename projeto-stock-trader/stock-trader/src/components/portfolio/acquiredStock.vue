<template>
  <v-card v-if="stock.quantity > 0" color="#fff">
            <v-card tile class="blue darken-3 white--text">
                <v-card-title>
                    <span class="title font-weight-light">
                        {{ stock.name }} (Preço: {{ stock.price | formatBalance}} |
                        Qtde: {{ stock.quantity }} )
                    </span>
                </v-card-title>
            </v-card>
            <v-card tile class="sub-card">
                <v-text-field
                    type="number"
                    label="Quantidade"
                    v-model.number="quantity"
                ></v-text-field>
                <v-btn class="blue darken-3 white--text buy-btn" 
                :disabled="BtnDisabled"
                @click="sellStock(stock.price, quantity)">Vender</v-btn>
            </v-card>
        </v-card>
</template>

<script>


export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
        }
    },
    methods: {
        sellStock(soldPrice, quantity) {
            quantity = parseInt(quantity)
            let newBalance = this.$store.state.balance + (soldPrice * quantity)
            this.stock.quantity -= this.quantity

            this.quantity = 0
            this.$store.dispatch('saveData', {balance: newBalance })

        }
    },
    computed: {
        BtnDisabled: function() {
            let value = (this.quantity > 0  &&
            this.quantity <= this.stock.quantity) ?  false : true
            return value
        }
    }
    
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