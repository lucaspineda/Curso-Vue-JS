<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="add" type="text" />
        <button @click="add()">+</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add(){
            this.$emit('sendTask', this.name)
            this.name = ''
        }
    },

}
</script>

<style>

</style>
