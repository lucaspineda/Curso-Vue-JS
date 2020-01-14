
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
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">Salvar & Carregar</v-btn>
                </template>
                <v-list>
                    <v-list-item @click="saveData">
                        <v-list-item-title>SALVAR DADOS</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="loadData">
                        <v-list-item-title>CARREGAR DADOS</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
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
    methods: {
        saveData() {
                this.$http.put('balance.json', this.balance)
                .then(alert(this.balance))
            },
            loadData() {

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