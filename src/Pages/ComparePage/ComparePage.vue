<template>
    <div>
        <div class="extraTopMargin">
            <Search @selectedLocation1="getLocation1" @selectedLocation2="getLocation2"/>
        </div>
        <v-layout wrap>
          <div v-show=selectedLocation1 class="location">
              <DetailsTopImage :qwe="selectedLocation1" :locale="locale1" :float="'right'"/>

          </div>
          <div v-show=selectedLocation2 class="location">
              <DetailsTopImage :locale="locale2" :float="'right'"/>
          </div>
        </v-layout>
        <v-container v-show=selectedLocation2 grid-list-md text-xs-center icons>
          <v-layout row wrap class="layoutWrapper">
            <v-flex lg3 md12 id="estimationTitle">
              <span class="containerTitle"> Living Expenses Estimation </span>
            </v-flex>
              <v-flex lg4 md12 xs12 class="optionsColumn">
                  <div class="optionsRow">
                      <v-icon class="icon-color" large>date_range</v-icon>
                      <button v-for="option in dateOptions" @click="handleOptionClick(option, 'date')" :class="{ active: option.enabled, optionButton: true }">{{option.name}}</button>
                      <p class="subtitle">Time frame</p>
                  </div>
                  <div class="optionsRow mt-3">
                      <v-icon class="icon-color" large>home</v-icon>
                      <button v-for="option in homeOptions" @click="handleOptionClick(option, 'home')" :class="{ active: option.enabled, optionButton: true }">{{option.name}}</button>
                      <p class="subtitle">Accommodation expenses</p>
                  </div>
              </v-flex>
              <v-flex lg4 md12 xs12>
                  <div class="optionsRow">
                      <v-icon class="icon-color" large>drive_eta</v-icon>
                      <button v-for="option in drivingOptions" @click="handleOptionClick(option, 'drive')" :class="{ active: option.enabled, optionButton: true }">{{option.name}}</button>
                      <p class="subtitle">Transport expenses</p>
                  </div>
                  <div class="optionsRow mt-3">
                      <v-icon class="icon-color" large>face</v-icon>
                      <button v-for="option in familyOptions" @click="handleOptionClick(option, 'family')" :class="{ active: option.enabled, optionButton: true }">{{option.name}}</button>
                      <p class="subtitle">Family status</p>
                  </div>
              </v-flex>
           </v-layout>
         </v-container>
      <v-divider ></v-divider>
      <v-flex d-flex v-show=selectedLocation2 >
        <PieChart :data="getGraph1Data" :labels="getGraph1Name" class="location"></PieChart>
        <PieChart :data="getGraph2Data" :labels="getGraph2Name" class="location"></PieChart>
      </v-flex>
      <v-layout v-show=selectedLocation2 wrap>
        <cost-details :currency="currency1" :items="costDetailData1" :dateMode="selected.dateOption" class="location"></cost-details>
        <cost-details :currency="currency2" :items="costDetailData2" :dateMode="selected.dateOption" class="location"></cost-details>
      </v-layout>
      <v-layout  class="extraTopMargin" v-show=selectedLocation2 wrap>
        <TabView2 :currency1="currency1" :currency2="currency2" :location1="state1" :location2="state2" :data1="livingCost1" :data2="livingCost2" :items="getItems" />
      </v-layout>
    </div>
</template>

<script>
import Search from './components/Search'
import DetailsTopImage from './components/DetailsTopImage'
import PieChart from '../DetailPage/components/PieChart'
import CostDetails from '../DetailPage/components/CostDetails'
import TabView2 from './components/TabView2'
import * as api from '@/data/api'

export default {
  name: 'ComparePage',
  components: {
    TabView2,
    Search,
    DetailsTopImage,
    PieChart,
    CostDetails
  },
  created() {
    this.selected.dateOption = this.dateOptions.find(opt => opt.enabled == true)
    this.selected.homeOption = this.homeOptions.find(opt => opt.enabled == true)
    this.selected.drivingOption = this.drivingOptions.find(
      opt => opt.enabled == true
    )
    this.selected.familyOption = this.familyOptions.find(
      opt => opt.enabled == true
    )
  },
  computed: {
    getItems() {
      if (this.livingCost1) {
        let a = this.livingCost1
        let b = this.livingCost2
        let response = []
        let i = 'Transportation'
        let c = []
        for (let u in a[i]) {
          let x = {}
          c.push({a: a[i][u], b: b[i][u]})
        }
        return c
      }
      return []
    },
    getGraph1Data() {
      let arr = []
      if (this.data1)
        for (let i in this.data1.price) {
          if (this.data1.price[i]) arr.push(this.data1.price[i])
        }
      return arr
    },
    getGraph2Data() {
      let arr = []
      if (this.data2)
        for (let i in this.data2.price) {
          if (this.data2.price[i]) arr.push(this.data2.price[i])
        }
      return arr
    },
    getGraph1Name() {
      let arr = []
      if (this.data1)
        for (let i in this.data1.price) {
          if (this.data1.price[i]) arr.push(i)
        }
      return arr
    },
    getGraph2Name() {
      let arr = []
      if (this.data2)
        for (let i in this.data2.price) {
          if (this.data2.price[i]) arr.push(i)
        }
      return arr
    }
  },
  data() {
    return {
      locale1: {state: '', country: ''},

      locale2: {state: '', country: ''},

      currency1: '',
      currency2: '',
      data1: {price: {}},
      data2: {price: {}},
      state1: '',
      state2: '',
      livingCost1: {},
      livingCost2: {},
      selectedLocation1: '',
      selectedLocation2: '',
      expensePrice: 1000.0,
      selected: {
        dateOption: '',
        homeOption: '',
        drivingOption: '',
        familyOption: ''
      },
      dateOptions: [
        {
          name: 'Weekly',
          value: 'weekly',
          enabled: true
        },
        {
          name: 'Monthly',
          value: 'monthly',
          enabled: false
        },
        {
          name: 'Yearly',
          value: 'yearly',
          enabled: false
        }
      ],
      homeOptions: [
        {
          name: 'Rent',
          value: 'rent',
          enabled: true
        },
        {
          name: 'Mortgage',
          value: 'mortgage',
          enabled: false
        },
        {
          name: 'Neither',
          value: 'neither',
          enabled: false
        }
      ],
      drivingOptions: [
        {
          name: 'Driving',
          value: 'driving',
          enabled: true
        },
        {
          name: 'Public Transport',
          value: 'public_transport',
          enabled: false
        },
        {
          name: 'Walking',
          value: 'walking',
          enabled: false
        }
      ],
      familyOptions: [
        {
          name: 'Single',
          value: 'single',
          enabled: true
        },
        {
          name: 'Family',
          value: 'family',
          enabled: false
        }
      ],
      costDetailData1: [],
      costDetailData2: []
    }
  },
  methods: {
    getCountry() {
      // let countryParam = this.$route.params.country
      this.locale1.country = this.country1
      this.locale2.country = this.country2
      this.locale1.state = this.state1
      this.locale2.state = this.state2
      this.locale1 = Object.assign({}, this.locale1);
      this.locale2 = Object.assign({}, this.locale2)
    },
    getLocation1(value) {
      this.selectedLocation1 = value
    },
    getLocation2(value) {
      this.selectedLocation2 = value
    },
    handleOptionClick(option, type) {
      switch (type) {
        case 'date':
          this.dateOptions.find(opt => opt.enabled == true).enabled = false
          this.selected.dateOption = option
          break
        case 'home':
          this.homeOptions.find(opt => opt.enabled == true).enabled = false
          this.selected.homeOption = option
          break
        case 'drive':
          this.drivingOptions.find(opt => opt.enabled == true).enabled = false
          this.selected.drivingOption = option
          break
        case 'family':
          this.familyOptions.find(opt => opt.enabled == true).enabled = false
          this.selected.familyOption = option
          break
      }
      option.enabled = !option.enabled
      this.calculate()
    },
    calculate() {
      const {
        dateOption,
        homeOption,
        drivingOption,
        familyOption
      } = this.selected
      this.data1 = {price: {}}
      this.data2 = {price: {}}
      switch (dateOption.value) {
        case 'weekly':
          this.data1.day = 7
          this.data2.day = 7
          break
        case 'monthly':
          this.data1.day = 30
          this.data2.day = 30
          break
        case 'yearly':
          this.data1.day = 365
          this.data2.day = 365
          break
        default:
          break
      }

      switch (familyOption.value) {
        case 'single':
          this.data1.alone = true
          this.data2.alone = true
          break
        case 'family':
          this.data1.alone = false
          this.data2.alone = false
          break
        default:
          break
      }
      let scope1, scope2
      switch (homeOption.value) {
        case 'rent':
          scope1 = this.livingCost1['Rent Per Month']
          scope2 = this.livingCost2['Rent Per Month']
          if (this.data1.alone) {
            this.data1.price.property = scope1[1].price / 30
            this.data2.price.property = scope2[1].price / 30
          } else {
            this.data1.price.property = scope1[3].price / 30
            this.data2.price.property = scope2[3].price / 30
          }
          break
        case 'mortgage':
          scope1 = this.livingCost1['Buy Apartment Price']
          scope2 = this.livingCost2['Buy Apartment Price']
          if (this.data1.alone) {
            this.data1.price.property = scope1[1].price * 92.903 / 30 / 365 // pay in 30 years, 92.903 is the avg square meter
            this.data2.price.property = scope2[1].price * 92.903 / 30 / 365 // pay in 30 years, 92.903 is the avg square meter
          } else {
            this.data1.price.property = scope1[0].price * 92.903 / 30 / 365 // pay in 30 years, 92.903 is the avg square meter
            this.data2.price.property = scope2[0].price * 92.903 / 30 / 365 // pay in 30 years, 92.903 is the avg square meter
          }
          break
        default:
          this.data1.price.property = 0
          this.data2.price.property = 0
          break
      }

      switch (drivingOption.value) {
        case 'driving':
          scope1 = this.livingCost1['Transportation']
          scope2 = this.livingCost2['Transportation']
          this.data1.price.transport = scope1[5].price / 8 * 30
          this.data2.price.transport = scope2[5].price / 8 * 30
          break
        case 'public_transport':
          scope1 = this.livingCost1['Transportation']
          scope2 = this.livingCost2['Transportation']
          this.data1.price.transport = scope1[0].price * 2
          this.data2.price.transport = scope2[0].price * 2
          break
        default:
          this.data1.price.transport = 0
          this.data2.price.transport = 0
      }

      // food
      let foodScope1 = this.livingCost1['Restaurants']
      let foodScope2 = this.livingCost2['Restaurants']
      let leisureScope1 = this.livingCost1['Sports And Leisure']
      let leisureScope2 = this.livingCost2['Sports And Leisure']
      if (this.data1.alone) {
        this.data1.price.food = foodScope1[0].price * 3
        this.data2.price.food = foodScope2[0].price * 3
        this.data1.price.entertainment =
          leisureScope1[0].price / 30 + leisureScope1[2].price / 7
        this.data2.price.entertainment =
          leisureScope2[0].price / 30 + leisureScope2[2].price / 7
      } else {
        this.data1.price.food = foodScope1[0].price * 3 * 3
        this.data2.price.food = foodScope2[0].price * 3 * 3
        this.data1.price.entertainment =
          (leisureScope1[0].price / 30 + leisureScope1[2].price / 7) * 3
        this.data2.price.entertainment =
          (leisureScope2[0].price / 30 + leisureScope2[2].price / 7) * 3
      }

      for (let item in this.data1.price) {
        this.data1.price[item] = Number(this.data1.price[item].toFixed(2))
        this.data2.price[item] = Number(this.data2.price[item].toFixed(2))
      }
      this.costDetailData1 = [
        {
          title: 'Transport',
          price: this.data1.price.transport * this.data1.day
        },
        {
          title: 'Food',
          price: this.data1.price.food * this.data1.day
        },
        {
          title: 'Property',
          price: this.data1.price.property * this.data1.day || 0
        },
        {
          title: 'Entertainment',
          price: this.data1.price.entertainment * this.data1.day
        }
      ]
      this.costDetailData2 = [
        {
          title: 'Transport',
          price: this.data2.price.transport * this.data2.day
        },
        {
          title: 'Food',
          price: this.data2.price.food * this.data2.day
        },
        {
          title: 'Property',
          price: this.data2.price.property * this.data2.day || 0
        },
        {
          title: 'Entertainment',
          price: this.data2.price.entertainment * this.data2.day
        }
      ]
    }
  },
  watch: {
    selectedLocation1(newValue) {
      let json = require('./location.json')
      let location1 = json.find(val => val.value === newValue)
      let location2 = json.find(val => val.value === this.selectedLocation2)
      if (location1 && location2) {
        // it is possible for a data to be returned undefined
        this.country1 = location1.country
        this.country2 = location2.country
        this.state1 = location1.name
        this.state2 = location2.name

        this.livingCost1 = api.getLivingCost(this.country1, this.state1)
        this.livingCost2 = api.getLivingCost(this.country2, this.state2)
        this.pollution1 = api.getPollution(this.country1, this.state1)
        this.pollution2 = api.getPollution(this.country2, this.state2)
        // this.healthcare = api.getHealthcare(country, state)

        this.currency1 = api.getCurrency(this.country1)
        this.currency2 = api.getCurrency(this.country2)
        this.calculate()
        console.log(this)
        this.getCountry()
        
      }
    },
    selectedLocation2(newValue) {
      let json = require('./location.json')
      let location1 = json.find(val => val.value === this.selectedLocation1)
      let location2 = json.find(val => val.value === newValue)
      if (location1 && location2) {
        // it is possible for a data to be returned undefined
        this.country1 = location1.country
        this.country2 = location2.country
        this.state1 = location1.name
        this.state2 = location2.name

        this.livingCost1 = api.getLivingCost(this.country1, this.state1)
        this.livingCost2 = api.getLivingCost(this.country2, this.state2)
        this.pollution1 = api.getPollution(this.country1, this.state1)
        this.pollution2 = api.getPollution(this.country2, this.state2)
        // this.healthcare = api.getHealthcare(country, state)

        this.currency1 = api.getCurrency(this.country1)
        this.currency2 = api.getCurrency(this.country2)
        this.calculate()
        console.log(this)
        this.getCountry()
      }
    }
  }
}
</script>

<style>
.location {
  display: inline-block;
  width: 50%;
}

.costWrapper {
  display: flex;
}

.containerTitle {
  color: #2d3092;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}

#estimationTitle {
  text-align: center;
}

.subtitle {
  font-style: italic;
  font-size: 12px;
  color: grey;
}

.layoutWrapper {
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}

.expensePrice {
  font-size: 30px;
  color: #7b7e8b;
}

.layout2 {
  text-align: center;
}

.icon-color,
.optionsRow .icon-color {
  color: #2d3092;
}

.optionsContainer {
  text-align: left;
}

.optionButton {
  margin: 5px;
  border-radius: 17%;
  border: 1px solid black;
  background-color: white !important;
  color: black;
  height: 30px;
  min-width: 80px;
  box-shadow: initial;
  padding: 0px 10px;
  transition: all 0.3s;
}

.optionButton:focus {
  outline: 0;
}

.optionButton:hover,
.active {
  margin: 5px;
  background-color: #2d3092 !important;
  color: white;
  border: 1px solid #2d3092;
}

.subtitle {
  font-style: italic;
  font-size: 12px;
  color: grey;
}
</style>
