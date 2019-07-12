<template>
    <div>
        <h1>Vai pegar a borda também</h1>
        <app-contador v-for="c in 5" :key="c" />
        <hr>
    </div>
</template>

<script>
import Contador from  './Contador'

export default {
    components: {
        'app-contador': Contador
    }
}
</script>

<style scoped>

div {
    border: 1px solid red;
}

</style>
