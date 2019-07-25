<template>
	<div id="app">
		<h1>Tarefas</h1>
		<NewTask @sendTask="addTask"/>
		<TaskGrid :taskList="taskList" />
	</div>
</template>

<script>

import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'
// import EventBus from '@/eventBus'

export default {

	components: { TaskGrid, NewTask },
	data(){
		return {
			taskList: [
				{name: 'Lavar a louça', pending: true},
				{name: 'Estudar Vue', pending: false},
			]
		}
	},
	methods: {
		addTask(name) {
			console.log('caiu aquiii')
				this.taskList.push({
					name: name,
					pending: true,
				}) 
		}
	},
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
