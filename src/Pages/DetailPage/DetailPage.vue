<template>
    <HorizontalBarChart :data="[1,2,3,4,5]" :labels="['a','b','c','d','e']"/>
</template>

<script>
import HorizontalBarChart from './components/HorizontalBarChart'
export default {
  name: 'DetailPage',
  components: {
    HorizontalBarChart
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
