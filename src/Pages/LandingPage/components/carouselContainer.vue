<template>
  <div class="container extraTopMargin">
    <h2>{{header}}</h2>
    <v-carousel hide-delimiters class="banner extraTopMargin">
      <v-carousel-item
        v-for="(item,i) in items"
        v-bind:src="item.imgSrc"
        :key="i"
        transition="fade"
        reverseTransition="fade"
      >
        <v-flex>{{item.name}}</v-flex>
      </v-carousel-item>
    </v-carousel>
    <h2>{{footer}}</h2>
  </div>
</template>

<script>
  import Router from '../../../router'
  export default {
    name: 'carouselContainer',
    methods: {
      goRoute: item => {
        Router.push(item.route)
      }
    },
    props: {
      items: {
        type: Array
      },
      header: {
        type: String
      },
      footer: {
        type: String
      }
    },
    data () {
      return {
        msg: 'Having better understanding about the daily cost such as'
      }
    }
  }
</script>

<style scoped>
  .container * {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 100%;
    background-color: white;
    padding: 16px 32px;
  }
  .extraTopMargin {
    margin-top: 16px;
  }
  .banner {
    height: 200px
  }
</style>
