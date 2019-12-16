<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="add" type="text" />
        <button @click="add()">Adicionar</button>
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
            if(this.name === ''){
                alert('Digite uma tarefa')
            } else {
            this.$emit('sendTask', this.name)
            this.name = ''
            }
        }
    },

}
</script>

<style>

</style>
