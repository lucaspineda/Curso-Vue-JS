
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
            <v-btn @click="endDay" text>FINALIZAR DIA</v-btn>
            <v-btn @click="resetSimulation" text>ZERAR SIMULAÇÃO</v-btn>
            <span class="balance">SALDO: {{ allData.balance | formatBalance }}</span>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>

// import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
        }
    },
    created() {

        // this.$store.dispatch('saveData', {})
        this.loadDataLocal()

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
        allData() {
            return {
                balance: this.$store.state.balance,
                stocks: this.$store.state.stocks.stocks,
                portfolio: []
            }
        },
    },
    methods: {
        ...mapActions(['loadData']),
        
            loadDataLocal() {
                this.loadData()
            },
            endDay() {
                this.allData.stocks.forEach(stock => {
                    stock.price += this.getRandom(-5, 5)
                });

                this.$store.dispatch('saveData', {stocks: this.allData.stocks})
            },
            getRandom(min, max){
                const random = Math.random() * (max - min) + min
                return Math.round(random)
            },
            resetSimulation() {
                this.$store.dispatch('saveData', {balance: 1000})
            }
    },
}
</script>

<style scoped>

    .balance {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    
</style>