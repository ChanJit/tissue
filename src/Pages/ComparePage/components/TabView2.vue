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
                    <v-flex headline xs2>
                        {{location1}}
                    </v-flex>
                    <v-flex headline xs2>
                        {{location2}}
                    </v-flex>
                </v-layout>
                <v-layout class="mt-3" v-for="item of items" :key="item.name" row justify-space-between>
                    <v-flex title xs2 >
                        {{item.a.price}}
                    </v-flex>
                    <v-flex title xs4 >
                        {{item.a.text}}
                    </v-flex>
                    <v-flex title xs2 offset-xs0>
                        {{item.b.price}}
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
  name: 'TabView2',
  props: {
    data1: {
      type: Object
    },
    data2: {
      type: Object
    },
    location1: {
      type: String
    },
    location2: {type: String}
  },
  data() {
    return {
      tab: 'tab-1',
      items: []
    }
  },
  watch: {
    data1(newValue) {
      let object = {
        1: 'Transportation',
        2: ['Buy Apartment Price', 'Rent Per Month', 'Utilities (Monthly)'],
        3: 'Restaurants',
        4: 'Sports And Leisure'
      }
      let a = newValue
      let b = this.data2
      let c = []

      let i = object[this.tab[this.tab.length - 1]]
      for (let u in a[i]) {
        let x = {}
        c.push({a: a[i][u], b: b[i][u]})
      }
      this.items = c
    },
    data2(newValue) {
      let object = {
        1: 'Transportation',
        2: ['Buy Apartment Price', 'Rent Per Month', 'Utilities (Monthly)'],
        3: 'Restaurants',
        4: 'Sports And Leisure'
      }
      let a = this.data1
      let b = newValue
      let c = []
      let i = object[this.tab[this.tab.length - 1]]
      for (let u in a[i]) {
        let x = {}
        c.push({a: a[i][u], b: b[i][u]})
      }
      this.items = c
    },
    tab(newValue, oldValue) {
      let object = {
        1: 'Transportation',
        2: ['Buy Apartment Price', 'Rent Per Month', 'Utilities (Monthly)'],
        3: 'Restaurants',
        4: 'Sports And Leisure'
      }
      let a = this.data1
      let b = this.data2
      let c = []
      let i = object[newValue[newValue.length - 1]]
      console.log(i)

      if (Array.isArray(i)) {
        let x = [],
          z = []
        console.log('asd')
        for (let j of i) {
          for (let u in a[j]) {
            x.push(a[j][u])
            z.push(b[j][u])
            c.push({a: a[j][u], b: b[j][u]})
          }
        }
      } else {
        for (let u in a[i]) {
          c.push({a: a[i][u], b: b[i][u]})
        }
      }
      this.items = c
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