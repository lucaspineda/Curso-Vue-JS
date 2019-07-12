<template>
<div class="app">
    <h1>Contadores:</h1>
    <app-contadores v-for="c in 5" :key="c" />
    <button>?</button>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
