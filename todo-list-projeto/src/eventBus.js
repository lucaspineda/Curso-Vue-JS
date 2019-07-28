import Vue from 'vue'

export default new Vue({
    methods: {
        sendDeletedTask(taskName){
            this.$emit('deletedTask', taskName)
        },
        receiveDeletedTask(callback){
            this.$on('deletedTask', callback)
        }
    },
})