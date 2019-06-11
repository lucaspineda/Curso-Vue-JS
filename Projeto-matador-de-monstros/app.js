new Vue({
	el: '#game',
	data: {
		started: false,
		win: null,
		vidaJogador: 100,
		vidaMonstro: 100
	},
	methods: {
		vidaJogadorEmPorc() { 
			return this.vidaJogador.toString() + '%'
		},
		vidaMonstroEmPorc() { 
			return this.vidaMonstro.toString() + '%'
		},
		giveUp(){
			this.started = false;
			this.win = false;
			this.vidaJogador = 0;
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
			this.checkIfPlayerIsDead();
			this.checkIfMonsterIsDead();
		},
		specialAttack(){
			let valorJogador, valorMonstro = 0

			valorJogador = 7
			valorMonstro = 18

			this.vidaJogador = this.vidaJogador - valorJogador;
			this.vidaMonstro = this.vidaMonstro - valorMonstro;
			this.checkIfPlayerIsDead();
			this.checkIfMonsterIsDead();
		},
		checkIfPlayerIsDead(){
			if(this.vidaJogador <= 0){
				this.win = false;
				this.started = false;
				this.vidaJogador = 0;
			}
		},
		checkIfMonsterIsDead(){
			if(this.vidaMonstro <=0 ){
				this.win = true;
				this.started = false;
				this.vidaMonstro = 0;
			}
		}
	}
});
