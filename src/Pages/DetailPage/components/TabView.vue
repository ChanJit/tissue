<template>
  <v-tabs v-model="tab" :scrollable="false" icons centered>
    <v-tabs-bar dark color="indigo darken-3">
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tabs-item href="#tab-1">
        <v-icon>train</v-icon>
        Transport
      </v-tabs-item>
      <v-tabs-item href="#tab-2">
        <v-icon>home</v-icon>
        Property
      </v-tabs-item>
      <v-tabs-item href="#tab-3">
        <v-icon>restaurant</v-icon>
        Food
      </v-tabs-item>
      <v-tabs-item href="#tab-4">
        <v-icon>movie</v-icon>
        Entertainment
      </v-tabs-item>
     
    </v-tabs-bar>
    <v-tabs-items v-model="tab">
      <v-tabs-content
        v-for="i in 4"
        :key="i"
        :id="'tab-' + i"
      > 
        <v-card flat>
            <div class="container">
                <v-layout row justify-space-between>
                    <v-flex headline xs3 offset-xs5>
                        Between ({{currency}})
                    </v-flex>
                    <v-flex headline xs3>
                        Average cost ({{currency}})
                    </v-flex>
                </v-layout>
                <v-layout class="mt-3" v-for="item of items" :key="item.name" row justify-space-between>
                    <v-flex title xs4 >
                        {{item.text}}
                    </v-flex>
                    <v-flex title xs3 >
                        {{item.range}}
                    </v-flex>
                    <v-flex title xs3 offset-xs0>
                        {{item.price}}
                    </v-flex>
                </v-layout>
            </div>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
export default {
  name: 'TabView',
  props: {
    data: {
      type: Object
    },
    currency: {
      type: String
    }
  },
  data() {
    return {
      tab: 'tab-1',
      text: '',
      headers: [
        {
          text: '',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {text: 'Between', value: 'between', sortable: false},
        {text: 'Average cost', value: 'average', sortable: false}
      ],
      items: [
        {
          name: 'One-way Ticket (Local Transportation)',
          between: '2.00 - 3.00',
          average: '2.5'
        },
        {
          name: 'One-way Ticket (Local Transportation)',
          between: '2.00 - 3.00',
          average: '2.5'
        },
        {
          name: 'One-way Ticket (Local Transportation)',
          between: '2.00 - 3.00',
          average: '2.5'
        },
        {
          name: 'One-way Ticket (Local Transportation)',
          between: '2.00 - 3.00',
          average: '2.5'
        }
      ]
    }
  },
  mounted() {},
  watch: {
    data() {
      this.items = this.data['Transportation']
    },
    tab(newValue, oldValue) {
      let object = {
        1: 'Transportation',
        2: ['Buy Apartment Price', 'Rent Per Month', 'Utilities (Monthly)'],
        3: 'Restaurants',
        4: 'Sports And Leisure'
      }
      let arr = []
      let index = newValue[newValue.length - 1]
      let item = object[index]
      if (Array.isArray(item)) {
        for (let u of item) {
          arr.push(...this.data[u])
        }
      } else {
        arr = this.data[item]
      }

      this.items = arr
      // this.items = [
      //   {
      //     name: 'One-way Ticket (Local Transportation)',
      //     between: '2.00 - 3.00',
      //     average: '5'
      //   },
      //   {
      //     name: 'One-way Ticket (Local Transportation)',
      //     between: '2.00 - 3.00',
      //     average: '2.5'
      //   },
      //   {
      //     name: 'One-way Ticket (Local Transportation)',
      //     between: '2.00 - 3.00',
      //     average: '2.5'
      //   },
      //   {
      //     name: 'One-way Ticket (Local Transportation)',
      //     between: '2.00 - 3.00',
      //     average: '2.5'
      //   }
      // ]
    }
  }
}
/*
Example
<Chart :data="[1,2,3,4,5]" :labels="['a','b','c','d','e']"/>
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tabs__wrapper {
  overflow-x: initial;
}
.table caption + thead tr:first-child th,
.table colgroup + thead tr:first-child th,
.table thead:first-child tr:first-child th,
.table caption + thead tr:first-child td,
.table colgroup + thead tr:first-child td,
.table thead:first-child tr:first-child td {
  text-align: center !important;
  font-size: 18px;
  font-weight: 600;
}
.application .theme--dark.tabs__bar .tabs__li:hover {
  text-decoration: none !important;
}
</style>
<style scoped>
.tabs__item:active,
.tabs__item:hover,
tabs__item:focus {
  text-decoration: none;
}
</style>