<template>
    <InfoContainer header="Having better understanding about the daily cost such as" :items="items" footer="before moving to that area"/>
</template>

<script>
import InfoContainer from './components/InfoContainer'
export default {
  name: 'LandingPage',
  components: {
    InfoContainer
  },
  data() {
    return {
      items: [
        {
          name: 'Transport',
          imgSrc: require('../../assets/bus.jpg'),
          route: '/transport'
        },
        {
          name: 'Property',
          imgSrc: require('../../assets/property.jpg'),
          route: '/property'
        },
        {
          name: 'Food',
          imgSrc: require('../../assets/food.jpg'),
          route: '/food'
        },
        {
          name: 'Entertainment',
          imgSrc: require('../../assets/dancing.jpg'),
          route: '/entertainment'
        },
        {
          name: 'Healthcare',
          imgSrc: require('../../assets/medical.jpg'),
          route: '/healthcare'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
