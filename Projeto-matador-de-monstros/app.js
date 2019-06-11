new Vue({
	el: '#game',
	data: {
		started: false,
		win: null,
		// width1: '100',
		// width2: '100',
		vidaJogador: 100,
		vidaMonstro: 100
	},
	methods: {
		width1() { 
			return this.vidaJogador.toString() + '%'
		},
		width2() { 
			return this.vidaMonstro.toString() + '%'
		},
		giveUp(){
			this.started = false;
			this.win = false;
		},
		startGame(){
			this.started = !this.started;
			this.win = null;
			this.vidaJogador = 100;
			this.vidaMonstro = 100;
		},
		attack(){
			let valorJogador, valorMonstro = 0

			valorJogador = 18
			valorMonstro = 7

			this.vidaJogador = this.vidaJogador - valorJogador;
			this.vidaMonstro = this.vidaMonstro - valorMonstro;
		
			// this.width1 = `${this.vidaJogador}%`;
			// this.width2 = `${this.vidaMonstro}%`;
			this.checkIfPlayerIsDead();
			this.checkIfMonsterIsDead();
		},
		checkIfPlayerIsDead(){
			if(this.vidaJogador <= 0){
				// width1 = '0';
				this.win = false;
				this.started = false;
			}
		},
		checkIfMonsterIsDead(){
			if(this.vidaMonstro <=0 ){
				// width2 = '0';
				this.win = true;
				this.started = false;
			}
		}
	}
});
