<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>

				<input type="text" v-model="usuario.nome" placeholder="digite o nome">
				<input type="email" v-model="usuario.email" placeholder="digite o email">

			<hr>
			<button @click="salvar" >Salvar</button>
			<button @click="obterUsuarios">Obter Usuarios</button>


		</b-card>
		<hr>

		<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
			Nome: {{ usuario.nome }} <br>
			email: {{ usuario.email }} <br>
			id: {{ id }} <br>
			<button @click="carregar(id)"> Carregar </button>
			<button @click="excluir(id)"> Excluir </button>
		</b-list-group-item>

	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
		},
		salvar(){
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`usuarios${finalUrl}`, this.usuario). then(() => this.limpar());
			// this.$http.post('usuarios.json', this.usuario)
			// .then(() => {
			// 	this.limpar();
			// })
		},
		carregar(id){
			this.id = id;
			this.usuario = { ...this.usuarios[id] }

		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`).then( () => this.limpar())
		},

		obterUsuarios() {
			this.$http('usuarios.json')
			.then(res => this.usuarios = res.data)
		}
	},
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
