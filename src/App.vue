<template>
  <div id="app">
    <sample-header />
    <router-view />
    <sample-footer />
  </div>
</template>

<script>
import SampleHeader from "./common/Header/Header";
import SampleFooter from "./common/Footer/Footer";

export default {
  components: {
    SampleFooter,
    SampleHeader},
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
