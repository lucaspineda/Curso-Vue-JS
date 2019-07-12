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

<style>

</style>
