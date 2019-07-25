import Vue from 'vue'

export default new Vue({
    methods: {
        sendTask(task){
            this.$emit('sendTask', task)
        },
        receiveTask(callback){
            this.$on('sendTask', callback)
        }
    },
})