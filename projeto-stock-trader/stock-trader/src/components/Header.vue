
<template>
    <v-toolbar>
        <v-toolbar-title>
            <span>STOCK</span>
            <span>TRADER</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn text to="/">INÍCIO</v-btn>         
            <v-btn text to="/portfolio">PORTFÓLIO</v-btn>
            <v-btn text to="/stocks">AÇÕES</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text>FINALIZAR DIA</v-btn>
            <v-btn text>SALVAR E CARREGAR</v-btn>
            <span class="balance">SALDO: {{ balance | formatBalance }}</span>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>

// import axios from 'axios'

export default {
    data() {
        return {
            
        }
    },
    created() {
        // axios.get('https://projeto-stock-trader.firebaseio.com/')
        // .then(() =>{
        //     alert('alo')
        // })

        // axios.post('https://projeto-stock-trader.firebaseio.com/usuarios.json', {
        //     nome: 'Maria'
        // }).then(() => {
        //     alert('teste')
        // })

        // axios.get('https://projeto-stock-trader.firebaseio.com/usuarios.json').then(() => {
        //     alert('testee')
        // })
    },
    computed: {
        balance() {
            return this.$store.state.balance;
        }
    },
    // filters: {
    //     formatBalance(balance) {
    //         return '$' + (Math.round(balance * 100) / 100).toFixed(2);
    //     }
    // },

}
</script>

<style scoped>

    .balance {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    
</style>