<template>
	<v-app>
		<app-menu></app-menu>
		<app-header />
		<app-carousel />
		<app-footer />
	</v-app>
</template>

<script>
// importanto no escopo de componente
import Header from './components/template/Header.vue'
import Menu from './components/template/Menu.vue'
import Carousel from './components/widgets/Carousel.vue'
import Footer from './components/template/Footer.vue'

export default {
	components: {
		'app-header': Header,
		'app-menu': Menu,
		'app-carousel': Carousel,
		'app-footer': Footer
	}

}
</script>
