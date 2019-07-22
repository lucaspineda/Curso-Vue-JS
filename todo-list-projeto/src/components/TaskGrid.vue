<template>
    <div class="taskList">
        <div v-for="task in taskList" :key="task.name">{{ task.name }}</div>
    </div>
</template>

<script>

export default {
    props: {
        taskList: {
            type: Array,
            required:true,
        }
    }

}
</script>

<style>

</style>
