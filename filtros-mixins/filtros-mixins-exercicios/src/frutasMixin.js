export default {
    data() {
		return {
			cpfMeu: '77269499844',
			fruta: '',
            frutas: ['banana', 'maça', 'laranja'],
		}
	},
    methods: {
        add(){
            this.frutas.push(this.fruta);
            this.fruta = ''
        }
    },
}