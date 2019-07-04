<template>
  <div id="app">{{ titulo }}
    <button @click="titulo += '#'">Alterar titulo</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: 'Teste Data usando VueJS'
    }
  }
}
</script>


<style>
  #app{
    color: red;  
  }
  
</style>