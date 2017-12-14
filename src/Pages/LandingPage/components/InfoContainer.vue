<template>
  <div class="container extraTopMargin">
    <h2>{{header}}</h2>
    <v-container fluid grid-list-md class="extraTopMargin">
      <v-layout wrap class="spaceAround">
        <v-flex d-flex xs12 md2 v-for="(item) in items" :key="item.name">
          <v-flex v-on:click="goRoute(item)" class="imageItem">
            <div class="circleImg" v-bind:style="{ 'background-image': 'url(' + item.imgSrc + ')' }"></div>
            <v-flex>{{item.name}}</v-flex>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
    <h2>{{footer}}</h2>
  </div>
</template>

<script>
import Router from '../../../router'
export default {
  name: 'InfoContainer',
  methods: {
    goRoute: item => {
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
  .container * {
    padding: 0;
    margin: 0;
  }
.container {
  width: 100%;
  background-color: white;
  padding: 16px 32px;
}
.circleImg {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 8px solid #2d3092;
  margin-bottom: 1em;
}
.imageItem {
  color: #2c3093;
  font-size: 21px;
}
h2 {
  color: #5f5e5f;
}
  .extraTopMargin {
    margin-top: 16px;
  }

  .spaceAround {
    justify-content: space-between;
    padding: 0;
  }

</style>
