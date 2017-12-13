<template>
  <v-tabs :scrollable="false" xs12 class="header-container">
    <v-tabs-bar color="lighten-4">
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
      document.get
    },
    methods: {
      redirectToJS: function(event) {
        window.location.href = "https://www.jobstreet.com.my/en/job-search/job-vacancy.php?key=Account+Executive&location=50300&specialization=131&area=&salary=&ojs=3&src=12";
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
    margin: 0 auto;
  }

  @media(min-width:480px) {
    .header-container {
      max-width:750px
    }
  }
  @media(min-width:768px) {
    .header-container {
      max-width:992px
    }
  }
  @media(min-width:1000px) {
    .header-container {
      max-width:1170px
    }
  }
</style>
