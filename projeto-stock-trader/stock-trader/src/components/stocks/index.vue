<template>
    <v-card color="#fff" max-width="400">
        <v-card tile class="green darken-3 white--text">
            <v-card-title>
                <span class="title font-weight-light">BMW (Preço: R$ 89.00)</span>
            </v-card-title>
        </v-card>
        <v-card class="sub-card">
            <v-text-field
                type="number"
                label="Quantidade"
                v-model="quantity"
            ></v-text-field>
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

}
</script>

<style scoped>
.sub-card {
    padding: 24px;
}

</style>