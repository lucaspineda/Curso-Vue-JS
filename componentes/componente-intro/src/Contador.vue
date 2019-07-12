<template>
<div class="app">
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="adicionar">+</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++
        },
        subtrair() {
            this.contador--
        }
    }
}
</script>

<style scoped>

span {
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
}
/* seletor gerado pelo Vue em hash para gerar o estilo apenas para este componete */
button[data-v-6cbbf471] {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
}
</style>
