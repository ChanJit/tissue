<template>
    <div>
        <Search />
        <InfoContainer header="Having better understanding about the daily cost such as" :items="items" footer="before moving to that area"/>
        <carouselContainer header="Discover the enviromentand culture around the area" :items="secondaryItems" footer=""/>
    </div>
</template>

<script>
import InfoContainer from './components/InfoContainer'
import carouselContainer from './components/carouselContainer'
import Search from './components/Search'

export default {
  name: 'LandingPage',
  components: {
    InfoContainer,
    carouselContainer,
    Search
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
      ],
      secondaryItems: [
        {
          name: 'Traffic Index',
          imgSrc: require('../../assets/medical.jpg'),
          route: '/traffic'
        },
        {
          name: 'Pollution Index',
          imgSrc: require('../../assets/medical.jpg'),
          route: '/pollution'
        },
        {
          name: 'Culture',
          imgSrc: require('../../assets/medical.jpg'),
          route: '/culture'
        },
        {
          name: 'Currency Index',
          imgSrc: require('../../assets/medical.jpg'),
          route: '/currency'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
