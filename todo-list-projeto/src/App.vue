<template>
	<div id="app">
		<h1>Tarefas</h1>
		<NewTask @sendTask="addTask"/>
		<TaskProgress :progress="progress" />
		<TaskGrid :taskList="taskList" />
	</div>
</template>

<script>

import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'
import TaskProgress from './components/TaskProgress.vue'
import EventBus from '@/eventBus'

export default {

	components: { TaskGrid, NewTask, TaskProgress },
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
			var duplicatedWords = this.taskList.filter(task => task.name === name)
			if(duplicatedWords.length == 0) {
				this.taskList.push({
					name: name,
					pending: true,
				})
			} 
		},
		progress(){
			var doneTasks = this.taskList.filter(task => task.pending === false)
			var totalPercentage = (doneTasks.length / this.taskList.length * 100) || 0
			return totalPercentage;
		}
	},
	watch: {
		taskList: {
			deep: true,
			handler(){
				localStorage.setItem('taskList', JSON.stringify(this.taskList))
			}
		}
	},
	created() {

		EventBus.receiveDeletedTask( name => {
			const position = this.taskList.map(task => task.name).indexOf(name)
			this.taskList.splice(position, 1)
		})

		const json = localStorage.getItem('taskList')
		this.taskList = JSON.parse(json) || []
		
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
