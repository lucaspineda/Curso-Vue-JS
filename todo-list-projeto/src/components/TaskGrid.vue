<template>
    <div v-if="taskList.length" class="taskList" >
        <!-- o nome da variavel após os dois pontos (:) irá determinar o nome que deve ser usado no outro componente -->
        <TaskBox v-for="taske in taskList" :key="taske.name" :task="taske"/>
    </div>
    
    <div class="no-box" v-else>Não há tarefas cadastradas</div>
</template>

<script>

import TaskBox from './TaskBox'

export default {
    components:{ TaskBox },
    props: {
        taskList: {
            type: Array,
            required:true,
        }
    },
    // methods: {
    //     teste(){
    //         console.log(this.taskList)
    //     }
    // },
    // created() {
    //     console.log(this.taskList)
    // },

}
</script>

<style>
.no-box {
    margin-top: 20px;
}

.taskList {
    display: flex;
    flex-wrap: wrap;
    /* max-width: 80%; */
    justify-content: center;
}
</style>
