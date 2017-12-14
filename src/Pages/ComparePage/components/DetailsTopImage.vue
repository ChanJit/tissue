<template>
    <div class="locationdetails_container" :class="location.value" >
        <div class="locationdetails" :class="float">
            <div class="locationdetails-center">
                <div class="descrip">
                    <img class="icon" src="../../../assets/map-markers.png" height="30" width="30"/>
                    <label>{{locale.state}}</label>
                </div>
                <div class="descrip">
                    <img class="icon" src="../../../assets/temperature.png" height="30" width="30"/>
                    <label>{{temperature.highest}}℃  |  {{temperature.lowest}}℃</label>
                </div>
                <div class="descrip">
                    <img class="icon" src="../../../assets/pollution.png" height="30" width="30"/>
                    <label>{{pollution}}</label>
                </div>
                <div class="descrip">
                    <img class="icon" src="../../../assets/traffic-light.png" height="30" width="30"/>
                    <label>{{traffic}}</label>
                </div>
                <div class="descrip">
                        <a id="jobCountText" target="_blank" :href="stateJobProfile.link"><label><strong>{{stateJobProfile.jobCounts}}</strong> jobs available </label></a>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as api from '../../../data/api'
export default {
  props: {
    float: {
      type: String
    },
    locale: {
      type: Object
    },
    qwe: {
      type: String
    }
  },
  watch: {
    locale: {
      handler(val, oldVal) {
        this.getImageBackground()
        this.getTotalJobsProfile()
        this.getPollutionData()
        this.getTrafficData()
        this.getTemperatureData()
      },
      deep: true
    }
  },
  data() {
    return {
      location: {name: this.locale.state, value: ''},
      temperature: {highest: 30, lowest: 20},
      pollution: '',
      traffic: 60,
      stateJobProfile: {
        jobCounts: '',
        link: ''
      }
    }
  },
  methods: {
    getTotalJobsProfile() {
      const profile = api.getStateJobProfile(
        this.locale.country,
        this.locale.state
      )
      this.stateJobProfile.jobCounts = profile['Job Count']
      this.stateJobProfile.link = profile['Link to job']
    },
    getPollutionData() {
      const data = api.getPollution(this.locale.country, this.location.state)
      this.pollution = data[0].level
    },
    getTrafficData() {
      console.log(this.locale.country)
      switch (this.locale.country) {
        case 'Malaysia':
          this.traffic = 192.35
          break
        case 'Singapore':
          this.traffic = 177.62
          break
        case 'Australia':
          this.traffic = 183.17
          break
      }
    },
    getTemperatureData() {
      switch (this.locale.country) {
        case 'Malaysia':
          this.temperature.highest = '32'
          this.temperature.lowest = '23'
          break
        case 'Singapore':
          this.temperature.highest = '28'
          this.temperature.lowest = '24'
          break
        case 'Australia':
          this.temperature.highest = '34'
          this.temperature.lowest = '10'
          break
      }
    },
    getImageBackground() {
      switch (this.locale.state) {
        case 'Kuala Lumpur':
          this.location.value = 'kl'
          break
        case 'Ipoh':
          this.location.value = 'ipoh'
          break
        case 'Johor Bahru':
          this.location.value = 'jb'
          break
        case 'Petaling Jaya':
          this.location.value = 'pj'
          break
        case 'George Town':
          this.location.value = 'george-town'
          break
        case 'Singapore':
          this.location.value = 'singapore'
          break
        case 'Sydney':
          this.location.value = 'sydney'
          break
        case 'Melbourne':
          this.location.value = 'melbourne'
          break
        case 'Gold Coast':
          this.location.value = 'gold-coast'
          break
        default:
          this.location.value = 'default-city'
      }
    }
  },
  mounted() {
    
    // debugger;
    console.log(this)
  }
}
</script>

<style scoped>
#jobCountText {
  color: white;
  cursor: pointer;
}

.locationdetails_container {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  color: #fff;
}

.locationdetails {
  padding: 0 90px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  ); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(
    right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  ); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(
    right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  ); /* For Firefox 3.6 to 15 */
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  ); /* Standard syntax (must be last) */
}

.locationdetails-center {
  color: #fff;
  text-align: left;
}

.locationdetails-center label {
  font-size: 30px;
  vertical-align: middle;
}

.descrip {
  margin: 50px 0;
  z-index: 2;
}
.icon {
  margin-right: 10px;
  vertical-align: middle;
}

.left {
  float: left;
}

.right {
  float: right;
}

.kl {
  background-image: url('../../../assets/cities/kl.png');
}

.ipoh {
  background-image: url('../../../assets/cities/ipoh.png');
}

.george-town {
  background-image: url('../../../assets/cities/george-town.png');
}

.jb {
  background-image: url('../../../assets/cities/jb.png');
}

.pj {
  background-image: url('../../../assets/cities/pj.png');
}

.singapore {
  background-image: url('../../../assets/cities/singapore.png');
}

.melbourne {
  background-image: url('../../../assets/cities/melbourne.png');
}

.sydney {
  background-image: url('../../../assets/cities/sydney.png');
}

.gold-coast {
  background-image: url('../../../assets/cities/gold-coast.png');
}

.default-city {
  background-image: url('../../../assets/taiwan-city-life-wallpaper-2.png');
}
</style>