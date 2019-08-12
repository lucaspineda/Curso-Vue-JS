<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>

				<input type="text" v-model="usuarios.nome" placeholder="digite o nome">


				<input type="email" v-model="usuarios.email" placeholder="digite o email">

			<hr>
			<button @click="salvar">Salvar</button>
		</b-card>

	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		salvar(){
			this.$http.post('usuarios.json', this.usuarios)
			.then(() => {
				this.usuarios.nome = '',
				this.usuarios.email = ''
			})
		},
	}
		// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Maria',
	// 		email: 'maria@hotmail.com'
	// 	})
	// 	.then(res => console.log(res))
	// },
}

</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
