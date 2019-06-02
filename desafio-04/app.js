new Vue({
	el: '#desafio',
	data: {
		destaque: false,
		encolhe: false,
		bege: 'bege',
		bordar: 'bordar',
		classeDinamica: '',
		classeDinamica2: '',
		estiloDinamico: '',
		ativar: false,
		progresso: 20
	},
	methods: {
		iniciarEfeito() {
			if(this.destaque === false && this.encolhe === false){
				this.destaque = true;
			}
			setInterval(() => {
				this.destaque = !this.destaque
				this.encolhe = !this.encolhe
			} , 5000)

		},
		iniciarProgresso() {
			setInterval(() => this.progresso++, 100)	
		}
	},
	computed: {
	}
})
