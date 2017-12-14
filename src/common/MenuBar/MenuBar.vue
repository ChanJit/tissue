<template>
  <v-tabs :scrollable="false" xs12 class="grey lighten-4">
    <v-tabs-bar color="lighten-4" class="header-container">
      <v-tabs-slider color="indigo darken-4"></v-tabs-slider>
      <v-tabs-item class="menuBar-link" to="/">
        Home
      </v-tabs-item>
      <v-tabs-item class="menuBar-link" to="/compare">
       Location Compare
      </v-tabs-item>
      <v-tabs-item href="#tab-3" v-on:click='redirectToJS'>
        Jobs
      </v-tabs-item>
    </v-tabs-bar>
  </v-tabs>
</template>

<script>
  export default {
    name: "menuBar",
    data() {
      return {}
    },
    beforeMount: function() {

    },
    methods: {
      redirectToJS: function(event) {
        window.location.href = `https://www.jobstreet.com.my/en/job-search/job-vacancy.php${this.$route.params.state ? '?key='+this.$route.params.state : ''}`;
      }
    }
  }
</script>

<style scoped>
  .menuBar-link {
    text-decoration: none;
    font-weight: 400;
  }

  .menuBar-link a:active, .menuBar-link a:hover,
  .menuBar-link a:focus, .menuBar-link a:visited{
    text-decoration: none;
  }

  .header-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media(min-width:480px) {
    .header-container {
      max-width:750px
    }
  }
  @media(min-width:768px) {
    .header-container {
      width: 750px;
      margin-right: 15px;
      margin-left: 15px;
    }
  }
  @media (min-width: 992px){
    .header-container {
      width: 970px;
    }
  }
  @media(min-width:1000px) {
    .header-container {
      max-width:1170px
    }
  }
  @media (min-width: 1210px) {
    .header-container {
      width: 1170px;
      margin-right: auto;
      margin-left: auto;
    }
  }
</style>
