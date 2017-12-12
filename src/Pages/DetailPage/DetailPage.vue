<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <TabView/>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-layout row wrap>
            <v-flex xs12 md7>
              <PieChart :data="[1,2,3,4,5]" :labels="['a','b','c','d','e']"/>
            </v-flex>
            <v-flex xs12 md5>
              <CostDetails :items="costDetailData"></CostDetails>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PieChart from './components/PieChart'
import CostDetails from './components/CostDetails'
import TabView from './components/TabView'

export default {
  name: 'DetailPage',
  components: {
    PieChart,
    CostDetails,
    TabView
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
