<template>
    <div class="box pending" :class="{done: !task.pending}" @click="changePending">
        {{ task.name }}
        <span class="close" @click="deleteTask">x</span>
    </div>
</template>

<script>
import EventBus from '@/eventBus'

export default {
    props: {
        task: {
            type: Object,
            required:true,
        }
    },
    methods: {
        deleteTask(){
            EventBus.sendDeletedTask(this.task.name);
        },
        changePending(){
            this.task.pending = !this.task.pending
        }
    },
}
</script>

<style>

.box {
    position: relative;
    width: 350px;
    height: 150px;
    background-color: #c54a4a;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.done {
    background-color: #57b682;
    text-decoration: line-through;
}
.close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    background-color: rgb(112,101,101, 0.25);
    display: flex;
    justify-content: center;
    cursor: pointer;
}
</style>
