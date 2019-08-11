export default {
    computed: {
        espacoPorPontoComputed(){
            return this.texto.replace(/ /g, '.')
        }
    }
}
