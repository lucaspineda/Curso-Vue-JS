new Vue({
	el: '#game',
	data: {
		started: false,
		playerLife: 100,
		monsterLife: 100
	},
	methods: {
		startGame() {
			this.started = true;
			this.playerLife = 100;
			this.monsterLife = 100;
		},
		attack(special) {
			this.hurt('playerLife', 7,12, false);
			this.hurt('monsterLife', 5,10, special)
		},
		hurt(atr, min, max, especial) {
			const plus = especial ? 5 : 0;
			const hurt = this.getRandom(min + plus, max + plus);
			this[atr] = Math.max (this[atr] - hurt, 0)
		},
		getRandom(min, max){
			const random = Math.random() * (max - min) + min
			return Math.round(random)
		},
		healAndHurt(){
			this.hurt('playerLife', 0,1, false);

			this.heal(5,10)
		},
		heal(min, max){
			const heal = this.getRandom(min, max);
			this.playerLife = Math.min(this.playerLife + heal, 100)
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
