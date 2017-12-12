
<template>
  <chartjs-horizontal-bar 
    :option="{
        legend: { display: false },
        scaleShowVerticalLines: false,
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                   drawBorder: false                    
                }
            }],
            yAxes: [{
                gridLines : {
                   display : false,
                },
            }]
        }
    }"
    :data="data"
    :labels="labels"
    :backgroundcolor="'#569ad9'" :bordercolor="'#569ad9'"
  ></chartjs-horizontal-bar>
</template>

<script>
export default {
  name: 'Chart',
  props: {
    data: {
      type: Array
    },
    labels: {
      type: Array
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      options: {
        legend: {
          display: false,
          labels: {
            display: false
          }
        }
      }
    }
  }
}
/*
Example
<Chart :data="[1,2,3,4,5]" :labels="['a','b','c','d','e']"/>
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
}
</style>
