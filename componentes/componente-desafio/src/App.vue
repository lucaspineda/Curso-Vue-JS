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
import Header from './Header.vue'

export default {
	components: {
		'app-header': Header
	}

}
</script>
