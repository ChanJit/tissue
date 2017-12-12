<template>
  <v-container>
    <v-layout md2>
      <v-flex>
        <HorizontalBarChart :data="[1,2,3,4,5]" :labels="['a','b','c','d','e']"/>
      </v-flex>
      <v-flex>
        <CostDetails :items="costDetailData"></CostDetails>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HorizontalBarChart from './components/HorizontalBarChart'
import CostDetails from './components/CostDetails'

export default {
  name: 'DetailPage',
  components: {
    HorizontalBarChart,
    CostDetails
  },
  data () {
    return {
      costDetailData: [
        {
          title: 'Transport',
          price: 100
        },
        {
          title: 'Food',
          price: 300
        },
        {
          title: 'Healthcare',
          price: 250
        },
        {
          title: 'Property',
          price: 120
        },
        {
          title: 'Entertainment',
          price: 100
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
