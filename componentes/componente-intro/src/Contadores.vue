<template>
    <div>
        <app-contador />
        <app-contador />
        <app-contador />
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

<style>

</style>
