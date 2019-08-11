<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<input v-model="texto" type="text">
		<p> {{ texto | espacoPorPonto }} </p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<p> {{ texto | contarLetras }} </p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 2 com propriedade computada -->

		<p> {{ espacoPorPontoComputed }} </p>


		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import mixin from './mixin'

export default {
	mixins: [mixin],
	data() {
		return {
			texto: ''
		}
	},
	filters: {
		espacoPorPonto(valor){
			return valor.replace(/ /g, '.')
		}
	},
	computed: {
		// espacoPorPontoComputed(){
		// 	return this.texto.replace(/ /g, '.')
		// }
		// método adicionado no mixin
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
