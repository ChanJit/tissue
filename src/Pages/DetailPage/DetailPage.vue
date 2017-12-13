<template>
  <v-container fluid grid-list-lg class="extraTopMargin">
    <v-flex class="extraTopMargin">
      <DetailsTopImage :locale="locale"></DetailsTopImage>
    </v-flex>
    <v-layout row wrap>
      <v-container grid-list-md text-xs-center icons>
        <v-layout row wrap class="layoutWrapper">
          <v-flex lg3 md12 id="estimationTitle">
            <span class="containerTitle"> Living Expenses Estimation </span>
          </v-flex>
          <v-flex lg4 md12 class="optionsColumn">
            <div class="optionsRow">
              <v-icon class="icon-color" large>date_range</v-icon>
              <button v-for="option in dateOptions" @click="handleOptionClick(option, 'date')" :class="{ active: option.enabled, optionButton: true }">{{option.name}}</button>
            </div>
            <div class="optionsRow mt-3">
              <v-icon class="icon-color" large>home</v-icon>
              <button v-for="option in homeOptions" @click="handleOptionClick(option, 'home')" :class="{ active: option.enabled, optionButton: true }">{{option.name}}</button>
            </div>
          </v-flex>
          <v-flex lg4 md12>
            <div class="optionsRow">
              <v-icon class="icon-color" large>drive_eta</v-icon>
              <button v-for="option in drivingOptions" @click="handleOptionClick(option, 'drive')" :class="{ active: option.enabled, optionButton: true }">{{option.name}}</button>
            </div>
            <div class="optionsRow mt-3">
              <v-icon class="icon-color" large>face</v-icon>
              <button v-for="option in familyOptions" @click="handleOptionClick(option, 'family')" :class="{ active: option.enabled, optionButton: true }">{{option.name}}</button>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      <v-flex xs12>
        <hr>
        <v-layout row wrap>
          <v-flex xs12 md7>
            <PieChart :data="[1,2,3,4,5]" :labels="['a','b','c','d','e']"/>
          </v-flex>
          <v-flex xs12 md5 class="costWrapper">
            <CostDetails :items="costDetailData" :dateMode="selected.dateOption"></CostDetails>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
          <TabView/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PieChart from './components/PieChart'
import CostDetails from './components/CostDetails'
import TabView from './components/TabView'
import DetailsTopImage from './components/DetailsTopImage'
import * as api from '../../data/api'

export default {
  name: 'DetailPage',
  components: {
    PieChart,
    CostDetails,
    TabView,
    DetailsTopImage
  },
  created(){
    this.selected.dateOption = this.dateOptions.find(opt => opt.enabled == true);
    this.selected.homeOption = this.homeOptions.find(opt => opt.enabled == true);
    this.selected.drivingOption = this.drivingOptions.find(opt => opt.enabled == true);
    this.selected.familyOption = this.familyOptions.find(opt => opt.enabled == true);
    this.getCountry();
    this.getState();
  },
  data () {
    return {
      locale: {state: "", country:""},
      expensePrice: 1000.00,
      selected: {
        dateOption: "",
        homeOption: "",
        drivingOption: "",
        familyOption: ""
      },
      dateOptions: [
        {
          name: "Weekly",
          value:"weekly",
          enabled: true
        },
        {
          name: "Monthly",
          value:"monthly",
          enabled: false
        },
        {
          name: "Yearly",
          value:"yearly",
          enabled: false
        }
      ],
      homeOptions: [
        {
          name: "Rent",
          value:"rent",
          enabled: true
        },
        {
          name: "Mortgage",
          value:"mortgage",
          enabled: false
        },
        {
          name: "Neither",
          value:"neither",
          enabled: false
        }
      ],
      drivingOptions: [
        {
          name: "Driving",
          value:"driving",
          enabled: true
        },
        {
          name: "Public Transport",
          value:"public_transport",
          enabled: false
        },
        {
          name: "Walking",
          value:"walking",
          enabled: false
        }
      ],
      familyOptions: [
         {
          name: "Single",
          value: "single",
          enabled: true
        },
        {
          name: "Family",
          value: "family",
          enabled: false
        }
      ],
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
  },
  methods:{
    handleOptionClick(option, type){
      switch(type){
        case "date":
          (this.dateOptions.find(opt => opt.enabled == true)).enabled = false;
          this.selected.dateOption = option;
          break;
        case "home":
          (this.homeOptions.find(opt => opt.enabled == true)).enabled = false;
          this.selected.homeOption = option;
          break;
        case "drive":
          (this.drivingOptions.find(opt => opt.enabled == true)).enabled = false;
          this.selected.drivingOption = option;
          break;
        case "family": 
          (this.familyOptions.find(opt => opt.enabled == true)).enabled = false;
          this.selected.familyOption = option;
          break;
      }
      option.enabled = !option.enabled;
    },
    getCountry(){
      let countryParam = this.$route.params.country;
      this.locale.country = countryParam.charAt(0).toUpperCase() + countryParam.slice(1);
    },
    getState(){
      let stateParam = this.$route.params.state;
      var state = '';
      if(stateParam){     //construct the state string
        let stateChars = stateParam.split("-");
        stateChars.forEach(char => {
          let capitalized = char.charAt(0).toUpperCase() + char.slice(1);
          capitalized += " ";
          state += capitalized;
      });
      //remove empty space
        state = state.slice(0, -1);
        this.locale.state = state;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.costWrapper{
  display: flex;
}

.containerTitle{
  color: #2d3092;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}

#estimationTitle{
  text-align: center;
}

.subtitle{
  font-style: italic;
  font-size: 12px;
  color: grey;
}

.layoutWrapper{
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 10px  !important;
  margin-bottom: 10px !important;
}

.expensePrice{
  font-size: 30px;
  color: #7B7E8B;
}

.layout2{
  text-align: center;
}

.icon-color{
  color: #2d3092;
}

.optionsContainer{
  text-align: left;
} 

.optionButton{
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

.optionButton:focus{
  outline: 0;
}

.optionButton:hover, .active{
  margin: 5px;
  background-color: #2d3092 !important;
  color: white;
  border: 1px solid #2d3092;
} 
.extraTopMargin {
  margin-top: 18px;
}
</style>
