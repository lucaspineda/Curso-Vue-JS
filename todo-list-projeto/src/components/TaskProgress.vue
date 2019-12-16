<template>
    <div class="progress-bar">
        <span> {{ progress() }} % </span>
        <div class="progress" :style="{width: progress() + '%'}"></div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number,
            required: true,
        }
    },
}
</script>

<style scoped>
.progress-bar {
    border-style: solid;
    width: 60%;
	height: 20px;
	margin-top: 10px;
    margin-bottom: 10px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.progress {
	height: 100%;
    background-color: #57b682;
    justify-content: baseline;
    margin-right: auto;
}
span {
    position: absolute;
}
</style>
