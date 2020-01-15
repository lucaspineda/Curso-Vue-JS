<template>
  <v-card color="#fff">
            <v-card tile class="green darken-3 white--text">
                <v-card-title>
                    <span class="title font-weight-light">BMW (Preço: R$ 89.00)</span>
                </v-card-title>
            </v-card>
            <v-card tile class="sub-card">
                <v-text-field
                    type="number"
                    label="Quantidade"
                    v-model="quantity"
                ></v-text-field>
                <v-btn class="green darken-3 white--text buy-btn" :disabled="BtnDisabled">Comprar</v-btn>
            </v-card>
        </v-card>
</template>

<script>
export default {
    data() {
        return {
            quantity: 0,
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