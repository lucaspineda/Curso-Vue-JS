<template>
  <v-app>
    <div id="app">
      <Header />
      <div class="box-screen">
        <router-view></router-view>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
