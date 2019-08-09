<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpfMeu | cpf | inverter}}</p>
		<input type="text" :value="cpfMeu | cpf | inverter">
		<hr>
		<Frutas />
		<hr>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta"> {{ fruta }}</li>
			</ul>
			<input type="text" @keydown.enter="add" v-model="fruta">
    	</div>
	</div>
</template>

<script>
import Frutas from './Frutas'
import MixinFrutas from './frutasMixin'


export default {
	components: {
		Frutas,
	},
	mixins: [MixinFrutas],
	filters: {
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(6,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpfMeu: '77269499844',
		}
	},
    methods: {

    },

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
