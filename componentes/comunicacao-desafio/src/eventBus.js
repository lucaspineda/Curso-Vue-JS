import Vue from 'vue'
export default new Vue ({
    methods: {
        sendUser(usuario){
            this.$emit('userGot', usuario)
        },
        onUserSent(callback){
            this.$on('userGot', callback)
        }
    }
})