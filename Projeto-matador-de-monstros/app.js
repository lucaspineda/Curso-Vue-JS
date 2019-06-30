new Vue({
	el: '#game',
	data: {
		started: false,
		playerLife: 100,
		monsterLife: 100,
		logs: []
	},
	methods: {
		startGame() {
			this.started = true;
			this.playerLife = 100;
			this.monsterLife = 100;
			this.logs = [];
		},
		attack(special) {
			this.hurt('playerLife', 7,12, false, 'Monstro', 'Jogador', 'monster');
			this.hurt('monsterLife', 5,10, special, 'Jogador', 'Monstro', 'player')
		},
		hurt(atr, min, max, especial, source, target, cls) {
			const plus = especial ? 5 : 0;
			const hurt = this.getRandom(min + plus, max + plus);
			this[atr] = Math.max (this[atr] - hurt, 0)
			this.registrarLogs(`${source} atingiu ${target} com ${hurt}`, cls);
		},
		getRandom(min, max){
			const random = Math.random() * (max - min) + min
			return Math.round(random)
		},
		healAndHurt(){
			this.hurt('playerLife', 5,10, false, 'Monstro', 'Jogador', 'monster');
			this.heal(5,12)
		},
		heal(min, max){
			const heal = this.getRandom(min, max);
			this.playerLife = Math.min(this.playerLife + heal, 100)
			this.registrarLogs(`Jogador ganhou ${heal} de vida`, 'player')
		},
		registrarLogs(text, cls){
			this.logs.unshift( {text, cls} )
		}
	},
	computed: {
		hasResult(){
			return this.playerLife == 0 || this.monsterLife == 0
		}
	},
	watch: {
		hasResult(value) {
			if(value) this.started = false
		}
	}
});