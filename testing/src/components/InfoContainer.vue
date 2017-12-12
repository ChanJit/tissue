<template>
  <div class="container">
    <h2>{{header}}</h2>
    <div class="flexContainer">
      <div v-on:click="goRoute(item)" class="imageItem" v-for="(item) in items" :key="item.name">
        <img class="circleImg" :src="item.imgSrc" />
        <div>{{item.name}}</div>
      </div>
    </div>
    <h2>{{footer}}</h2>
  </div>
</template>

<script>
import Router from '../router'
export default {
  name: 'InfoContainer',
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
  data() {
    return {
      msg: 'Having better understanding about the daily cost such as'
    }
  }
}
/* sample data
  <InfoContainer header="Having better understanding about the daily cost such as" :items="item1" footer="before moving to that area"/>
 [
  {
    name: 'Transport',
    imgSrc: require('../assets/bus.jpg'),
    route: '/transport'
  },
  {
    name: 'Property',
    imgSrc: require('../assets/property.jpg'),
    route: '/property'
  },
  {
    name: 'Food',
    imgSrc: require('../assets/food.jpg'),
    route: '/food'
  },
  {
    name: 'Entertainment',
    imgSrc: require('../assets/dancing.jpg'),
    route: '/entertainment'
  },
  {
    name: 'Healthcare',
    imgSrc: require('../assets/medical.jpg'),
    route: '/healthcare'
  }
]
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: calc(100% - 64px);
  background-color: white;
  padding: 16px 32px;
}
.flexContainer {
  display: flex;
  justify-content: center;
}
.circleImg {
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-radius: 50%;
  border: 8px solid #2d3092;
  margin-bottom: 1em;
}
.imageItem {
  color: #2c3093;
  font-size: 21px;
  margin: 2em;
  cursor: pointer;
}
h2 {
  color: #5f5e5f;
}
</style>
