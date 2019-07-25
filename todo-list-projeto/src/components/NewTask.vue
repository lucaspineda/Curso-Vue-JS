<template>
    <div class="new-task">
        <input v-model="name" type="text" />
        <button @click="add()">+</button>
    </div>
</template>

<script>
// import EventBus from '@/eventBus'

export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add(){
            // EventBus.sendTask(this.task)
            this.$emit('sendTask', this.name)
            // this.task.name = ''
        }
    },

}
</script>

<style>

</style>
