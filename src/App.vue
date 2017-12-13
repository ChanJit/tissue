<template>
  <v-app id="locations">
  <div id="app">
    <sample-header />
    <MenuBar ></MenuBar>
    <router-view />
    <sample-footer />
  </div>
  </v-app>
</template>

<script>
import SampleHeader from './common/Header/Header';
import SampleFooter from './common/Footer/Footer';
import MenuBar from './common/MenuBar/MenuBar';

export default {
  components: {
    SampleFooter,
    SampleHeader,
    MenuBar
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
