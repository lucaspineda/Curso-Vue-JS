import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contarLetras', function(valor){
	var palavras = valor.split(' ')
	var palavrasContadas = palavras.map(palavra => {
		return `${palavra} ${palavra.length} `
	})
	return palavrasContadas.join('')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
