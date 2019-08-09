<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta"> {{ fruta }}</li>
        </ul>
        <input type="text" @keydown.enter="add" v-model="fruta">
    </div>
    
</template>

<script>

import FrutasMixins from './frutasMixin'
export default {
    mixins: [FrutasMixins]
}
</script>

<style>

</style>
