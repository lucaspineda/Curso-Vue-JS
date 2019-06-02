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
		ativar: true,
		width: '0',

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
		setRed(event){
			if(event.target.value == 'true'){
				this.ativar = true
			}else if(event.target.value == 'false'){
				this.ativar = false
			}

		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() =>{
			valor ++;
			this.width = `${valor}%`
			if(valor === 100){
				clearInterval(temporizador)
			}
		}
			, 100)
			
		}
	},
	computed: {
	}
})
