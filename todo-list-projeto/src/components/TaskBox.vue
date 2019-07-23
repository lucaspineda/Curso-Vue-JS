<template>
    <div class="box pending" :class="{done: task.pending}">
        {{ task.name }}
    </div>
</template>

<script>
// import TaskGrid from './TaskGrid'

export default {
    props: {
        task: {
            type: Object,
            required:true,
        }
    }
}
</script>

<style>

.box {
    width: 350px;
    height: 150px;
    background-color: #c54a4a;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.done {
    background-color: #57b682;
    text-decoration: line-through;
}

</style>
