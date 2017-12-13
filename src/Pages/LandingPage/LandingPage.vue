<template>
    <v-layout row wrap class="extraTopMargin">
      <v-flex>
        <Search />
        <InfoContainer header="Having better understanding about the daily cost such as" :items="items" footer="before moving to that area"/>
        <InfoContainer header="Discover the enviromentand culture around the area" :items="secondaryItems" footer=""/>
      </v-flex>
    </v-layout>
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
          imgSrc: require('../../assets/traffic.jpg'),
          route: '/traffic'
        },
        {
          name: 'Pollution Index',
          imgSrc: require('../../assets/pollution.jpg'),
          route: '/pollution'
        },
        {
          name: 'Culture',
          imgSrc: require('../../assets/culture.jpg'),
          route: '/culture'
        },
        {
          name: 'Currency Index',
          imgSrc: require('../../assets/currency.jpg'),
          route: '/currency'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .extraTopMargin {
    margin-top: 18px;
  }
</style>
