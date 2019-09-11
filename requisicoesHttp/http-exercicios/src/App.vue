<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>

				<input type="text" v-model="usuarios.nome" placeholder="digite o nome">


				<input type="email" v-model="usuarios.email" placeholder="digite o email">

			<hr>
			<button @click="salvar" >Salvar</button>
			<button @click="obterUsuarios">Obter Usuarios</button>


		</b-card>
		<hr>

		<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">

			Nome: {{ usuario.nome }} <br>
			email: {{ usuario.email }} <br>
			id: {{ id }} <br>


		</b-list-group-item>

	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		teste() {
			console.log(this.usuarios)
		},
		salvar(){
			this.$http.post('usuarios.json', this.usuarios)
			.then(() => {
				this.usuarios.nome = '',
				this.usuarios.email = ''
			})
		},

		obterUsuarios() {
			this.$http('usuarios.json')
			.then(res => this.usuarios = res.data)
		}
	},
	// 	created() {
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
