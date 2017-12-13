<template>
    <div>
        <div class="extraTopMargin">
            <Search @selectedLocation1="getLocation1" @selectedLocation2="getLocation2"/>
        </div>
        <v-layout wrap>
          <div v-show=selectedLocation1 class="location">
              <DetailsTopImage :float="'right'" :selectedLocation="selectedLocation1"/>

          </div>
          <div v-show=selectedLocation2 class="location">
              <DetailsTopImage :float="'right'" :selectedLocation="selectedLocation2"/>
          </div>
        </v-layout>
        <v-container v-show=selectedLocation2 grid-list-md text-xs-center icons>
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
      <v-divider ></v-divider>
      <v-layout wrap>
        <div v-show=selectedLocation2 >
          <pie-chart :data="[1,2,3,4,5]" :labels="['a','b','c','d','e']" class="location"></pie-chart>
        </div>
        <div v-show=selectedLocation2>
          <pie-chart :data="[1,2,3,4,5]" :labels="['a','b','c','d','e']" class="location"></pie-chart>
        </div>
      </v-layout>

      <v-layout v-show=selectedLocation2 wrap>
        <cost-details :items="costDetailData" :dateMode="selected.dateOption" class="location"></cost-details>
        <cost-details :items="costDetailData" :dateMode="selected.dateOption" class="location"></cost-details>
      </v-layout>
    </div>
</template>

<script>
import Search from './components/Search'
import DetailsTopImage from './components/DetailsTopImage'
import PieChart from '../DetailPage/components/PieChart'
import CostDetails from '../DetailPage/components/CostDetails'

export default {
    name: 'ComparePage',
    components: {
        Search,
        DetailsTopImage,
        PieChart,
        CostDetails
    },
    created(){
      this.selected.dateOption = this.dateOptions.find(opt => opt.enabled == true);
      this.selected.homeOption = this.homeOptions.find(opt => opt.enabled == true);
      this.selected.drivingOption = this.drivingOptions.find(opt => opt.enabled == true);
      this.selected.familyOption = this.familyOptions.find(opt => opt.enabled == true);
    },
    data () {
        return {
            selectedLocation1: "",
            selectedLocation2: "",
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
    methods: {
        getLocation1(value){
            this.selectedLocation1 = value;
        },
        getLocation2(value){
            this.selectedLocation2 = value;
        },
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
        }
    }
}
</script>

<style>
    .location {
        display: inline-block;
        width: 50%;
    }

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
</style>
