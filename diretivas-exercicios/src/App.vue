<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'usando v-text'"></p>
		<hr>
		<p v-destaque="cor">criando diretiva personalizada</p>
		<hr>
		<p v-destaque:fundo="'lightblue'">criando diretiva personalizada</p> 
	</div>
</template>

<script>
export default {
	data() {
		return {
			cor: 'red'
		}
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
