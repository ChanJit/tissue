<template>
  <v-container fluid grid-list-lg class="extraTopMargin">
    <v-flex class="extraTopMargin">
      <DetailsTopImage :locale="locale"  :float="'right'" :selectedLocation="'kl'"></DetailsTopImage>
    </v-flex>
    <v-layout row wrap>
      <v-container grid-list-md text-xs-center icons>
        <v-layout row wrap class="layoutWrapper">
          <v-flex lg3 md12 xs12 id="estimationTitle">
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
      <v-flex xs12>
        <hr>
        <v-layout row wrap>
          <v-flex xs12 md7>
            <PieChart  :data="getGraphData" :labels="getGraphName"/>
          </v-flex>
          <v-flex xs12 md5 class="costWrapper">
            <CostDetails :currency="currency || '' " :items="costDetailData" :dateMode="selected.dateOption"></CostDetails>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
          <TabView :currency="currency || '' " :data="this.livingCost"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DetailsTopImage from './components/DetailsTopImage'
import PieChart from './components/PieChart'
import CostDetails from './components/CostDetails'
import TabView from './components/TabView'
import * as api from '../../data/api'

const capitalString = string => {
  return string
    .split('-')
    .map(val => val.charAt(0).toUpperCase() + val.slice(1))
    .join(' ')
}
export default {
  name: 'DetailPage',
  components: {
    DetailsTopImage,
    PieChart,
    CostDetails,
    TabView,
    DetailsTopImage
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
    this.getCountry()
    this.getState()
  },
  data() {
    return {
      locale: {state: '', country: ''},
      currency: '',
      data: {
        price: {}
      },
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
      livingCost: {},
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
      costDetailData: []
    }
  },
  computed: {
    getGraphData() {
      let arr = []
      if (this.data)
        for (let i in this.data.price) {
          if(this.data.price[i])
            arr.push(this.data.price[i])
        }
      return arr
    },
    getGraphName() {
      let arr = []
      if (this.data)
        for (let i in this.data.price) {
          if(this.data.price[i])
           arr.push(i)
        }
      return arr
    }
  },
  methods: {
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
      this.calculate();
    },
      getDescription(){

      },
    getCountry() {
      let countryParam = this.$route.params.country
      this.locale.country =
        countryParam.charAt(0).toUpperCase() + countryParam.slice(1)
    },
    getState() {
      let stateParam = this.$route.params.state
      var state = ''
      if (stateParam) {
        //construct the state string
        let stateChars = stateParam.split('-')
        stateChars.forEach(char => {
          let capitalized = char.charAt(0).toUpperCase() + char.slice(1)
          capitalized += ' '
          state += capitalized
        })
        //remove empty space
        state = state.slice(0, -1)
        this.locale.state = state
      }
    },
    calculate() {
      const {
        dateOption,
        homeOption,
        drivingOption,
        familyOption
      } = this.selected
      this.data = {price: {}}
      switch (dateOption.value) {
        case 'weekly':
          this.data.day = 7
          break
        case 'monthly':
          this.data.day = 30
          break
        case 'yearly':
          this.data.day = 365
          break
        default:
          break
      }

      switch (familyOption.value) {
        case 'single':
          this.data.alone = true
          break
        case 'family':
          this.data.alone = false
          break
        default:
          break
      }
      let scope
      switch (homeOption.value) {
        case 'rent':
          scope = this.livingCost['Rent Per Month']
          if (this.data.alone) {
            this.data.price.property = scope[1].price / 30
          } else {
            this.data.price.property = scope[3].price / 30
          }
          break
        case 'mortgage':
          scope = this.livingCost['Buy Apartment Price']
          if (this.data.alone) {
            this.data.price.property = scope[1].price * 92.903 / 30 / 365 // pay in 30 years, 92.903 is the avg square meter
          } else {
            this.data.price.property = scope[0].price * 92.903 / 30 / 365 // pay in 30 years, 92.903 is the avg square meter
          }
          break
        default:
          this.data.price.property = 0
          break
      }

      switch (drivingOption.value) {
        case 'driving':
          scope = this.livingCost['Transportation']
          this.data.price.transport = scope[5].price / 8 * 30
          break
        case 'public_transport':
          scope = this.livingCost['Transportation']
          this.data.price.transport = scope[0].price * 2
          break
        default:
          this.data.price.transport = 0
      }

      // food
      let foodScope = this.livingCost['Restaurants']
      let leisureScope = this.livingCost['Sports And Leisure']
      if (this.data.alone) {
        this.data.price.food = foodScope[0].price * 3
        this.data.price.entertainment =
          leisureScope[0].price / 30 + leisureScope[2].price / 7
      } else {
        this.data.price.food = foodScope[0].price * 3 * 3
        this.data.price.entertainment =
          (leisureScope[0].price / 30 + leisureScope[2].price / 7) * 3
      }

      for (let item in this.data.price) {
        this.data.price[item] = Number(this.data.price[item].toFixed(2))
      }

      this.costDetailData = [
        {
          title: 'Transport',
          price: this.data.price.transport * this.data.day
        },
        {
          title: 'Food',
          price: this.data.price.food * this.data.day
        },
        {
          title: 'Property',
          price: this.data.price.property * this.data.day || 0
        },
        {
          title: 'Entertainment',
          price: this.data.price.entertainment * this.data.day
        }
      ]
    }
  },
  mounted() {
    let country = this.$route.params.country
    if (country) {
      // it is possible for a data to be returned undefined
      country = capitalString(country.toLowerCase())
      let state = this.$route.params.state
      if (state) {
        state = capitalString(state.toLowerCase())
        this.livingCost = api.getLivingCost(country, state)
        this.pollution = api.getPollution(country, state)
        this.healthcare = api.getHealthcare(country, state)
      } else {
        this.livingCost = api.getLivingCost(country)
        this.pollution = api.getPollution(country)
        this.healthcare = api.getHealthcare(country)
      }
      this.currency = api.getCurrency(country)
      this.calculate();
      console.log(this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.icon-color {
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
.extraTopMargin {
  margin-top: 18px;
}

.subtitle {
  font-style: italic;
  font-size: 12px;
  color: grey;
}
</style>
