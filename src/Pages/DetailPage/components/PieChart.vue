<template>
  <chartjs-pie
    :option="{
        legend: { display: false },
        scaleShowVerticalLines: false,
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                   drawBorder: false                    
                }
            }],
            yAxes: [{
                display: false,
                gridLines : {
                   display : false,
                },
            }]
        }
    }"
    :data="data"
    :labels="labels"
  />
</template>

<script>
export default {
  name: 'PieChart',
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

</style>