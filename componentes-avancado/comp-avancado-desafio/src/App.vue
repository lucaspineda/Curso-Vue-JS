<template>
	<div id="app">
		<span>
			<button @click="componente = 'vermelho'" class="vermelho">Carregar Componente Vermelho</button>
			<button @click="componente = 'verde'" class="verde">Carregar Componente Verde</button>
			<button @click="componente = 'azul'" class="azul">Carregar Componente Azul</button>
		</span>
		<component :is="componente">
			<p slot="conteudo"> Conteúdo do componente: <strong> {{ componente }} </strong></p>
		</component>
	</div>
</template>

<script>
import Vermelho from './components/Vermelho.vue'
import Verde from './components/Verde.vue'
import Azul from './components/Azul.vue'

export default {
	name: 'app',
	components: { Vermelho, Verde, Azul },
	data() {
		return {
			componente: 'Vermelho',
		}
	}
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
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
	}

    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }

	.vermelho {
        border: 2px solid red;
        background-color: #f54235;
    }

	.verde {
        border: 2px solid green;
        background-color: #49b057;
    }

	.azul {
        border: 2px solid blue;
        background-color: #2594f0;
    }
</style>
