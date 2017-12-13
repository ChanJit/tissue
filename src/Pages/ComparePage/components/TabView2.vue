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
                        LOCATION_1
                    </v-flex>
                    <v-flex headline xs2>
                        LOCATION_2
                    </v-flex>
                </v-layout>
                <v-layout class="mt-3" v-for="item of items" :key="item.name" row justify-space-between>
                    <v-flex title xs2 >
                        {{item.name}}
                    </v-flex>
                    <v-flex title xs4 >
                        {{item.between}}
                    </v-flex>
                    <v-flex title xs2 offset-xs0>
                        {{item.average}}
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
  props: {},
  data() {
    return {
      tab: 'tab-1',
      items: [
        {
          between: 'One-way Ticket (Local Transportation)',
          name: '2.00 - 3.00',
          average: '2.5'
        },
        {
          between: 'One-way Ticket (Local Transportation)',
          name: '2.00 - 3.00',
          average: '2.5'
        },
        {
          between: 'One-way Ticket (Local Transportation)',
          name: '2.00 - 3.00',
          average: '2.5'
        },
        {
          between: 'One-way Ticket (Local Transportation)',
          name: '2.00 - 3.00',
          average: '2.5'
        }
      ]
    }
  },
  watch: {
    tab(newValue, oldValue) {
      this.items = [
        {
          name: 'One-way Ticket (Local Transportation)',
          between: '2.00 - 3.00',
          average: '5123'
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
.tabs__item:active, .tabs__item:hover, tabs__item:focus {
    text-decoration: none;
}
</style>